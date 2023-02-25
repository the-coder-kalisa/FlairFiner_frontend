import * as React from "react";
import logo from "../../images/logo.png";
import earth from "../../images/earth.svg";
import { Link } from "react-router-dom";
import Signup from "../signup/Signup";
import welcome from "../../images/welcomeImg.jpg";
interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div className="bg-center bg-cover h-screen w-screen p-10 bg-[url(../../images/logo.png)] welcome-page">
      <img src={logo} alt="" />
      <div className="flex flex-col justify-center items-center">
        <img src={earth} className="w-[15%]" alt="" />
        <span className="text-white mb-4 mt-6 font-bold text-3xl">
          World of talents
        </span>
        <span className="italic text-white text-lg">
          impress the world with your talent &support talents{" "}
        </span>
        <Link to="/Signup">
          <button className="bg-[#A30404] rounded-lg px-4 py-2 mt-8 text-white text-lg">
            Join Channel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
