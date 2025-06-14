import { useState } from 'react';
import askNowIcon from '../assets/images/chatai.png'; // Make sure this path is correct

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
                        src={askNowIcon}
                        alt="Ask Now Chat"
                        className="w-16 h-16 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </button>
            </div>

            {/* Chat Popup Box */}
            {open && (
                <div className="fixed bottom-24 right-6 w-110 bg-white border border-gray-200 rounded-3xl shadow-xl z-50 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-t-3xl">
                        <div className="w-5 h-5 border-2 border-gray-400 rounded-md"></div>
                        <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-300 rounded-full"></div>
                    </div>

                    {/* Welcome Message */}
                    <div className="p-6 text-center">
                        <h2 className="font-bold text-lg mb-1">Hello there!</h2>
                        <p className="font-bold text-gray-700">How can I assist you today?</p>
                    </div>

                    {/* Suggestion Buttons */}
                    <div className="flex gap-3 px-4 mb-4">
                        <div className="flex-1 h-14 bg-gray-100 rounded-xl"></div>
                        <div className="flex-1 h-14 bg-gray-100 rounded-xl"></div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white rounded-b-3xl border-t border-gray-100">
                        <div className="flex items-center bg-gray-50 rounded-xl px-3 py-1">
                            <input
                                type="text"
                                placeholder="Ask anything"
                                className="flex-1 bg-transparent outline-none px-2 text-sm"
                            />
                            <div className="flex gap-2 items-center text-gray-600 text-lg">
                                <span>📎</span>
                                <span>🌐</span>
                                <span>💡</span>
                                <span>⋯</span>
                            </div>
                            <button
                                className="bg-black text-white px-2 rounded-full ml-2 hover:bg-gray-900"
                                aria-label="Send"
                            >
                                ⬆
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-center">
                            AI can make mistakes. Please double-check responses.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}