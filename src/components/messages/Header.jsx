import { useChatStore } from "../../hook/useChatStore"
import { X } from "lucide-react"
import Avatar from '../../assets/images/avatar.png'

const Header = () => {
    const { selectedUser, setSelectedUser } = useChatStore();

    return (
        <div className="w-full h-16 p-2 border-b-2 bg-customVoilet flex items-center justify-between">
            <div className="ml-3 flex items-center">
                <div className="">
                    <img className="size-12 rounded-full object-cover" src={selectedUser?.profilePicture || Avatar} alt="IMG" />
                </div>
                <span className="text-white ml-3">
                    {selectedUser?.firstName} {selectedUser?.lastName}
                </span>
            </div>
            <button onClick={() => setSelectedUser(null)} className="p-1 mr-3 rounded-full transition-all duration-200 hover:bg-slate-300 hover:text-customBlack text-customCream">
                <X className="size-6" />
            </button>
        </div>
    )
}

export default Header