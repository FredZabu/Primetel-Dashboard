/* eslint-disable no-unused-vars */

import  {useState} from 'react';
import NavbarWithNotification from "../../components/Navbar";
import Layout from "../Layout";
import OrderTable from "./model/OrderTable";
import { MdOutlineFilterAlt } from "react-icons/md";



export default function Orders() {
  const [dropDown, setDropDown] = useState(false);
  const tableHeaders = [
      "Order_ID",
      "Doctor_Name",
      "Doctor_Contact",
      "Patient_Name",
      "Patient_Contact",
      "Date",
    ];
  const [tableData, setTableData] = useState([
    {
      Order_ID: "230x200",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Asiimwe Fred",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "pending",
      
    },
    {
      Order_ID: "230x300",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Kahwa Zabulon",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "delivered",
      
    },
    {
      Order_ID: "230x600",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Asiimwe Fred",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "missed",
      
    },
    {
      Order_ID: "230x700",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Asiimwe Fred",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "delivered",
      
    }    
  ]);
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder="Search Orders by ID, Name" />  
        <div className=' px-6'>
              <div className="inline-block mt-4 no-scrollbar relative overscroll-y-none ">
              <button  className="inline-flex items-center justify-center w-full  border border-primary hover:bg-primary/50  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-primary hover:text-white text-sm px-4 py-2" onClick={()=>{setDropDown(!dropDown)}}>
                <MdOutlineFilterAlt className="w-5 h-5 mr-2 " />
                Filter
               
              </button>   
              <div className={`${dropDown ? 'block' : 'hidden'} absolute  min-w-[15vw] bg-white min-h-[200px] py-4 px-4 border z-[8] top-[100%] mt-1`}>
                <div className="">
                  <div>
                    <p>FILTER BY:</p>
                    <div className="flex items-center mb-2">
                      <input checked type="radio" value="" name="latest" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input  type="radio" value="" name="latest" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Most Recent</label>
                  </div>
                  <div className="flex items-center">
                        <input   type="radio" value="" name="latest" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Most Outdated</label>
                    </div>                  
                  </div>
                  <div className='mt-5'>
                    <p>STATUS</p>
                    <div className="flex items-center mb-2">
                      <input checked  type="radio" value="Delivered" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delivered</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input  type="radio" value="Pending" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pending</label>
                  </div>
                  <div className="flex items-center">
                        <input   type="radio" value="Missed" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Missed</label>
                    </div>                  
                  </div>                                   
              </div>  
              <div className='mt-4'>
                <button  className="inline-flex items-center justify-center w-full  border border-primary hover:bg-primary/50  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-primary hover:text-white text-sm px-4 py-2" onClick={()=>{}}> 
                 Reset               
                </button> 
              </div>
              </div>
            </div>            
        </div>
        {/* below */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100">
          <div className="container mx-auto px-6 py-8">
          
            <div className="mt-4">
              <OrderTable
                tableData={tableData}
                tableHeaders={tableHeaders}
                status={true}
                actions={true}
                funct="Test Orders"
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
