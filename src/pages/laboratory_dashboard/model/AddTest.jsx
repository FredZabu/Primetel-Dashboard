/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { GiMedicines } from "react-icons/gi";

function AddTest({ openView, setOpenView }) {
  return (
    <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
    <div className='w-[40%] h-[90%] relative  rounded-md bg-[#F0F3F9]'>

        <div className="sticky bg-[#F0F3F9] z-50 top-0 py-4 left-0 right-0">
          <div className=' w-[95%]  mx-auto '>
          <div className='flex justify-between items-center  '>
                <div className='flex items-center space-x-4'>
                <h1 className='font-bold text-xl'>Edit Category Items</h1>
                <div className="rounded-3xl  bg-category text-[#52575C] px-2 py-1 flex items-center justify-between space-x-4">
                  <div className='flex items-center space-x-4'>
                    <div className='h-[7px] w-[7px] bg-[#100DB1] rounded-full'></div>
                    <p className="text-[#100DB1]">Allergies</p>
                  </div>
                  
                  
                  <div className='inline-block cursor-pointer'>
                    <RxCross1 size={14} color="#C92B27"/>
                  </div>               
                </div>              
              </div>          
            <div className='inline-block cursor-pointer' onClick={()=>{setOpenView(!openView)}}>
              <RxCross1 size={20} />
            </div>            
          </div>    
          </div>      
        </div>

        <hr className='mt-0 bg-slate-500' />
        <div className=' w-[95%] mt-4 mx-auto '>

         
                                 
          <form action="" className='mt-5 w-[80%]'>
            <div className=''>
                <div className=''>
                    <p className=" font-semibold text-textDark">Name</p>
                    <div className='w-[100%]'>
                      <input type="text" name="name" id="name" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Test Name' />             
                    </div>
                </div>
                <div className="mt-5">
                    <p className=" font-semibold text-textDark">Description</p>
                    <div className='flex space-x-5 items-center'>
                      <input type="text" name="description" id="description" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Test Description' />             
                    </div>
                </div>
                <div className="mt-5">
                    <p className=" font-semibold text-textDark">Duration</p>
                    <div className='flex space-x-5 items-center'>
                      <input type="text" name="duration" id="manufacturer" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Test Duration' />             
                    </div>
                </div>
                <div className="mt-5">
                    <p className=" font-semibold text-textDark">Charge</p>
                    <div className='flex space-x-5 items-center'>
                      <input type="text" name="charge" id="charge" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Test Charge' />             
                    </div>
                </div>
                <div className="mt-5">
                  <p className=" font-semibold text-textDark">Availability</p>
                  <div className='flex space-x-5 items-center'>
                    <select id="countries" className="bg-gray-50 border border-gray-500 text-[#52575C] text-[16px]  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                      <option selected>Select Availability</option>
                      <option value="Available">Available</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>       
                  </div>
                </div>
                <div className='mt-5 grid place-items-center'>
                    <div className='inline-block'>
                        <button className="flex items-center justify-center w-full text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-2 text-[18px]">Add
                        </button>  
                    </div>                
                </div>          
                       

            </div>
          </form>
        </div>          
        
    </div>
  </div>
  )
}

export default AddTest