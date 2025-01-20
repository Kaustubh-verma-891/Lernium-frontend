import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChevronUp, ChevronDown } from "lucide-react";
import Cover from "../../components/landingComponents/Cover";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        { question: "What is Learnium, and how does it work?", answer: "Learnium is a virtual study group platform where users can create or join groups, participate in online study sessions, share notes and files, and interact with an AI assistant for instant doubt resolution." },
        { question: "How do I create or join a study group?", answer: "You can create a group by selecting a subject or field of interest and inviting members, or browse and join existing groups." },
        { question: "What features are available during online study sessions?", answer: "Features include video conferencing, collaborative whiteboards, file sharing, live chat, and AI assistance for answering questions." },
        { question: "Can I share notes and resources with my group members?", answer: "Yes! You can upload and share notes, files, and resources within your group." },
        { question: "What can the AI assistant do for me?", answer: "It answers questions, clarifies doubts, and provides quick explanations on various topics 24/7." },
        { question: "Is Learnium suitable for both students and professionals?", answer: "Absolutely! It caters to students, professionals, and lifelong learners for study, skill-building, and collaboration." }
    ];

    return (
        <div className=" lg:w-1/2 bg-[rgba(255,248,231,0.8)] backdrop-blur-lg rounded-3xl hover:shadow-2xl shadow-inner p-6">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300/50">
                    <button
                        className="w-full px-6 py-4 flex justify-between items-center transition-all hover:bg-[rgba(255,248,231,0.9)] focus:outline-none rounded-lg"
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                        <span className="font-semibold text-gray-600">{faq.question}</span>
                        {openIndex === index ? <ChevronUp className="h-6 w-6 text-blue-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                    </button>
                    <div className={` overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100 py-4" : "max-h-0 opacity-0"}`}>
                        <p className="text-gray-700 bg-white/80 p-4 rounded-lg shadow-sm">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ContactForm() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required!"),
        phoneNo: Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required!"),
        email: Yup.string().email("Invalid email format").required("Email is required!"),
        message: Yup.string().required("Message cannot be empty!"),
    });

    const initialValues = { name: "", phoneNo: "", email: "", message: "" };

    const handleSubmit = (values, { resetForm }) => {
        console.log("Form Submitted:", values);
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
                <Form className="w-full max-w-lg mx-auto bg-[rgba(255,248,231,0.9)] backdrop-blur-lg p-6 rounded-3xl shadow-lg ">
                    {["name", "phoneNo", "email", "message"].map((field, index) => (
                        <div className="mb-4" key={index}>
                            <label htmlFor={field} className="block text-gray-700 text-sm">
                                {field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-red-500">*</span>
                            </label>
                            <Field
                                className="w-full bg-white shadow-inner shadow-lg bg-transparent rounded-lg px-3 py-2 mt-1 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
                                type={field === "message" ? "textarea" : "text"}
                                id={field}
                                name={field}
                            />
                            <ErrorMessage name={field} component="span" className="text-red-500 text-sm" />
                        </div>
                    ))}
                    <button
                        className="w-full py-3 mt-4 text-white font-semibold bg-customPurple rounded-lg shadow-md hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-95 disabled:opacity-50"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

function FormSection() {
    return (
        <div className="lg:w-1/2 bg-[rgba(255,248,231,0.9)] backdrop-blur-lg rounded-3xl hover:shadow-2xl p-8 shadow-inner">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold py-2 text-customPurple">Have a Query?</h1>
                <p className="text-gray-500 mx-6 mb-4">Contact us to learn more about our platform and how you can upskill yourself with others!</p>
            </div>
            <ContactForm />
        </div>
    );
}

function Contact() {
    return (
        <div>
            <Cover>
                <h2 className="text-5xl text-center font-extrabold py-28 z-10 text-black drop-shadow-lg">Frequently Asked<span className="text-customOrange"> Questions</span> ?</h2>
            </Cover>
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 my-12 px-4 lg:px-12">
                <FAQ />
                <FormSection />
            </div>
        </div>
    );
}

export default Contact;
