import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Camera, ArrowLeft } from "lucide-react";
import { useAuthStore } from "../../hook/useAuthStore"
import Avatar from '../../assets/images/avatar.png'

function Profile() {
    const { authUser, isUpdatingProfile, updateImage } = useAuthStore();
    const [selectedImage, setSelectedImage] = useState(null)

    const imageUpload = async (evt) => {
        const image = evt.target.files[0];
        if (!image)
            return
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = async () => {
            const base64Image = reader.result;
            setSelectedImage(base64Image)
            await updateImage({ profilePicture: base64Image })
        }
    }
    return (
        <div className="w-full h-full bg-customBlue/30">
            <main className="w-[90%] md:w-[60%] h-fit mx-auto mt-16 py-12 bg-customBlue/30 relative">
                <Link className="absolute top-2 right-2" to='/dashboard'><ArrowLeft className="size-7 p-1 rounded-full duration-300 hover:bg-slate-200" /></Link>
                <div>
                    <h1 className="text-3xl text-center font-semibold">Profile</h1>
                </div>
                <div className="w-full my-6 flex flex-col items-center">
                    <div className="relative">
                        <img className="size-36 rounded-full object-cover border-2" src={selectedImage || authUser.profilePicture || Avatar} alt="Profile" />
                        <label htmlFor="upload" className="absolute bottom-0 right-0 p-1.5 rounded-full border-2 border-black cursor-pointer bg-white text-customBlue transition-all duration-200 hover:text-white hover:bg-customBlue ">
                            <Camera className="size-7" />
                            <input className="hidden" type="file" id="upload" accept="image/*" onChange={imageUpload} disabled={isUpdatingProfile} />
                        </label>
                    </div>
                    {isUpdatingProfile && <p className="mt-5 text-center">Uploading...</p>}
                </div>
                <Form />
            </main>
        </div>)
}



function Form() {
    const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

    const onSubmit = async (formData) => {
        await updateProfile(formData)
    }
    const handleError = (err) => {
    }

    const formOption = {
        firstName: { required: "First Name cannot be empty." },
        lastName: { required: "Last Name cannot be empty." },
        email: { required: "Email cannot be empty." },
    }

    return (
        <form className="w-[80%] mt-10 mx-auto flex flex-col" onSubmit={handleSubmit(onSubmit, handleError)}>
            <div className="mb-4">
                <div className="flex items-center justify-center">
                    <label className="w-40" htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        type="text"
                        className="w-2/4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        value={authUser?.firstName}
                    // {...register("firstName", formOption.firstName)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.firstName && errors.firstName.message}
                    </span>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-center justify-center">
                    <label className="w-40" htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        className="w-2/4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        value={authUser?.lastName}
                    // {...register("lastName", formOption.lastName)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.lastName && errors.lastName.message}
                    </span>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-center justify-center">
                    <label className="w-40" htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="w-2/4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-customVoilet focus:outline-none"
                        value={authUser?.email}
                    // {...register("email", formOption.email)}
                    />
                    <span className="text-red-500 text-sm ml-2">
                        {errors?.email && errors.email.message}
                    </span>
                </div>
            </div>
            <button className="w-40 my-5 self-center bg-customBlue/90 text-white py-2 rounded-md hover:bg-customBlue/80 transition" disabled={isUpdatingProfile}>
                Update
            </button>
        </form>

    )
}



export default Profile