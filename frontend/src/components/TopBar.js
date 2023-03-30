import React from "react";
import search from "../assets/images/searchIcon.svg";
import notification from "../assets/images/notification.svg";
import settings from "../assets/images/settingIcon.svg";
import user from "../assets/images/user.svg";

const TopBar = () => {
  return (
    <div className="lg:flex gap-6">
      <div className="grow basis-0">
        <div className="flex items-center rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
          <img src={search} className="pl-2 w-[26px]" alt="logo" />
          <input
            type="text"
            name="email"
            id="email"
            autocomplete="email"
            className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            placeholder="Input the name of your company or business"
          />
        </div>
      </div>
      <div className="flex items-center md:justify-end gap-5 justify-center mt-3 md:m-0">
        <div className="relative border-2 rounded-full p-1">
          <img src={notification} className="w-[26px]" alt="logo" />
          <span className="absolute top-[-9px] bg-[#E23838] px-2 rounded-full right-[-10px]
    top[-15px] text-white text-sm">3</span>
        </div>
        <img src={settings} className="pl-2" alt="logo" />
        <div className="flex gap-1 items-center">
          <img src={user} className="pl-2 w-[36px]" alt="logo" />
          <span>User</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
