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
        <div className="my-9">
          <WarningAlert message="Budweiser is low on stock. Contact your supplier to restock." />
        </div>
        <div className="lg:my-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
            <div>
              <ul className="flex gap-0">
                <li className="border-2 p-2 border-[#2A5C99] bg-[#2A5C99] text-white">
                  All Stock
                </li>
                <li className="border-2 p-2">Low Stock</li>
                <li className="border-2 p-2">Out of Stock</li>
              </ul>
            </div>
            <div className="flex items-center gap-6 justify-end">
              <p>1/50</p>
              <div className="flex gap-4">
                <div className="py-2 px-2 border-2">
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00003 12.5L7.41003 11.09L2.83003 6.5L7.41003 1.91L6.00003 0.5L3.43323e-05 6.5L6.00003 12.5Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="bg-[#2A5C99] py-2 px-2">
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.99997 0.5L0.589966 1.91L5.16997 6.5L0.589966 11.09L1.99997 12.5L7.99997 6.5L1.99997 0.5Z"
                      fill="#FDFDFD"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:mx-9">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Product name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Qty
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Last stocked
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-l-2 p-2 border-[#12DB1A]">
                          <div className=" flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Budweiser
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Beer</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          10
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          12/03/2023
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="relative inline-block">
                            <button
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                              type="button"
                              onClick={toggleDropdown}
                            >
                              Dropdown button
                              <svg
                                className={`w-4 h-4 ml-2 transform transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </button>
                            {isOpen && (
                              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <div className="px-4 py-3">
                                  <span className="block text-sm">
                                    Bonnie Green
                                  </span>
                                  <span className="block text-sm font-medium text-gray-900 truncate">
                                    name@flowbite.com
                                  </span>
                                </div>
                                <ul className="py-1" aria-labelledby="dropdown">
                                  <li>
                                    <Link
                                      href="#"
                                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                    >
                                      Dashboard
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="#"
                                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                    >
                                      Settings
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="#"
                                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                    >
                                      Earnings
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="#"
                                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                    >
                                      Sign out
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
