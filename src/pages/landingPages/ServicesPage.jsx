function Heading() {
    return (<>
        <h2 className="text-5xl text-center ">Our Services</h2>
        <p className="text-lg text-center my-10 max-w-3xl mx-auto">
            We offer a variety of services to make your learning experience more effective, flexible, and collaborative.
            Whether you're looking for study groups, personalized tutoring, or academic resources, we have everything
            you need to succeed.
        </p>
    </>)
}

function Cards() {
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
    ]
    const cards = cardsData.map(element => {
        return (
            <Card key={cardsData.indexOf(element)} heading={element.heading} para={element.para} />
        )
    })

    return (<>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {cards}
        </div>
    </>)
}

function Card(prop) {
    return (<>
        <div className="backdrop-blur-sm p-8 rounded-lg bg-customDarkCream/50 shadow-2xl text-center transition-all duration-300 hover:scale-95 hover:bg-customDarkCream/30">
            <h3 className="text-2xl font-semibold mb-4">{prop.heading}</h3>
            <p>
                {prop.para}
            </p>
        </div>
    </>)
}

function Main() {
    return (
        <>
            <main className="container mx-auto pt-12 pb-20 px-6">
                <Heading />
                <Cards />
            </main>
        </>
    )
}

function Services() {
    return (<>
        <Main />
    </>)
}

export default Services