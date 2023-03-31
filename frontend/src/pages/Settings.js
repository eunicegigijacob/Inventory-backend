import React, {useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import axios from "axios";
// import React, { useState } from 'react';
import swal from 'sweetalert';

const Setting = (e) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);
  }, []);
  const [formData, setFormData] = useState({
    categoryName: "",
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://inventory-1lfe.onrender.com/addCategory", formData)
      .then((response) => {
        const { categoryName } = response.data.result;
        const existingCategories =
          JSON.parse(localStorage.getItem("categories")) || [];
        localStorage.setItem(
          "categories",
          JSON.stringify([...existingCategories, categoryName])
        );
        console.log(response.data)
        if(categoryName){

          swal({
            title: "Category Added Successfully",
            icon: "success",
            successMode: true,
          })
          setTimeout(function(){
            window.location.reload(1);
         }, 5000);
        }
       
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
          <form
            className="flex w-[50%] items-center gap-5"
            onSubmit={handleSubmit}
          >
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
                    name="categoryName"
                    id="category"
                    className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                    value={formData.categoryName}
                    onChange={handleChange}
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

          <div className="categories">
            <h2 className="text-[20px] my-6">All Categories</h2>
            {categories.map((category) => (
              <div className="flex justify-between w-[50%]" key={category}>
                <div className="flex gap-6">
                  <input type="checkbox" />
                  <p>{category}</p>
                </div>
                <div className="flex text-[#AAAAAA] gap-3">
                  <span>Remove</span>
                  <span>Edit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Setting;
