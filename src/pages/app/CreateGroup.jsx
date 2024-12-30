import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../hook/useAuthStore';
import { useGroupStore } from '../../hook/useGroupStore';
import { XCircle } from 'lucide-react';



function Form() {
    const { createGroup } = useGroupStore();
    const { authUser } = useAuthStore();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const navigate = useNavigate()

    const onSubmit = async (formData) => {
        const admin = authUser._id;
        const success = await createGroup({ formData, admin })
        if (success) {
            navigate('/new')
        }
    }
    const handleError = (err) => {
    }

    const formOption = {
        name: { required: "Name cannot be empty." },
        field: { required: "Field cannot be empty." },
        region: { required: "Region cannot be empty." },
        language: { required: "Email cannot be empty." },
        description: { required: "Description cannot be empty." },
    }

    return (
        <div className="relative bg-customBlue/30 mx-auto mt-28 p-9 border rounded-lg shadow-md w-[90%] container max-w-[30rem]">
            <Link to="/new"><XCircle className='absolute right-2 top-2 w-5 h-5 duration-200 hover:text-slate-700' /></Link>
            <h2 className="text-2xl text-center font-semibold mb-7 text-gray-700">
                Create Group
            </h2>
            <form onSubmit={handleSubmit(onSubmit, handleError)}>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Name"
                        {...register("name", formOption.name)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.name && errors.name.message}
                    </span>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Field"
                        {...register("field", formOption.field)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.field && errors.field.message}
                    </span>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Region"
                        {...register("region", formOption.region)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.region && errors.region.message}
                    </span>
                </div>
                <div className="mb-4">
                    <input
                        type="language"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Language"
                        {...register("language", formOption.language)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.language && errors.language.message}
                    </span>
                </div>
                <div className="mb-4">
                    <textarea
                        type="description"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        placeholder="Description"
                        {...register("description", formOption.description)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.description && errors.description.message}
                    </span>
                </div>
                <button className="w-full bg-customBlue/90 text-white mt-2 py-2 rounded-md hover:bg-customBlue/80 transition">
                    Create
                </button>
            </form>
        </div>

    )
}


export default function CreateGroup() {
    return (<main className="w-full bg-customBlue/30">
        <Form />
    </main>
    )
}