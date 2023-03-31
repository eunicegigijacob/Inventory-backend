import { Link } from "react-router-dom";
import React, { useState } from "react";

const RestockAdmin = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenFlow, setIsHiddenFlow] = useState(false);

  const toggleVisibility = (id) => {
    setIsHidden(!isHidden);
  setIsHiddenFlow(true);
  };
  const toggleFlow = (id) => {
    setIsHiddenFlow(!isHiddenFlow);
  setIsHidden(true);
  };

  return (
    <div>
      <p className="text-[24px]">Recent Stockings</p>
      <div className="lg:my-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
          <div>
            <ul className="flex gap-0">
              <li className="border-2 p-2 border-2 p-2 border-[#2A5C99] bg-[#2A5C99] text-white" onClick={() => {toggleVisibility(); toggleFlow();}}>
                {isHiddenFlow ? "Show" : "Hide"}
                Inflow
              </li>
              <li className="border-2 p-2" onClick={() => {toggleFlow(); toggleVisibility();}}>
                {isHidden ? "Show" : "Hide"}Outflow
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6 justify-end">
            <Link
              to="/outflow"
              className="flex items-center gap-2 text-[#2A5C99]"
            >
              See More
            </Link>
          </div>
        </div>
        {isHidden ? null : (
          <div className="flex flex-col lg:mx-9">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#2A5C99]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Product name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Qty
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Date stocked{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Total Qty in Stock
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-l-2 p-2">
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
        )}
         {isHiddenFlow ? null : (
          <div className="flex flex-col lg:mx-9">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#2A5C99]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Product name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Qty
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Date stocked{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-[white] uppercase tracking-wider"
                        >
                          Total Qty in Stock
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-l-2 p-2">
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
                        <td className="px-6 py-4 whitespace-nowrap border-l-2 p-2">
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
        )}
      </div>
    </div>
  );
};

export default RestockAdmin;
