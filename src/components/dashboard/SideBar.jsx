import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboardIcon, MessageCircle, Users, PlusCircle, Brain, Settings } from 'lucide-react'
import logo from '../../assets/logo/logo.svg'

function SideBar() {
    const [isExtend, setIsExtend] = useState(false);

    const links = [
        {
            name: "Dashboard",
            to: '/dashboard',
            icon: <LayoutDashboardIcon />
        },
        {
            name: "Messages",
            to: '/messages',
            icon: <MessageCircle />
        },
        {
            name: "Groups",
            to: '/groups',
            icon: <Users />
        },
        {
            name: "New Groups",
            to: '/new',
            icon: <PlusCircle />
        },
        {
            name: "AI Assistant",
            to: '/assitant',
            icon: <Brain />
        },
        {
            name: "Settings",
            to: '/setting',
            icon: <Settings />
        },
    ]

    return (
        <div className={`h-full bg-customVoilet text-white flex flex-col transition-all duration-300 ease-in-out
        ${isExtend ? "w-56 p-6" : "w-16 p-2"}`}
            onMouseEnter={() => setIsExtend(true)}
            onMouseLeave={() => setIsExtend(false)}>
            <div>
                <div className="mb-8">
                    <img className='w-40 mx-auto' src={logo} alt="LOGO" />
                </div>

                <nav className="space-y-4">
                    {links.map((item) => (
                        <NavLink key={item.name} to={item.to} className={`flex items-center p-3 rounded-lg cursor-pointer group hover:bg-customBlue`}>
                            <div className="w-6 h-6 inline-block">
                                {item.icon}
                            </div>
                            {isExtend && <span className={`ml-2 transition-all duration-500 ease-in-out`}>
                                {item.name}
                            </span>}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default SideBar