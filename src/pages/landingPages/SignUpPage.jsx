import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hook/useAuthStore';
import Cover from '../../components/landingComponents/Cover';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name cannot be empty."),
    lastName: Yup.string().required("Last Name cannot be empty."),
    email: Yup.string().email("Invalid email format").required("Email cannot be empty."),
    password: Yup.string()
        .required("Password is required.")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required."),
});

function SignUpForm() {
    const { signup, isSigningUp } = useAuthStore();
    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        const isSuccess = await signup(values);
        if (isSuccess) {
            navigate('/login');
        }
        setSubmitting(false);
    };

    return (
        <div className="bg-white mx-auto my-20 p-8  rounded-lg shadow-inner w-[90%] max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Create an Account</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {/* First Name */}
                        <div className="mb-4">
                            <Field 
                                type="text" 
                                name="firstName"
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="First Name"
                            />
                            <ErrorMessage name="firstName" component="span" className="text-red-500 text-sm ml-2" />
                        </div>

                        {/* Last Name */}
                        <div className="mb-4">
                            <Field 
                                type="text" 
                                name="lastName"
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="Last Name"
                            />
                            <ErrorMessage name="lastName" component="span" className="text-red-500 text-sm ml-2" />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <Field 
                                type="email" 
                                name="email"
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="E-Mail"
                            />
                            <ErrorMessage name="email" component="span" className="text-red-500 text-sm ml-2" />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <Field 
                                type="password" 
                                name="password"
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="span" className="text-red-500 text-sm ml-2" />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <Field 
                                type="password" 
                                name="confirmPassword"
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="Confirm Password"
                            />
                            <ErrorMessage name="confirmPassword" component="span" className="text-red-500 text-sm ml-2" />
                        </div>

                        {/* Terms & Conditions */}
                        <div className="my-6 text-sm text-gray-600 text-center">
                            By signing up, I agree with the website's{" "}
                            <a href="#" className="text-indigo-600 hover:underline">
                                Terms and Conditions
                            </a>
                        </div>

                        {/* Register Button */}
                        <button 
                            type="submit"
                            className={`w-full bg-customPurple text-white py-3 rounded-md font-semibold transition-transform duration-300 hover:bg-customOrange active:scale-95 disabled:bg-gray-400`}
                            disabled={isSubmitting || isSigningUp}
                        >
                            {isSubmitting || isSigningUp ? "Registering..." : "Register"}
                        </button>
                        
                    </Form>
                )}
            </Formik>
            <p className="mt-6 text-center text-gray-600">
                            Already have an account? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Login Now</Link>
                        </p>
        </div>
    );
}

function SignUp() {
    return (
        <Cover>

        <main className="w-full max-h-screen flex items-center justify-center ">
            <SignUpForm />
        </main>
        </Cover>
    );
}

export default SignUp;
