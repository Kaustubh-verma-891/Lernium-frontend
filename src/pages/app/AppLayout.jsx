import { Outlet } from 'react-router-dom'
import SideBar from '../../components/dashboard/SideBar'
export default function AppLayout() {
    return (
        <div className="flex h-screen">
            <SideBar />
            <Outlet />
        </div>
    )
}