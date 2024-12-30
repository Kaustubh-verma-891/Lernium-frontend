import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hook/useAuthStore";
import Avatar from '../../assets/images/avatar.png'

export default function Profile() {
    const { authUser, logout } = useAuthStore();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(click => !click)
    }
    return (<div className="relative mr-5">
        <button onClick={handleClick} className='size-10 bg-white flex justify-center items-center overflow-hidden rounded-full border-2'>
            <img src={authUser?.profilePicture || Avatar} alt="" />
        </button>
        {open &&
            <div className="absolute top-14 -left-5 w-20 py-2 text-center rounded-lg flex flex-col bg-white">
                <div className="mb-2 text-sm"><Link to="/profile">Profile</Link></div>
                <div className="mb-2 text-sm"><Link to="#">Help</Link></div>
                <div className="mb-2 text-sm"><button onClick={logout}>Logout</button></div>
            </div>}
    </div>)
}