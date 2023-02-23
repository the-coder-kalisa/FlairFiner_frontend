import * as React from "react";
import { useState } from "react";
import pic from "../../images/person.png";
import logo from "../../images/logo.png";
interface MessagingTopBarProps {}

const MessagingTopBar: React.FC<MessagingTopBarProps> = () => {
    const [name, setName] = useState("Vanessa")
  return (
    <div className="w-full bg-[#E0E7ED] h-[10%] flex justify-between text-center">
      <div className="flex bg-pink-200 text-center">
        <img src={pic} alt="" className="rounded-full h-1/2" />
        <span>{name}</span>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default MessagingTopBar;
