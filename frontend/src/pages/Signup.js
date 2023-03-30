import React from "react";
import empty_cart from "../assets/images/empty_cart.svg";
import googleImage from "../assets/images/google-icon.svg";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-screen items-center justify-center ">
      <div className="bg-[#088AB2] h-full flex justify-center items-center lg:rounded-tr-[30px] lg:rounded-br-[30px]">
        <img src={empty_cart} className="App-logo" alt="logo" />
      </div>
      <div className="overscroll-y-auto ">
        <div className="p-5">
          <div className="text-center mt-[40px] mb-[79px]">
            <h1 className="text-[32px]">Welcome Back!</h1>
            <p className="text-[#2A2A2A] text-[20px]">
              Do not run out of stock. Keep track of your Inventory!
            </p>
          </div>
          <form className="">
            <div className="sm:col-span-4">
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
              >
                Company’s Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
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
            </div>
            <div className="sm:col-span-4 mt-[30px]">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    autocomplete="password"
                    className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    placeholder="Input the name of your company or business"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <input type="checkbox" class="checked:bg-blue-500 ..." />
              Remember me
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="mt-[30px] text-white bg-blue-700 text-[20px] py-[15px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 text-center dark:bg-[#088AB2] dark:hover:bg-[#088AB2] dark:focus:ring-blue-800"
              >
                Create Account
              </button>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="mt-[30px] flex item-center justify-center gap-3 text-[#0589b2] hover:text-white bg-transparent text-[20px] py-[15px] hover:bg-[#0589b2] border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 text-center "
              >
                <img src={googleImage} className="App-logo" alt="logo" />
                Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
