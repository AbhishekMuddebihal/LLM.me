
import { ChatMessage } from "../types";

interface ChatWindowProps {
    messages: ChatMessage[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
    return (
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md h-full overflow-y-auto">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex flex-col p-4 rounded-lg mb-2 ${
                        message.role === "user" ? "bg-blue-100" : "bg-gray-100"
                    }`}
                >
                    <div className="text-sm font-semibold">{message.role}</div>
                    <div className="text-base">{message.content}</div>
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;