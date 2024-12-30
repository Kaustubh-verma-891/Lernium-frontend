import { useEffect } from "react";
import { useChatStore } from "../../hook/useChatStore"
import { MessageSquare } from 'lucide-react'
import Avatar from '../../assets/images/avatar.png'

const Chats = () => {
    const { getUsers, users, setSelectedUser, selectedUser } = useChatStore();
    useEffect(() => {
        getUsers();
    }, [getUsers])
    return (
        <div className="w-[30%] h-full bg-customBlue/30 border-r flex flex-col">
            <div className="flex justify-center my-5">
                <MessageSquare className="size-8" />
                <h1 className="text-xl ml-2 hidden sm:block">Messages</h1>
            </div>
            <div className="w-full h-full overflow-y-hidden">
                {users.map((user) => {
                    return (
                        <button key={user._id} onClick={() => setSelectedUser(user)} className={`w-[95%] h-20 mx-auto rounded-xl mb-3 flex items-center ${selectedUser?._id === user._id ? "bg-customBlue/70" : "bg-customBlue/30"} transition-all duration-300 hover:bg-customBlue/70 `}>
                            <div className="mx-auto sm:mx-3">
                                <img src={user.profilePicture || Avatar} className="size-12 object-cover rounded-full" alt="IMG" />
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-md text-white">{user.firstName} {user.lastName}</span>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Chats