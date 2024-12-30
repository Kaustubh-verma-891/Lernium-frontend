import { useState, useRef } from "react"
import { useChatStore } from "../../hook/useChatStore";
import { X, Image, SendHorizonal } from "lucide-react";

const Input = () => {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const { sendMessage } = useChatStore();

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file.type.startsWith('image/')) {
            toast.error('Please select an image')
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        }
        reader.readAsDataURL(file);
    }
    const removeImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim() && !imagePreview) return;
        try {
            await sendMessage({
                text: text.trim(),
                image: imagePreview
            })
            setText("")
            setImagePreview(null)
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    }

    return (
        <div className="w-full p-2 bg-customBlue">
            {imagePreview &&
                <div className="mb-3 flex items-center">
                    <div className="relative">
                        <img src={imagePreview} alt="Preview"
                            className="size-20 rounded-lg object-cover" />
                        <button className="absolute top-0 right-0 size-5 rounded-full flex justify-center items-center" onClick={removeImage}>
                            <X className="size-3" />
                        </button>
                    </div>
                </div>}
            <form onSubmit={handleSendMessage} className="flex items-center">
                <div className="flex-1 flex">
                    <input type="text" className="w-full px-2 py-1 rounded-md bg-customCream" placeholder="Message..." value={text} onChange={(evt) => setText(evt.target.value)} />
                    <input type="file" className="hidden" accept="image/*" ref={fileInputRef} onChange={handleImage} />
                    <button type="button" className="mx-2 p-1 rounded-full transition-all duration-150 hover:bg-customCream hover:text-black text-white" onClick={() => fileInputRef.current?.click()}><Image size={20} /></button>
                </div>
                <button className=" p-1 rounded-full transition-all duration-150 hover:bg-customCream hover:text-black text-white" disabled={!text.trim() && !imagePreview}>
                    <SendHorizonal size={22} />
                </button>
            </form>
        </div>
    )
}

export default Input