import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import UserProfileGenral from "../../pages/profile/profile/UserProfileGenral";

const UserGeneral = ({ profilePicture, setShowCropImg, setProfilePicture }) => {
  const poi = ["Genral", "Favorite"];

  let qqq = ["name", "email", "phone"];
  let www = { name: "ali dkfj", email: "berfee@kwb.cn", phone: "09268557406" };
  const [query, setQuery] = useState("Genral");
  const [selectedForChange, setSelectedForChange] = useState("r5");

  return (
    <fieldset className="flex w-full dark:bg-border bg-white dark:bg-opacity-40 p-4 rounded-3xl">
      <legend className="hidden md:flex text-btn  mx-2 text-[18px] font-bold">
        General
      </legend>
      <ProfileImage
        profilePicture={profilePicture}
        setShowCropImg={setShowCropImg}
        setProfilePicture={setProfilePicture}
      />
      <div className="hidden sm:flex">
        <UserProfileGenral
          qqq={qqq}
          selectedForChange={selectedForChange}
          setSelectedForChange={setSelectedForChange}
          www={www}
        />
      </div>
    </fieldset>
  );
};

export default UserGeneral;
