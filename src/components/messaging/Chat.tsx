import React, { useState } from 'react';

interface ChatProps {
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string, isSent: boolean }[]>([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message.trim(), isSent: true }]);
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white pt-12">
      <div className="flex-grow overflow-y-scroll w-1/2 mx-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`border-2 rounded-xl mr-4 border-[#204885] p-2 mb-2 ${msg.isSent ? 'ml-auto' : ''}`} style={{ maxWidth: '75%' }}>
            <div className="rounded-md mb-4">
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center w-1/2 mx-auto">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 rounded-md border-gray-400 border-2 focus:outline-none focus:border-blue-400"
        />
        <button onClick={handleSendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
