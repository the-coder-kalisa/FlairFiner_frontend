import * as React from "react";
import MessagingSidebar from "./MessagingSidebar";
import MessaginTopBar from "./MessagingTopBar";
import Chat from "./Chat";
interface MessagingProps {}

const Messaging: React.FC<MessagingProps> = () => {
  const handleSendMessage = (message: string) => {
    console.log(`Sending message: ${message}`);
  };
  return (
    <div className="w-screen bg-black h-screen">
      <MessaginTopBar />
      <div className="flex h-[90%]">
        <MessagingSidebar />
        <Chat onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Messaging;
