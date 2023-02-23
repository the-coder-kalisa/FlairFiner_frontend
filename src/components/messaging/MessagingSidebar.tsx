import * as React from "react";
import { useState } from "react";
import { Profile } from "../../@types/types";
import data from "../../profiles.json";
import ProfileBox from "./ProfileBox";
interface MessagingSidebarProps {}

const MessagingSidebar: React.FC<MessagingSidebarProps> = (picture, name) => {
  const [profiles] = useState<Profile[] | null>(data.profiles);
  return (
      <div className="w-[15%] bg-[#E0E7ED] h-[100%]">
        {profiles?.map((Profile) => (
          <ProfileBox key={Profile.name} {...Profile} />
        ))}
      </div>
  );
};

export default MessagingSidebar;