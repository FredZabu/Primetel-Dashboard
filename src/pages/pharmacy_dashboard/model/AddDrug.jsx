/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { GiMedicines } from "react-icons/gi";

function AddDrug({ openView, setOpenView }) {
  return (
    <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
    <div className='w-[40%] h-[90%] relative  rounded-md bg-[#F0F3F9]'>

        <div className="sticky bg-[#F0F3F9] z-50 top-0 py-4 left-0 right-0">
          <div className=' w-[95%]  mx-auto '>
          <div className='flex justify-between items-center  '>
            <h1 className='font-bold text-xl'>Edit Category Items</h1>
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
                      <input type="text" name="name" id="name" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Drug Name' />             
                    </div>
                </div>
                <div className="mt-5">
                    <p className=" font-semibold text-textDark">Description</p>
                    <div className='flex space-x-5 items-center'>
                      <input type="text" name="description" id="description" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Drug Description' />             
                    </div>
                </div>
                <div className="mt-5">
                    <p className=" font-semibold text-textDark">Manufacturer</p>
                    <div className='flex space-x-5 items-center'>
                      <input type="text" name="manufacturer" id="manufacturer" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Drug Manufacturer' />             
                    </div>
                </div>
                <div className="mt-5">
                    <p className=" font-semibold text-textDark">Sizes</p>
                    <div className='flex space-x-5 items-center'>
                      <input type="text" name="size" id="size" className="bg-white text-[#52575C] px-4 py-2 w-[100%]" placeholder='Enter Drug Sizes' />             
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

export default AddDrug