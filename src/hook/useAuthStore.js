import { create } from 'zustand'
import { io } from 'socket.io-client'
import { axiosInstance } from '../utils/axios'
import toast from 'react-hot-toast'
const baseURL = 'http://localhost:8080'

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    socket: null,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check')
            set({ authUser: res.data })
            get().connectSocket();
        } catch (error) {
            console.log(error);
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (formData) => {
        set({ isSigningUp: true })
        try {
            const response = await axiosInstance.post("/auth/signup", {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
            });
            toast.success("Account created Successfully")
            set({ authUser: response.data })
            return true;
        } catch (error) {
            toast.error(error.response.data.message)
            console.error("Error creating post:", error.message);
            return false;
        } finally {
            set({ isSigningUp: false })
        }
    },

    login: async (formData) => {
        set({ isLoggingIn: true })
        try {
            const response = await axiosInstance.post('/auth/login', {
                email: formData.email,
                password: formData.password
            })
            set({ authUser: response.data.user })
            toast.success("Logged in Successfully")
            get().connectSocket();
        } catch (error) {
            toast.error(error.response.data.message)
            console.error(error.message)
        } finally {
            set({ isLoggingIn: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout')
            set({ authUser: null })
            toast.success("Logout Successfully")
            get().disconnectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    updateImage: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosInstance.put('auth/update-image', data)
            set({ authUser: res.data })
            toast.success('Image Updated Successfully')
        } catch (error) {
            console.log("Error", error);
            toast.error(error.response.data.message)
        } finally {
            set({ isUpdatingProfile: false })
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosInstance.patch('auth/update-profile', data)
            set({ authUser: res.data })
            toast.success('Profile Updated Successfully')
        } catch (error) {
            console.log("Error", error);
            toast.error("Something went wrong.")
        } finally {
            set({ isUpdatingProfile: false })
        }
    },
    connectSocket: () => {
        const { authUser } = get();
        if (!authUser || get().socket?.connected) return;

        const socket = io(baseURL, {
            query: {
                userId: authUser._id
            }
        })
        socket.connect();
        set({ socket: socket })
    },
    disconnectSocket: () => {
        if (get().socket?.connected) {
            get().socket.disconnect();
        }
    }
}))