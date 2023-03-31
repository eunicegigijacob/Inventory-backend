import { Link } from "react-router-dom";
import React, { useState } from "react";
import Inflow from "./Inflow";
import Outflow from "./Outflow";

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
              <li
                className={
                  isHidden
                    ? "border-2 p-2 cursor-pointer border-2 p-2 border-[#2A5C99] bg-[#2A5C99] text-white"
                    : "border-2  cursor-pointer p-2"
                }
                onClick={() => {
                  toggleVisibility();
                  toggleFlow();
                }}
              >
                All Stock
              </li>
              <li
                className={
                  isHiddenFlow
                    ? "border-2 p-2 cursor-pointer border-2 p-2 border-[#2A5C99] bg-[#2A5C99] text-white"
                    : "border-2  cursor-pointer p-2"
                }
                onClick={() => {
                  toggleFlow();
                  toggleVisibility();
                }}
              >
                Low Stock
              </li>
              <li
                className={
                  isHiddenFlow
                    ? "border-2 p-2 cursor-pointer border-2 p-2 border-[#2A5C99] bg-[#2A5C99] text-white"
                    : "border-2  cursor-pointer p-2"
                }
                onClick={() => {
                  toggleFlow();
                  toggleVisibility();
                }}
              >
                Out of Stock{" "}
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
        {isHidden ? null : <Outflow />}
        {isHiddenFlow ? null : <Inflow />}
      </div>
    </div>
  );
};

export default RestockAdmin;
