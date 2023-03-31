import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useState } from "react";
import WarningAlert from "../components/Alert";
import { Link, useLocation } from "react-router-dom";

const Outflow = ({ data }) => {
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
                <li className="border-2 py-2 px-5 border-[#2A5C99] bg-[#2A5C99] text-white flex gap-2 items-center">
                  Filter
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 12V10H11.5V12H7.5ZM3.5 7V5H15.5V7H3.5ZM0.5 2V0H18.5V2H0.5Z"
                      fill="white"
                    />
                  </svg>
                </li>
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
                    <thead className="bg-[#E8EDF3]">
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
                          Date stocked
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total Qty in Stock
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowra  p-2 ">
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
                          10
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap  p-2 ">
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
                          10
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap p-2 ">
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
                          10
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

export default Outflow;
