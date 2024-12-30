import Cover from "../../components/landingComponents/Cover"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { ChevronUp, ChevronDown } from 'lucide-react'

function FAQ() {
    const [openAnswer, setOpenAnswer] = useState(-1);

    const faqs = [
        {
            question: "What is Learnium, and how does it work?",
            answer: "Learnium is a virtual study group platform where users can create or join groups, participate in online study sessions, share notes and files, and interact with an AI assistant for instant doubt resolution. It is designed to facilitate collaborative and effective online learning."
        },
        {
            question: "How do I create or join a study group?",
            answer: "You can create a new group by selecting a subject or field of interest and inviting members, or you can browse and join existing groups that match your preferences. The platform makes it easy to find and connect with like-minded learners."
        },
        {
            question: "What features are available during online study sessions?",
            answer: "Online study sessions include features like video conferencing, collaborative whiteboards, file sharing, live chat, and access to AI assistance for answering questions. These tools help make study sessions engaging and productive."
        },
        {
            question: "Can I share notes and resources with my group members?",
            answer: "Yes! Learnium allows you to upload and share notes, files, and other resources within your group. This helps ensure everyone has access to the materials they need for effective learning."
        },
        {
            question: "What can the AI assistant do for me?",
            answer: "The AI assistant is designed to answer questions, clarify doubts, and provide quick explanations on various topics. It's available 24/7 to support your learning journey."
        },
        {
            question: "Is Learnium suitable for both students and professionals?",
            answer: "Absolutely! Learnium caters to students, professionals, and lifelong learners. Whether you're preparing for exams, improving your skills, or collaborating on projects, Learnium provides the tools you need."
        }
    ];


    return (
        <div className="w-[90%] sm:w-2/4 mx-auto my-10 bg-customCream rounded-lg shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                        onClick={() => setOpenAnswer(openAnswer === index ? -1 : index)}
                    >
                        <span className="font-medium text-gray-900">
                            {faq.question}
                        </span>
                        {openAnswer === index ? (
                            <ChevronUp className="h-5 w-5 text-purple-500" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-purple-500" />
                        )}
                    </button>

                    {<div
                        className={`px-6 bg-white overflow-hidden transition-all duration-200 ease-in-out 
                        ${openAnswer === index ? 'max-h-48 py-4' : 'max-h-0'}`}>
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>}
                </div>
            ))}
        </div>
    )
}

function FormHeading() {
    return (
        <div className="text-center">
            <h1 className=" text-3xl font-bold py-8">Have a Query?</h1>
            <p className="mx-2"><i>Contact us to learn more about our platform and how you can upskill youself with others!</i></p>
        </div>
    )
}

function Form() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });


    const onSubmit = async (formData) => {
        console.log(formData);
    }
    const handleError = (err) => {
        console.log(err);
    }

    const formOption = {
        name: { required: "Name is required !" },
        phoneNo: {
            required: "Phone number is required !",
            minLength: {
                value: 10,
                message: "Phone number must be of 10 digits"
            },
        },
        email: { required: "Email is required !" },
        message: { required: "Message cannot be empty !" }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit, handleError)}>
            <section className="max-w-80 lg:w-96 mx-auto py-6 flex flex-col text-black">
                <div className="w-full mt-5">
                    <div >
                        <label htmlFor="name">Name <span className="text-red-600">*</span></label>
                    </div>
                    <input
                        className="w-full border-2 px-2 py-1"
                        type="text"
                        id="name"
                        {...register("name", formOption.name)}
                    />
                    <span className="text-red-600 text-sm">
                        {errors?.name && errors.name.message}
                    </span>
                </div>
                <div className="w-full mt-5">
                    <div>
                        <label htmlFor="phoneNo">Phone no.<span className="text-red-600">*</span></label>
                    </div>
                    <input
                        className="w-full border-2 px-2 py-1"
                        type="tel"
                        id="phoneNo"
                        maxLength={10}
                        {...register("phoneNo", formOption.phoneNo)}
                    />
                    <span className="text-red-600 text-sm">
                        {errors?.phoneNo && errors.phoneNo.message}
                    </span>
                </div>
                <div className="w-full mt-5">
                    <div>
                        <label htmlFor="email">Email<span className="text-red-600">*</span></label>
                    </div>
                    <input
                        className="w-full border-2 px-2 py-1"
                        type="email"
                        id="email"
                        {...register("email", formOption.email)}
                    />
                    <span className="text-red-600 text-sm">
                        {errors?.email && errors.email.message}
                    </span>
                </div>
                <div className="w-full mt-5">
                    <div>
                        <label htmlFor="feedback">Message<span className="text-red-600">*</span></label>
                    </div>
                    <textarea
                        className="w-full border-2 px-2 py-1"
                        id="feedback"
                        {...register("message", formOption.message)}
                    />
                    <span className="text-red-600 text-sm">
                        {errors?.message && errors.message.message}
                    </span>
                </div>

                <button className="w-full my-5 bg-green-600 text-white transition-all py-2 hover:scale-95">Submit</button>

            </section>
        </form>
    )
}

function FormCover({ children }) {
    return (
        <div className="h-fit w-[90%] sm:container sm:max-w-[35rem] my-40 mx-auto rounded-md bg-customCream shadow-xl">
            {children}
        </div>
    )
}

function Main() {
    return (
        <div className="">
            <Cover>
                <h2 className="text-4xl text-center font-bold py-28 z-10">Frequently Asked Questions</h2>
            </Cover>
            <FAQ />
            <FormCover>
                <FormHeading />
                <Form />
            </FormCover>
        </div>
    )
}

function Contact() {
    return (<>
        <Main />
    </>)
}

export default Contact