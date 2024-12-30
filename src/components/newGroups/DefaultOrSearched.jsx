import { useAuthStore } from "../../hook/useAuthStore"

function Cards({ prop }) {
    const Group = prop.map(g => {
        return <Card key={g._id} data={g} />
    })
    return (<main className="w-[90%] h-[500px] overflow-auto">
        {Group}
    </main>)
}

function Card({ data }) {
    const { authUser } = useAuthStore();
    const join = () => {
    }
    return (
        <div className="w-full h-20 my-3 bg-customBlue/30 flex justify-between transition-all duration-200 hover:shadow-xl">
            <section>
                <h3 className="text-lg mx-3 mt-2">{data.name}</h3>
                <p className="mx-3">{data.field} <span className="mx-4 text-sm text-slate-500">· {data.region}</span></p>
            </section>
            <section className="flex items-center mx-3">
                {authUser._id !== data.admin && <button onClick={join} className="bg-customBlue text-white px-2 py-1 transition-all duration-300 hover:scale-95">Join</button>}
            </section>
        </div >
    )
}

export default function DefaultOrSearched({ prop }) {
    return (
        <Cards prop={prop} />
    )
}