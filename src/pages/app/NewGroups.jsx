import { useEffect, useState } from "react"
import { axiosInstance } from "../../utils/axios"

import SerachBar from "../../components/newGroups/SearchBar"
import CreateButton from "../../components/newGroups/CreateButton"
import DefaultOrSearched from "../../components/newGroups/DefaultOrSearched"

const defaultGroups = [
    {
        _id: 1,
        name: "YOOO",
        region: "UK",
        field: "CS",
    },
    {
        _id: 2,
        name: "Study Group",
        region: "India",
        field: "EE",
    },
    {
        _id: 3,
        name: "Trip",
        region: "India",
        field: "Pata nhi",
    },
    {
        _id: 4,
        name: "Kuch to hai",
        region: "Hell",
        field: "Pain",
    },
    {
        _id: 5,
        name: "Deeds",
        region: "Heaven",
        field: "Joy",
    }
]

function NewGroups() {
    const [group, setGroup] = useState(defaultGroups);
    useEffect(() => {
        const getGroups = async () => {
            const response = await axiosInstance.get('/groups');
            setGroup(response.data)
        }
        getGroups();
    }, [])
    return (<div className="w-full bg-customBlue/30">
        <div className="w-[90%] mt-8 md:w-[60%] md:mt-14 mx-auto flex flex-col justify-center items-center">
            <SerachBar />
            <CreateButton />
            <DefaultOrSearched prop={group} />
        </div>
    </div>)
}

export default NewGroups