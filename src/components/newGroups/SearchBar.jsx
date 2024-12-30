import { Search } from "lucide-react"

export default function SearchBar() {
    return (<>
        <header className="w-full p-4 border-b-2">
            <form className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
            </form>
        </header>
    </>)
}