import { Link } from "react-router-dom";
import Cover from "../../components/landingComponents/Cover";
import groupIcon from "../../assets/icons/group.svg";
import videoSession from "../../assets/icons/videoSession.svg";
import resources from "../../assets/icons/resources.svg";
import person from "../../assets/images/person.png"
import '../../styles/LandingPage.css'



function Cards() {
    const cardData = [
        {
            cardbg: "card1",
            iconbg: "icon1",
            icon: groupIcon,
            heading: "Group Study",
            text: "Collaborate and clarify concepts with peers in real-time, staying motivated and engaged."
        },
        {
            cardbg: "card2",
            iconbg: "icon2",
            icon: videoSession,
            heading: "Online Video Sessions",
            text: "Participate in live video calls to exchange ideas, solve problems, and get instant feedback."
        },
        {
            cardbg: "card3",
            iconbg: "icon3",
            icon: resources,
            heading: "Shared Resources",
            text: "Access and share a variety of study materials, enhancing learning through diverse resources."
        }
    ]

    const cards = cardData.map(e => {
        return (
            <Card key={cardData.indexOf(e)} data={e} />
        )
    })

    return (
        <div className="my-16 flex flex-col lg:flex-row justify-center items-center">
            {cards}
        </div>
    )
}

function Card({ data }) {
    return (
        <div className={`${data.cardbg} w-3/4 lg:w-1/4 h-fit mx-5 mb-5 rounded-xl shadow-2xl flex flex-wrap flex-col justify-center`}>
            <div className="pt-10 pb-7 flex items-center text-xl font-semibold">
                <div className={`${data.iconbg} w-14 h-14 ml-8 mr-4 p-2 rounded-full`}>
                    <img src={data.icon} alt="no icon" />
                </div>
                <h2>{data.heading}</h2>
            </div>
            <p className="mx-8 mb-10 text-sm">{data.text}</p>
        </div>
    )
}

function More() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center mb-10 py-16 lg:py-24 px-8 lg:px-24 bg-customGrey/30">
            <div className="relative mb-8 lg:mb-0 lg:mr-12">
                <div className="bg-yellow-200 rounded-full w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center relative">
                    <img src={person} alt="P" className="rounded-full object-cover" />
                </div>
            </div>

            <div className="lg:max-w-lg text-center lg:text-left">
                <button className="px-4 py-1 text-purple-700 bg-purple-100 rounded-full text-sm font-semibold mb-4">
                    Discover Our Features
                </button>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                    All-in-One Chat, Video & File Sharing App
                </h2>
                <p className="text-gray-600 mb-6">
                    Our platform is designed for seamless communication with tools to chat, share files, and host video sessions all in one place, making it easier to stay connected and collaborate effectively.
                </p>

                <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                        <div className="bg-yellow-400 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fontWeight="bold" fill="black">
                                    &gt;
                                </text>
                            </svg>
                        </div>
                        <span className="font-semibold">Instant Messaging & Group Chats</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <div className="bg-yellow-400 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fontWeight="bold" fill="black">
                                    &gt;
                                </text>
                            </svg>
                        </div>
                        <span className="font-semibold">High-Quality Video Sessions</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <div className="bg-yellow-400 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fontWeight="bold" fill="black">
                                    &gt;
                                </text>
                            </svg>
                        </div>
                        <span className="font-semibold">Easy File Sharing</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

function First() {
    return (
        <Cover>
            <main className="container h-fit mx-auto py-28 text-customCream flex flex-col items-center md:items-start md:flex-row justify-between md:justify-evenly" >
                <div className="w-2/3 sm:2/5 md:w-2/6 my-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl my-5 font-bold">Your Study Circle,<br /> Just a Click Away.</h1>
                    <p className="text-md md:text-lg font-light">Experience a new way of learning by collaborating with students, helping each other overcome challenges, and excelling together</p>
                    <div className="h-fit my-20">
                        <Link className="inline-block px-4 py-2 rounded-lg bg-customBlue transition-all hover:scale-110" to="/signup">Get Started</Link>
                    </div>
                </div>
                <div className="h-fit md:my-auto m-10">
                    <div className="w-72 h-72 lg:w-[30rem] lg:h-[30rem] rounded-full bg-cover bg-videoConfrence shadow-lg shadow-black">
                    </div>
                </div>
            </main>
        </Cover>
    )
}

function Second() {
    return (
        <main className="container mx-auto h-fit flex flex-col items-center">
            <section className="text-center">
                <h1 className="text-4xl mt-16 font-semibold">Achive Your Goals Together</h1>
                <p className="my-2 text-slate-700"><i>Join various groups of your interest and start learning.</i></p>
            </section>
            <Cards />
            <More />
        </main>
    )
}

function Main() {
    return (<>
        <First />
        <Second />
    </>)
}

function LandingPage() {
    return (<>
        <Main />
    </>)
}

export default LandingPage