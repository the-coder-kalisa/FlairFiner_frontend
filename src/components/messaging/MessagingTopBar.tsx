import * as React from "react";
import { useState } from "react";
import pic from "../../images/vava.svg";
import logo from "../../images/logo.png";
import messaging from "../../images/messaging.svg";
import phone from "../../images/phone.svg";
import account from "../../images/account.svg";
interface MessagingTopBarProps {}

const MessagingTopBar: React.FC<MessagingTopBarProps> = () => {
  const [name, setName] = useState("Vanessa");
  return (
    <div className="w-full bg-[#E0E7ED] h-[10%] flex justify-between text-center">
      <div className="flex items-center ml-8 h-full">
        <img src={pic} alt="" className="rounded-full h-[70%] w-[] mr-6" />
        <span className="text-xl">{name}</span>
      </div>
      <div className="flex items-center">
        <img src={logo} alt="" className="h-12" />
      </div>
      <div className="h-full flex items-center justify-between mr-8 px-8 w-[20%]">
        <img src={phone} alt="" className="h-[25%] cursor-pointer" />
        <img src={messaging} alt="" className="h-[25%] cursor-pointer" />
        <img src={account} alt="" className="h-[25%] cursor-pointer" />
      </div>
    </div>
  );
};

export default MessagingTopBar;
