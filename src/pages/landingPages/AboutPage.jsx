import Cover from "../../components/landingComponents/Cover"
import '../../styles/About.css'


function Cards() {
    const cardData = [
        {
            bg: "card1",
            heading: "Collaborative Learning",
            para: "At the heart of our platform is the power of collaboration. We believe that when students study together,they achieve more. Share notes, discuss concepts, and learn from others in a supportive environment."
        },
        {
            bg: "card2",
            heading: "Flexible & Accessible",
            para: "Whether you’re at home, in a café, or on the go, our platform is accessible 24/7. Join study sessions anytime, anywhere, and collaborate with others across the globe, all at your convenience."
        },
        {
            bg: "card3",
            heading: "Supportive Community",
            para: "Our platform isn’t just about studying—it's about building a community. Here, students support one another, share tips, and celebrate achievements. You’ll never feel alone in your academic journey."
        }
    ]
    const cards = cardData.map(element => {
        return (
            <Card key={cardData.indexOf(element)} heading={element.heading} para={element.para} cardbg={element.bg} />
        )
    });

    return (
        <div className="my-20 flex flex-wrap justify-evenly">
            {cards}
        </div>
    )
}

function Card({ heading, para, cardbg }) {
    return (
        <div className={`${cardbg} w-[20rem] h-[20rem] md:w-80 md:h-80 mb-5 px-5 py-16 rounded-full bg-cyan-400 shadow-2xl text-center`}>
            <h3 className="text-2xl font-semibold">
                {heading}
            </h3>
            <p className="text-md mt-4 font-medium">
                {para}
            </p>
        </div>
    )
}

function Message() {
    return (<>
        <div className="text-center">
            <p className="text-lg ">
                Join us today, and experience a new way to study—where learning is more than just individual work, but
                a shared experience that leads to greater success. Together, we achieve more!
            </p>
        </div>
    </>)
}

function Main() {
    return (<>
        <section className="w-full h-fit bg-homeBackground bg-cover">
            <Cover>
                {/* <div className="w-full h-full bg-cover bg-whiteSymbol"> */}
                <h2 className="text-4xl text-center font-bold py-28 z-10">About us</h2>
                {/* </div> */}
            </Cover>
            <div className="sm:w-[80vw] md:container mx-auto flex flex-col py-20">
                <p className="lg:w-3/4 mx-5 sm:mx-auto text-lg text-center ">
                    Welcome to our Virtual Study Group platform – the ultimate space where motivated learners come together to
                    collaborate, share knowledge, and achieve academic success. Whether you're studying for an exam, working on
                    a project, or looking for a supportive community, we provide the tools, resources, and connections to make
                    studying more efficient and enjoyable.
                </p>
                <Cards />
                <Message />
            </div>
        </section>
    </>)
}

function About() {
    return (
        <>
            <Main />
        </>
    )
}

export default About