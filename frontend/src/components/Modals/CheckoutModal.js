import React from 'react';
import { Link } from "react-router-dom";
import Success from '../../assets/images/success.png'

const SuccessModal = ({ showModal, setShowModal, title, body }) => {
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
               <div className='text-center m-auto'>
                 
               </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SuccessModal;