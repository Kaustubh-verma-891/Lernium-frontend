import { MessageCircleMoreIcon } from 'lucide-react'

const NoChat = () => {
    return (
        <div className="w-full h-full flex justify-center bg-customBlack/90">
            <div className='mt-60'>
                <MessageCircleMoreIcon className='size-32 mx-auto text-customBlue/70 animate-bounce' />
                <h1 className='text-customCream/40 mt-5'>Select a conversation from sidebar</h1>
            </div>
        </div>
    )
}

export default NoChat