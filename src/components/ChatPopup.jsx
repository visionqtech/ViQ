import { useState } from 'react';
import chatIcon from '../assets/images/chatai.jpg'; // Make sure this path is correct
// import chatIcon from '../assets/logo.jpg'; // Make sure this path is correct


export default function ChatPopup() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Chat Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="focus:outline-none"
                    aria-label="Open Chat"
                >
                    <img
                        src={chatIcon}
                        alt="Ask Now Chat"
                        className="w-16 h-16 drop-shadow-lg hover:scale-105 transition-transform duration-300 rounded-full"
                    />
                </button>
            </div>

            {/* Chat Popup Box */}
            {open && <div className='fixed z-40 text-black bottom-26 right-10 bg-white h-130 w-100 rounded-xl'>
                <div className='flex flex-col justify-between p-2 bg-gray-200 h-[98%] m-1 rounded-2xl'>
                    {/* header */}
                    <div>
                        <div className='h-10 w-10 bg-gradient-to-b from-white/80 to-black/40 rounded-full float-right'></div>
                    </div>
                    {/* Body */}
                    <div className='flex flex-col gap-8 text-center text-xl font-semibold'>
                        <p>Hello, Vivek</p>
                        <p>How can i assist you today?</p>
                    </div>

                    {/* Input field */}
                    <div>
                        <div className='flex gap-2 text-sm mb-2'>
                            <div className='bg-gray-300 p-2 rounded-md'>Hello, How are you?</div>
                            <div className='bg-gray-300 p-2 rounded-md'>What are the trending topics of the day?</div>
                        </div>

                        {/* <div>
                            <div className='flex justify-end my-3'>
                                <span className='text-sm bg-gray-300 p-2 rounded-xl'>Hello, How are you?</span>
                                <span className='text-sm font-bold bg-gray-300 px-3 py-2 ms-2 rounded-full'>V</span>
                            </div>
                            <div className='flex justify-start my-3'>
                                <span className='text-sm bg-gray-300 leading-7 p-2 rounded-xl'>
                                    Hello, I'm doing great-thanks for asking! <br />
                                    How about you? <br />
                                    What's on your mind?
                                </span>
                            </div>
                        </div> */}

                        {/* Input */}
                        <div className="flex flex-col gap-2 bg-gray-50 rounded-xl px-3 py-1">
                            <input
                                type="text"
                                placeholder="Ask anything"
                                className="flex-1 bg-transparent outline-none px-2 text-sm"
                            />
                            <div className="flex w-full gap-2 justify-between  text-gray-600 text-lg">
                                <div className='flex gap-2'>
                                    <span className='border rounded-full'>📎</span>
                                    <span className='border rounded-full'>🌐</span>
                                    <span className='border rounded-full'>💡</span>
                                    <span className='border rounded-full px-1'>⋯</span>
                                </div>
                                <div>
                                    <button
                                        className="bg-black text-white px-2 rounded-full ml-2 hover:bg-gray-900"
                                        aria-label="Send"
                                    >
                                        ⬆
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Descrption */}
                        <div className='text-xs my-4 text-center'>AI can make mistakes. Please double-check responses.</div>
                    </div>
                </div>
            </div>}
        </>
    );
}