import { create } from 'zustand'
import { useAuthStore } from './useAuthStore'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios'

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUserLoading: false,
    isMessagesLoading: false,
    getUsers: async () => {
        set({ isUserLoading: true })
        try {
            const response = await axiosInstance.get('/message/users')
            set({ users: response.data })
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isUserLoading: false })
        }
    },
    getMessages: async (userId) => {
        set({ isMessagesLoading: true })
        try {
            const messages = await axiosInstance.get(`/message/${userId}`)
            set({ messages: messages.data })
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isMessagesLoading: false })
        }
    },
    sendMessage: async (message) => {
        const { selectedUser, messages } = get();
        try {
            const response = await axiosInstance.post(`/message/send/${selectedUser?._id}`, message);
            set({ messages: [...messages, response.data] })

        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    listenRealTimeMessage: async () => {
        const { selectedUser } = get()
        if (!selectedUser) return;

        const socket = useAuthStore.getState().socket;

        socket.on("newMessage", (newMessage) => {
            if (newMessage.senderId !== selectedUser._id) return;
            set({ messages: [...get().messages, newMessage] })
        })
    },
    UnlistenRealTimeMessage: async () => {
        const socket = useAuthStore.getState().socket;
        socket.off('newMessage')
    },

    setSelectedUser: (selectedUser) => set({ selectedUser }),
}))