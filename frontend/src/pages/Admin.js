import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import WarningAlert from "../components/Alert";
import Overview from "../components/overview";
import Chart from "../components/Chart";
import RestockAdmin from  "../components/restockAdmin"

const Admin = () => {
 
  return (
    <div className="lg:flex">
      <div className="lg:w-[20%]">
        <Sidebar />
      </div>
      <main className="lg:w-[80%] w-full px-3 md:p-9 grow basis-0 overflow-scroll h-screen">
        <TopBar />
        <div className="my-9">
          <WarningAlert message="HP Elite book 840 is low on stock. Contact your supplier to restock." />
        </div>
        <div className="lg:my-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
            <div className="flex items-center gap-6">
              <p className="border-2 p-2">Out of Stock</p>
            </div>
            <div className="flex justify-end">
              <ul className="flex gap-0">
                <li className="border-2 p-2 border-[#2A5C99] bg-[#2A5C99] text-white">
                  Today
                </li>
                <li className="border-2 p-2">This week</li>
                <li className="border-2 p-2">This Month</li>
                <li className="border-2 p-2">This year</li>
              </ul>
            </div>
          </div>
         <Overview />
          <div>
            <div className="bg-white p-3">
             <Chart />
            </div>
            <div className="">
              <RestockAdmin />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
