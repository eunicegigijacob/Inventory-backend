import React from 'react'
import Total from "../assets/images/total.png";
import inSock from "../assets/images/instock.png";
import outStock from "../assets/images/out-stock.png";
import { Link } from "react-router-dom";

const overview = () => {
  return (
    <div>
         <div className="lg:flex mt-5 gap-5">
            <div className="mb-3">
              <Link>
                <div className="bg-[#2A5C99] flex py-5 px-5 rounded-md items-center gap-2">
                  <img src={Total} className="App-logo" alt="logo" />
                  <p className="text-white text-[20px]">Total Stock</p>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link>
                <div className="bg-[#F5B333] flex py-5 px-5 rounded-md items-center gap-2">
                  <img src={inSock} className="App-logo" alt="logo" />
                  <p className="text-white text-[20px]">Low Stock</p>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link>
                <div className="bg-[#3E7BC5] flex py-5 px-5 rounded-md items-center gap-2">
                  <img src={outStock} className="App-logo" alt="logo" />
                  <p className="text-white text-[20px]">Out of Stock</p>
                </div>
              </Link>
            </div>
          </div>
    </div>
  )
}

export default overview