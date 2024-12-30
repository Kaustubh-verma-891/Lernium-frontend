import { create } from 'zustand'
import { useAuthStore } from './useAuthStore'
import { axiosInstance } from '../utils/axios'
import toast from 'react-hot-toast'


export const useGroupStore = create((set) => ({
    createGroup: async ({ formData, admin }) => {
        try {
            const response = await axiosInstance.post("/groups/new", {
                name: formData.name,
                field: formData.field,
                region: formData.region,
                language: formData.language,
                description: formData.description,
                admin
            });
            toast.success("Group is created")
            console.log("Post created:", response.data);
            return true
        } catch (error) {
            console.error("Error creating post:", error.message);
            return false
        }
    },
    getAllGroup: async () => {
        const response = await axiosInstance.get('/groups');
        return response.data
    },
}))