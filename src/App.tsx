import './App.css';
import ChatWindow from './components/ChatWindow';
import { ChatMessage } from './types';
import { useState } from 'react';

function App() {
  const messages: ChatMessage[] = [
    { role: 'user', content: 'Hello!' },
    { role: 'assistant', content: 'Hi there! How can I help you today?' },
    { role: 'user', content: 'What is LLM.me?' },
    { role: 'assistant', content: 'LLM.me is a platform for building and deploying large language models.' },
  ];

  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(messages);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage: ChatMessage = { role: 'user', content: input };
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <div className="container py-5 d-flex flex-column" style={{ height: '100vh' }}>
        <h2 className="text-center mb-4">Talk to Abhishek 🤖</h2>
        <div className="chat-window flex-grow-1 overflow-auto border rounded p-3 bg-light">
          <ChatWindow messages={chatMessages} />
        </div>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ask something about me..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </>
  )
}

export default App
