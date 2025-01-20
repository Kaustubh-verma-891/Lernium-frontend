import { Link } from "react-router-dom";
import Cover from "../../components/landingComponents/Cover";
import groupIcon from "../../assets/icons/group.svg";
import videoSession from "../../assets/icons/videoSession.svg";
import resources from "../../assets/icons/resources.svg";
import person from "../../assets/images/person.png";
import '../../styles/LandingPage.css';
import { HiUserGroup } from "react-icons/hi";
import { IoMdVideocam } from "react-icons/io";
import { GrResources } from "react-icons/gr";

const cardData = [
    {
        cardbg: "card1",
        iconbg: "icon1",
        icon: <HiUserGroup className="text-customPurple h-10 w-10 bg-purple-200 rounded-md" />,
        heading: "Group Study",
        text: "Collaborate and clarify concepts with peers in real-time, staying motivated and engaged."
    },
    {
        cardbg: "card2",
        iconbg: "icon2",
        icon: <IoMdVideocam className="text-customPurple h-10 w-10 bg-purple-200 rounded-md" />,
        heading: "Online Video Sessions",
        text: "Participate in live video calls to exchange ideas, solve problems, and get instant feedback."
    },
    {
        cardbg: "card3",
        iconbg: "icon3",
        icon: <GrResources className="text-customPurple h-10 w-10 bg-purple-200 rounded-md" />,
        heading: "Shared Resources",
        text: "Access and share a variety of study materials, enhancing learning through diverse resources."
    }
];

function Card({ data }) {
    return (
        <div className="bg-customPurple max-w-1/4 lg:w-1/4 h-fit m-4 p-6 rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center sm:justify-start items-start gap-4">
                <p className="text-2xl text-white">{data.icon}</p>
                <div className="text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl font-semibold text-white">{data.heading}</h2>
                    <p className="text-xs sm:text-base text-white mt-2">{data.text}</p>
                </div>
            </div>
        </div>
    );
}

function Cards() {
    return (
        <div className="w-11/12 bg-customPurple  lg:my-20 my-10 rounded-md lg:py-8 lg:px-4 flex flex-col lg:flex-row flex-wrap justify-center items-center lg:gap-6">
            {cardData.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    );
}

function More() {
    return (
        <div className="w-full lg:max-h-[600px] flex flex-col-reverse lg:flex-row items-center justify-center gap-8 mb-28 py-16 lg:py-24  bg-customcream">
            <div className="mt-0 lg:mt-10 w-full lg:w-auto flex justify-end lg:justify-start">
                <img
                    src="./src/assets/images/Group381.png"
                    alt="Decorative"
                    className="h-60 sm:h-80 lg:h-auto w-auto object-contain"
                />
            </div>
            <div className="w-full px-4 lg:max-w-lg mx-auto lg:mx-0 lg:text-left text-center">
                <button className="px-4 sm:px-6 py-2 text-purple-700 bg-purple-100 hover:bg-purple-200 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-md transition duration-300">
                    Discover Our Features
                </button>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-gray-800 leading-snug sm:leading-relaxed">
                    All-in-One<span className="text-customOrange"> Chat, Video & File</span> Sharing App
                </h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Our platform is designed for seamless communication with tools to chat, share files, and host video sessions all in one place, making it easier to stay connected and collaborate effectively.
                </p>
                <ul className="space-y-6">
                    {["Instant Messaging & Group Chats", "High-Quality Video Sessions", "Easy File Sharing"].map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <div className="bg-yellow-500 text-white w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full mr-4 shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-4 h-4 sm:w-6 sm:h-6"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9 16l-5-5 1.41-1.41L9 13.17l8.59-8.59L19 6l-10 10z" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm sm:text-base lg:text-lg">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function FirstSection() {
    return (
        <Cover>bg-[url('./src/assets/images/container.png')] bg-cover bg-center bg-no-repeat
            <main className="w-full mx-auto  h-auto pt-16 pb-28 text-customCream flex flex-col-reverse md:flex-row-reverse items-center md:items-start justify-between md:justify-around gap-8 px-6 sm:px-8 md:px-16">
                <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-auto flex-shrink-0">
                    <img src="./src/assets/images/Group380.png" alt="Study Circle Decorative" className="w-full h-auto" />
                </div>
                <div className="w-4/5 sm:w-3/5 md:w-2/5 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl mt-16 md:mt-24 font-bold text-black leading-snug md:leading-normal">
                        Your <span className="text-customOrange">Study Circle</span>,
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl my-2 font-bold text-black leading-snug md:leading-normal">
                        Just a <span className="text-customOrange">Click</span> Away.
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                        Experience a new way of learning by collaborating with students, helping each other overcome challenges, and excelling together.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/signup"
                            className="inline-block rounded-full px-8 py-3 bg-customPurple text-white text-sm sm:text-base font-semibold transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </main>
        </Cover>
    );
}

function SecondSection() {
    return (
        <main className="w-screen mx-auto h-fit flex flex-col items-center">
            <section className="text-center mt-20">
                <h1 className="text-5xl text-slate-700 font-bold pb-4">Achieve Your Goals Together</h1>
                <p className="text-slate-700"><i>Join various groups of your interest and start learning.</i></p>
            </section>
            <Cards />
            <More />
        </main>
    );
}

function LandingPage() {
    return (
        <>
            <FirstSection />
            <SecondSection />
        </>
    );
}

export default LandingPage;
