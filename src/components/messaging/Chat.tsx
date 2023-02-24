import React, { useState } from "react";
import emoji from "../../images/emoji.svg";
import send from "../../images/send.svg";
import gift from "../../images/Gift.svg";

interface ChatProps {
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isSent: boolean }[]>(
    []
  );

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message.trim(), isSent: true }]);
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white pt-12">
      <div className="flex-grow overflow-y-scroll w-1/2 mx-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`border-2 rounded-xl mx-4 w-fit border-[#204885] break-words p-2 mb-2 text-xl ${
              msg.isSent ? "ml-auto" : ""
            }`}
            style={{ maxWidth: "75%" }}
          >
            <div className="rounded-md mb-4">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="py-6 border border-[#204885] flex h-[10%] w-[70%] justify-between text-center px-6 mx-4 my-6 rounded-lg">
        <img src={emoji} alt="" className="cursor-pointer" />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="outline-none ml-4 text-lg px-4 py-6 w-full overflow-wrap-anywhere"
          placeholder="Type a message..."
        />
        <div className="flex justify-end">
          <img src={gift} alt="" className="mr-4 cursor-pointer"/>
          <img src={send} alt=""onClick={handleSendMessage} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
