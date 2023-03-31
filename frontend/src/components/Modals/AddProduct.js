import React from "react";
import { Link } from "react-router-dom";
import Success from "../../assets/images/success.png";

const AddProduct = ({ showModal, setShowModal, title, body }) => {
  return (
    <>
      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg shadow-lg relative w-11/12 sm:w-3/4 md:w-1/2 lg:11/12">
              <div className="p-4">
                <button
                  className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
                <div className=" m-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-1 mb-5">
                    <div className="flex items-center gap-6">
                      <p className=" p-2">Add new Stock</p>
                    </div>
                    <div className="flex justify-end p-5">
                      <ul className="flex gap-0">
                        <li className="border-2 p-2">All Stock</li>
                        <li className="border-2 p-2  border-[#2A5C99] bg-[#2A5C99] text-white">
                          Add Stock
                        </li>
                      </ul>
                    </div>
                    <form className="">
                      <div className="flex  gap-4 items-center justify-between">
                        <div class="relative lg:w-[50%] inline-block w-full text-gray-700">
                          <label
                            for="productname"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Product name
                          </label>
                          <select class="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:shadow-outline">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                        </div>
                        <div class="relative lg:w-[50%] inline-block w-full text-gray-700">
                          <label
                            for="password"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Product Category
                          </label>
                          <select class="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:shadow-outline">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-4 items-center justify-between">
                        <div className="sm:col-span-4 lg:w-[50%]">
                          <label
                            for="productname"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Restocking level
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset border-2 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                              <input
                                type="text"
                                name="productname"
                                id="productname"
                                className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                placeholder="John Doe"
                                value="product name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-4 lg:w-[50%]">
                          <label
                            for="password"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Product quantity
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                              <input
                                type="text"
                                name="productcategory"
                                id="productcategory"
                                className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                placeholder="productcategory"
                                value="productcategory"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-4 items-center justify-between">
                        <div className="sm:col-span-4 lg:w-[50%]">
                          <label
                            for="productname"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Quantity before restocking
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset border-2 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                              <input
                                type="text"
                                name="productname"
                                id="productname"
                                className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                placeholder="John Doe"
                                value="product name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-4 lg:w-[50%]">
                          <label
                            for="password"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Date of Stocking
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                              <input
                                type="date"
                                name="productcategory"
                                id="productcategory"
                                className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                placeholder="productcategory"
                                value="productcategory"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-4 items-center justify-between">
                        <div className="sm:col-span-4 lg:w-[50%]">
                          <label
                            for="productname"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Product description
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset border-2 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                            <textarea
                                className="px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                rows="3"
                                placeholder="Enter your message..."
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-4 lg:w-[50%]">
                          <label
                            for="password"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
                          >
                            Notification message
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset border-2 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                            <textarea
                                className="px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                rows="3"
                                placeholder="Enter your message..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <button
                          type="submit"
                          className="mt-[30px] text-white bg-blue-700 text-[20px] py-[15px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 text-center dark:bg-[#088AB2] dark:hover:bg-[#088AB2] dark:focus:ring-blue-800"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddProduct;
