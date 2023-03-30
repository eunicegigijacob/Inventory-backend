import React from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/images/dashboardIcon.svg";
import product from "../assets/images/productIcon.svg";
import sales from "../assets/images/sales.svg";
import logout from "../assets/images/logout.svg";
import purchase from "../assets/images/purchaseicon.svg";
import settingIcon from "../assets/images/settingIcon.svg";
import { useEffect, useState } from "react";
import hamburger from "../assets/images/hamburger.svg"


const SideBar = () => {
  const location = useLocation();

  const [show, toggleShow] = useState(false);

  useEffect(() => {
    function handleResize() {
      toggleShow(window.innerWidth > 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <img src={hamburger} className="pl-2 w-[36px] lg:hidden my-4" alt="logo"  onClick={() => toggleShow(!show)}/>
    {show && (
    <div className="bg-white border-r-2 h-screen  pl-4 z-20 absolute md:relative w-full">
      <div className="text-[#088AB2] p-[10px] mb-5" >STOCKUP</div>
      <ul className="flex gap-9 flex-col">
        <li
          className={
            location.pathname === "/admin"
              ? "bg-[#088AB2] p-[10px] text-[20px] rounded-l text-white"
              : "text-[#555555] p-[10px] text-[20px] hover:text-[#088AB2]"
          }
        >
          <Link to="/admin" className="flex items-center gap-2">
            <img src={dashboardIcon} className="App-logo" alt="logo" />
            Dashboard
          </Link>
        </li>
        <li
          className={
            location.pathname === "/sales"
              ? "bg-[#088AB2] p-[10px] text-[20px] rounded-l text-white"
              : "text-[#555555] p-[10px] text-[20px] hover:text-[#088AB2]"
          }
        >
          <Link to="/sales" className="flex items-center gap-2">
            <img src={sales} className="App-logo" alt="logo" />
            Sales
          </Link>
        </li>
        <li
          className={
            location.pathname === "/product"
              ? "bg-[#088AB2] p-[10px] text-[20px] rounded-l text-white"
              : "text-[#555555] p-[10px] text-[20px] hover:text-[#088AB2]"
          }
        >
          <Link to="/product" className="flex items-center gap-2">
            <img src={product} className="App-logo" alt="logo" />
            Product
          </Link>
        </li>
        <li
          className={
            location.pathname === "/purchase"
              ? "bg-[#088AB2] p-[10px] text-[20px] rounded-l text-white"
              : "text-[#555555] p-[10px] text-[20px] hover:text-[#088AB2]"
          }
        >
          <Link to="/purchase" className="flex items-center gap-2">
            <img src={purchase} className="App-logo" alt="logo" />
            Purchase
          </Link>
        </li>
        <li
          className={
            location.pathname === "/settings"
              ? "bg-[#088AB2] p-[10px] text-[20px] rounded-l text-white"
              : "text-[#555555] p-[10px] text-[20px] hover:text-[#088AB2]"
          }
        >
          <Link to="/settings" className="flex items-center gap-2">
            <img src={settingIcon} className="App-logo" alt="logo" />
            Settings
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 flex items-center gap-2">
        <img src={logout} className="App-logo" alt="logo" />
        Log out
      </div>
    </div>
    )}
    </>
  );
};

export default SideBar;
