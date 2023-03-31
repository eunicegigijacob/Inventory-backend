import React from 'react';
import { Link } from "react-router-dom";

const Modal = ({ showModal, setShowModal, title, body }) => {
  return (
    <>
      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg shadow-lg relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
              <div className="p-4">
                <button
                  className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
               <div className='flex flex-col gap-9 lg:ml-[5rem] py-6'>
                <h2 className="text-lg font-bold mb-3">{title}</h2>
               <div className='flex gap-9'>
                    <p className='w-5/12'>Product Name:</p>
                    <p className='text-[#555555] w-6/12'>Budweiser</p>
                </div>
                <div className='flex gap-9'>
                    <p className='w-5/12'>Last Stocked:</p>
                    <p className='text-[#555555] w-6/12'>31/03/2023</p>
                </div>
                <div className='flex gap-9'>
                    <p className='w-5/12'>Category:</p>
                    <p className='text-[#555555] w-6/12'>BM00123</p>
                </div>
                <div className='flex gap-9'>
                    <p className='w-5/12'>Restocking Level:</p>
                    <p className='text-[#555555] w-6/12'>10</p>
                </div>
                <div className='flex gap-9'>
                    <p className='w-5/12'>Stock quantity:</p>
                    <p className='text-[#555555] w-6/12'>30</p>
                </div>
                <div className='flex gap-9'>
                    <p className='w-5/12'>Days in Inventory:</p>
                    <p className='text-[#555555] w-6/12'>30 Days</p>
                </div>
                <div className='flex gap-5  items-center'>
                    <Link className='bg-[#2A5C99] px-5 py-2 text-white' >Check out</Link>
                    <Link className='border px-5 py-2 text-[#2A5C99]' >Go to Product page</Link>
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

export default Modal;