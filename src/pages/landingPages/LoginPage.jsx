import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hook/useAuthStore';
import Cover from '../../components/landingComponents/Cover';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required!"),
    password: Yup.string().required("Password is required!").min(6, "Password must be at least 6 characters"),
});

function LoginForm() {
    const { login, isLoggingIn } = useAuthStore();
    const navigate = useNavigate();

    const initialValues = { email: '', password: '' };

    const handleSubmit = async (values, { setSubmitting }) => {
        await login(values);
        navigate('/dashboard');
        setSubmitting(false);
    };

    return (
        <div className="bg-white mx-auto my-24 p-8 rounded-lg shadow-inner w-[90%] max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Welcome Back!</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {/* Email Input */}
                        <div className="mb-5">
                            <Field 
                                type="email" 
                                name="email"
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" component="span" className="text-red-500 text-sm ml-2" />
                        </div>

                        {/* Password Input */}
                        <div className="mb-5">
                            <Field 
                                type="password" 
                                name="password"
                                className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="span" className="text-red-500 text-sm ml-2" />
                        </div>

                        {/* Forgot Password Link */}
                        <div className="flex justify-end mb-6">
                            <Link to="#" className="text-indigo-600 text-sm hover:underline">Forgot Password?</Link>
                        </div>

                        {/* Sign In Button */}
                        <button 
                            type="submit"
                            className={`w-full bg-customPurple text-white py-3 rounded-md font-semibold transition-transform duration-300 hover:bg-customOrange active:scale-95 disabled:bg-gray-400`}
                            disabled={isSubmitting || isLoggingIn}
                        >
                            {isSubmitting || isLoggingIn ? "Signing In..." : "Sign In"}
                        </button>
                    </Form>
                )}
            </Formik>

            {/* Signup Redirect */}
            <p className="mt-6 text-center text-gray-600">
                Don't have an account? <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">Register Now</Link>
            </p>
        </div>
    );
}

function LoginIn() {
    return (
        <Cover>

        <main className="w-full max-h-screen flex items-center justify-center ">
            <LoginForm />
        </main>
        </Cover>
    );
}

export default LoginIn;
