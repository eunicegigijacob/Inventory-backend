import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useState } from "react";
import WarningAlert from "../components/Alert";
import { Link, useLocation } from "react-router-dom";

const Product = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="lg:flex">
      <div className="lg:w-[20%] ">
        <Sidebar />
      </div>
      <main className="lg:w-[80%] w-full px-3 md:p-9 grow basis-0">
        <TopBar />
        <div className="lg:my-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
            <div>
              <ul className="flex gap-0">
                <li className="border-2 p-2 border-[#2A5C99] bg-[#2A5C99] text-white">
                  Add new category
                </li>
                <li className="border-2 p-2">Add new product </li>
              </ul>
            </div>
          </div>
          <form className="flex w-[50%] items-center gap-5"> 
              <div className="sm:col-span-4 w-[50%]">
                <label
                  for="category"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                >
                  Category
                </label>
                <div className="mt-2">
                  <div className="flex py-[8px]  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-[30px] text-white bg-blue-700 text-[20px] py-[15px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 text-center dark:bg-[#088AB2] dark:hover:bg-[#088AB2] dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </div>
            </form>
        </div>
      </main>
    </div>
  );
};

export default Product;
