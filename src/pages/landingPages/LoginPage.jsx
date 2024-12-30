import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hook/useAuthStore';

function Form() {
    const { login, isLoggingIn } = useAuthStore()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

    const onSubmit = async (formData) => {
        await login(formData)
        navigate('/dashboard')
    };

    const handleError = (err) => {
    }

    const formOption = {
        email: { required: "Email is required !" },
        password: { required: "Password is required !" },
    }

    return (
        <div className="bg-white mx-auto my-24 p-6 border rounded-lg shadow-md w-[90%] container max-w-[30rem]">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Hi, Welcome back!</h2>
            <form onSubmit={handleSubmit(onSubmit, handleError)}>
                <div className="mb-4">
                    <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none" placeholder="Email"
                        {...register("email", formOption.email)} />
                    <span className='text-red-500 text-sm ml-2'>{errors?.email && errors.email.message}</span>

                </div>
                <div className="mb-4">
                    <input type="password" id="password" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none" placeholder="Password"
                        {...register("password", formOption.password)} />
                    <span className='text-red-500 text-sm ml-2'>{errors?.password && errors.password.message}</span>

                </div>
                <div className="flex items-center justify-between my-6">
                    <Link to="#" className="mx-2 text-customBlue text-sm hover:underline">Forgot?</Link>
                </div>
                <button className="w-full bg-customBlue/90 text-white py-2 rounded-md hover:bg-customBlue/80 transition" disabled={isLoggingIn}>Sign In</button>
            </form>
            <p className="mt-6 text-center text-gray-600">
                Don't have an account? <Link to="/signup" className="text-customBlue hover:underline">Register Now</Link>
            </p>
        </div>
    )
}

function LoginIn() {
    return (
        <main className='w-full h-fit'>
            <Form />
        </main>
    )
}

export default LoginIn