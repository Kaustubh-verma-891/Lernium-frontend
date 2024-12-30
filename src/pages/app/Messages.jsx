import { useChatStore } from '../../hook/useChatStore'
import Chats from '../../components/messages/Chats';
import NoChat from '../../components/messages/NoChat';
import Chating from '../../components/messages/Chating';

function Messages() {
    const { selectedUser } = useChatStore();

    return (
        <div className='w-full h-full bg-customBlue/30 flex'>
            <Chats />
            {selectedUser ? <Chating /> : <NoChat />}
        </div>)
}

export default Messages