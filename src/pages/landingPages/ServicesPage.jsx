import { useState } from "react";
import Cover from "../../components/landingComponents/Cover";

// Slider component
function Slider({ cardsData }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative mt-8 w-full md:w-3/4 lg:w-1/2 overflow-hidden">
            {/* Slider Track */}
            <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {cardsData.map((card, index) => (
                    <div
                    key={index}
                    className="min-w-full p-8 sm:p-12 md:p-16 bg-customcream rounded-lg shadow-inner"
                    style={{
                        boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-slate-700">
                        {card.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500">{card.para}</p>
                </div>
                
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-2">
                <button
                    onClick={prevSlide}
                    className="lg:text-4xl font-bold text-[#f4d9a2] hover:text-[#eab346] transition-all duration-300"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className=" lg:text-4xl font-bold text-[#f4d9a2] hover:text-[#eab346] transition-all duration-300"
                >
                    &#10095;
                </button>
            </div>

            {/* Dots for Slide Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {cardsData.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full cursor-pointer ${
                            currentIndex === index ? "bg-[#eab346]" : "bg-[#f7e2b9]"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

// Example data for the cards
const cardsData = [
    {
        heading: "Study Groups",
        para: "Join interactive study groups with fellow students. Share resources, discuss key concepts, and stay motivated as you work together to achieve your academic goals."
    },
    {
        heading: "AI Assistant for Doubts",
        para: "Get quick answers to your questions with our AI-powered assistant. Whether you're stuck on a problem or need clarification, our smart assistant is here to help anytime, anywhere."
    },
    {
        heading: "Academic Resources",
        para: "Access a wide range of academic materials such as study guides, practice tests, and lecture notes. We make sure you have all the resources you need to succeed."
    },
    {
        heading: "Real-Time Collaboration",
        para: "Collaborate with your peers in real time. Use our platform’s video chat, whiteboard, and file-sharing tools to study and work on projects seamlessly together."
    },
    {
        heading: "Progress Tracking",
        para: "Keep track of your academic progress with personalized dashboards. Monitor your grades, study habits, and performance to stay on top of your goals."
    },
    {
        heading: "Peer Support",
        para: "Join a network of supportive peers who are ready to help, motivate, and cheer you on. Whether it's academic challenges or personal encouragement, you're never alone in your journey."
    }
];

// Parent component to use the Slider
function Services() {
    return (
        <Cover>
            <main className="container mx-auto pt-16 pb-20 px-2 flex flex-col items-center">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl text-center font-extrabold text-customPurple mb-8">
                    Our<span className="text-customPurple"> Services</span>
                </h2>
                <Slider cardsData={cardsData} />
            </main>
        </Cover>
    );
}

export default Services;
