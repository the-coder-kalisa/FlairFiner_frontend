import React from "react";
import { Profile } from "../../@types/types";
import pic from "../../images/person.png"
const ProfileBox: React.FC<Profile> = ({ picture, name }) => {
  return (
    <div className="flex my-12">
      <img src={pic} className="rounded-[100%] w-1/5"/>
      <span className="text-[#7b1e1e] ">{name}</span>
    </div>
  );
};
export default ProfileBox;