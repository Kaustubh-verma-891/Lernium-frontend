import { Link } from "react-router-dom"
import { PlusCircle } from "lucide-react"

export default function CreateGroup() {
    return (
        <Link to={`/new/group`}
            className="w-[90%] h-12 my-6 bg-customBlue flex justify-center items-center text-lg transition-all duration-300 hover:scale-105">
            <PlusCircle className="text-white mx-2" />
            <h2 className="text-white">Create Group</h2>
        </Link>
    )
}