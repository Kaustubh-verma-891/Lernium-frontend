import { useForm } from 'react-hook-form'
import { useAuthStore } from '../../hook/useAuthStore';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
    const { signup, isSigningUp } = useAuthStore();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

    const onSubmit = async (formData) => {
        const isSuccess = await signup(formData)
        if (isSuccess) {
            navigate('/login')
        }
    }
    const handleError = (err) => {
    }

    const formOption = {
        firstName: { required: "First Name cannot be empty." },
        lastName: { required: "Last Name cannot be empty." },
        email: { required: "Email cannot be empty." },
        password: { required: "Password is required." },
        confirmPassword: { required: "Confirm Password is required." },
    }

    return (
        <div className="bg-white mx-auto my-20 p-6 border rounded-lg shadow-md w-[90%] container max-w-[30rem]">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Create an Account</h2>
            <form onSubmit={handleSubmit(onSubmit, handleError)}>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="First Name"
                        {...register("firstName", formOption.firstName)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.firstName && errors.firstName.message}
                    </span>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Last Name"
                        {...register("lastName", formOption.lastName)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.lastName && errors.lastName.message}
                    </span>
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="E-Mail"
                        {...register("email", formOption.email)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.email && errors.email.message}
                    </span>
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Password"
                        {...register("password", formOption.password)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.password && errors.password.message}
                    </span>
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Password Confirmation"
                        {...register("confirmPassword", formOption.confirmPassword)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.confirmPassword && errors.confirmPassword.message}
                    </span>
                </div>
                <div className="my-6 text-sm text-gray-600">
                    By signing up, I agree with the website's{" "}
                    <a href="#" className="text-customBlue hover:underline">
                        Terms and Conditions
                    </a>
                </div>
                <button className="w-full bg-customBlue/90 text-white py-2 rounded-md hover:bg-customBlue/80 transition" disabled={isSigningUp}>
                    Register
                </button>
            </form>
        </div>

    )
}

function SignUp() {
    return (
        <main className='w-full h-fit'>
            <Form />
        </main>
    )
}

export default SignUp