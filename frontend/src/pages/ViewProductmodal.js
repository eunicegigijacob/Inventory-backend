import React from "react";
import Modal from "../components/Modals/Modal";
import Success from "../components/Modals/SuccessModal";
import AddProduct from "../components/Modals/AddProduct";
import { useEffect, useState } from "react";


const ModalFunc = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      <AddProduct showModal={showModal} setShowModal={setShowModal} title="Product Details" body="oih"/>
      {/* <Modal showModal={showModal} setShowModal={setShowModal} title="Product Details" body="oih"/> */}
      {/* <Success showModal={showModal} setShowModal={setShowModal} title="Product Details" body="oih"/> */}
    </div>
  );
};

export default ModalFunc;


