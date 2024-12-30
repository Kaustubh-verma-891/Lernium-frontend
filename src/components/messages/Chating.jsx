import { useEffect, useRef } from "react";
import { useChatStore } from "../../hook/useChatStore"
import { useAuthStore } from '../../hook/useAuthStore'
import Header from "../../components/messages/Header";
import Input from '../../components/messages/Input'
import Avatar from '../../assets/images/avatar.png'

const Chating = () => {
    const { authUser } = useAuthStore();
    const { messages, getMessages, selectedUser, listenRealTimeMessage, UnlistenRealTimeMessage } = useChatStore();
    const scrollToLast = useRef(null);

    useEffect(() => {
        getMessages(selectedUser._id)
        listenRealTimeMessage()
        return () => UnlistenRealTimeMessage();
    }, [selectedUser._id, getMessages, listenRealTimeMessage, UnlistenRealTimeMessage])

    useEffect(() => {
        if (scrollToLast.current && messages) {
            scrollToLast.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    return (
        <div className="w-full h-full bg-customBlue/30 flex flex-col">
            <Header />
            <div className="w-full overflow-y-auto flex-1 p-4 space-y-4">
                {messages.map(message => {
                    return (<div key={message._id} ref={scrollToLast} className={`w-full flex justify-start ${authUser._id === message.senderId ? "flex-row-reverse" : ""}`}>
                        <div className="">
                            <img src={message.senderId === authUser._id ?
                                authUser.profilePicture || Avatar :
                                selectedUser.profilePicture || Avatar
                            } className="object-cover size-9 rounded-full" alt="IMG" />
                        </div>
                        <div className="max-w-[400px] h-fit mx-4 p-2 rounded-md bg-customCream">
                            {message.image &&
                                <img src={message.image} alt="image" className="sm:max-w-[200px]" />}
                            {message.text &&
                                <p className="w-full h-auto overflow-visible break-words">{message.text}</p>}
                        </div>
                    </div>
                    )
                })}
            </div>
            <Input />
        </div>
    )
}

export default Chating