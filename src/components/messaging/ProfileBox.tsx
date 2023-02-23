import React from "react";
import { Profile } from "../../@types/types";
import pic from "../../images/person.png"
import axios from "axios";

const ProfileBox: React.FC<Profile> = ({ picture, name }) => {
  return (
    <div className="flex my-12 cursor-pointer">
      <img src={pic} className="rounded-[100%] w-1/5 ml-8 mr-5"/>
      <span className="text-[#0C0808] ">{name}</span>
    </div>
  );
};
export default ProfileBox;