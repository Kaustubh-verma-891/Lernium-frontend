import { Search } from 'lucide-react';
import Calendar from '../../components/dashboard/Calendar';
import DropDownMenu from '../../components/dashboard/DropDownMenu'

export default function Dashboard() {
    return (<>
        <StudentDashboard />
    </>
    )
}

const StudentDashboard = () => {
    return (
        <main className="flex-1 bg-customBlue/30 overflow-auto">
            <header className="w-full p-4 flex items-center justify-between border-b">
                <div className="w-1/2 relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for Groups"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    />
                </div>
                <DropDownMenu />
            </header>
            <main className='w-10/12 mx-auto'>
                <div className='w-full mt-10 bg-customCream rounded-2xl overflow-hidden'>
                    <h1 className='bg-customGrey py-5 text-center text-xl font-semibold shadow-xl'>Ongoing & Upcoming Sessions</h1>
                    <div className='py-14 text-center overflow-y-auto'>No Sessions yet..</div>
                </div>
                <div className='flex mg:flex-col mt-5 justify-center'>
                    <div className='mx-10'>
                        <div class="bg-customCream shadow-lg rounded-lg p-6 w-full max-w-md h-[380px]">
                            <h1 class="text-2xl font-bold text-gray-800 mb-4">To-Do List</h1>
                            <form id="todo-form" class="flex mb-4">
                                <input type="text" id="todo-input" placeholder="Add a new task"
                                    class="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button type="button"
                                    class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition">Add</button>
                            </form>
                            <ul id="todo-list" class="space-y-3">
                            </ul>
                        </div>
                    </div>
                    <div className='mx-10'>
                        <Calendar />
                    </div>
                </div>
            </main>
        </main>
    );
};
