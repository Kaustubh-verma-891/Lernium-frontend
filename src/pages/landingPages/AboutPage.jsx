import Cover from "../../components/landingComponents/Cover";
import "../../styles/About.css";

function Cards() {
  const cardData = [
    {
      bg: "bg-gradient-to-br from-customPurple to-customcream hover:to-gray-600",
      heading: "Collaborative Learning",
      para: "Unlock the power of teamwork! Share notes, discuss ideas, and support each other in a connected learning environment.",
    },
    {
      bg: "bg-gradient-to-br from-customPurple to-customcream hover:to-gray-600",
      heading: "Flexible & Accessible",
      para: "Learn anytime, anywhere. Join study groups, participate in discussions, and access resources from any device, 24/7.",
    },
    {
      bg: "bg-gradient-to-br from-customPurple to-customcream hover:to-gray-600",
      heading: "Supportive Community",
      para: "More than just studying—it's a family. Find motivation, share knowledge, and celebrate academic milestones together.",
    },
  ];

  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-20 ">
      {cardData.map((element, index) => (
        <Card key={index} heading={element.heading} para={element.para} cardbg={element.bg} />
      ))}
    </div>
  );
}

function Card({ heading, para, cardbg }) {
  return (
    <div
      className={`${cardbg} p-14 rounded-md shadow-lg transform transition-all duration-300 hover:bg-customOrange hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center`}
    >
      <h3 className="text-2xl font-semibold text-white">{heading}</h3>
      <p className="text-md mt-4 text-white ">{para}</p>
    </div>
  );
}

function Message() {
  return (
    <div className="text-center mt-12 px-6">
      <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-600">
        Join us today and experience a new way to study—where learning is more than just individual work, but a shared
        experience that leads to greater success. Together, we achieve more!
      </p>
    </div>
  );
}

function About() {
  return (
    <section className="w-full min-h-screen">
      <Cover>
        <h2 className="text-6xl lg:text-8xl text-center font-bold py-20 text-black">About <span className="text-customOrange"> Us</span></h2>
        
      </Cover>
      <div className="sm:w-[90vw] md:w-4/5 mx-auto flex flex-col py-10 px-6">
      <p className="lg:w-3/4 mx-auto py-4 text-md text-gray-500  text-center leading-relaxed">
          Welcome to our Virtual Study Group platform – the ultimate space where motivated learners come together to
          collaborate, share knowledge, and achieve academic success. Whether you're studying for an exam, working on a
          project, or looking for a supportive community, we provide the tools, resources, and connections to make
          studying more efficient and enjoyable.
        </p>
        <Cards />
        <Message />
      </div>
    </section>
  );
}

export default About;
