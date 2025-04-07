import { ChatMessage } from "../types";

interface ChatWindowProps {
    messages: ChatMessage[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
    return (
        <div className="d-flex flex-column p-4 bg-white rounded-lg shadow-sm h-100 overflow-auto">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`d-flex mb-2 ${
                        message.role === "user" ? "justify-content-end" : "justify-content-start"
                    }`}
                >
                    <div
                        className={`p-3 rounded shadow-sm ${
                            message.role === "user"
                                ? "bg-primary text-white text-end"
                                : "bg-light text-dark text-start"
                        }`}
                        style={{ maxWidth: "75%" }}
                    >
                        <div className="fw-bold small mb-1">{message.role}</div>
                        <div>{message.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;