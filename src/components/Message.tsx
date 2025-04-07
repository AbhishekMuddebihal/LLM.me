import { ChatMessage } from "../types";

const Message = ({ message }: { message: ChatMessage }) => {
  return (
    <div
      className={`flex flex-col p-4 rounded-lg mb-2 ${
        message.role === "user" ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      <div className="text-sm font-semibold">{message.role}</div>
      <div className="text-base">{message.content}</div>
    </div>
  );
}

export default Message;