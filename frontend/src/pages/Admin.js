import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";

const Admin = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-2/12 ">
        <Sidebar />
      </div>
      <main className="lg:w-9/12 w-full px-3 md:p-9 grow basis-0">
        <TopBar /> 
        <>
        </>
      </main>
    </div>
  );
};

export default Admin;
