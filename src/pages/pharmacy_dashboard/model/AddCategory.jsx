/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { GiMedicines } from "react-icons/gi";

function AddCategory({ openView, setOpenView, data }) {
  return (
    <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
    <div className='w-[40%] h-[90%] relative  rounded-md bg-[#F0F3F9]'>

        <div className="sticky bg-[#F0F3F9] z-50 top-0 py-4 left-0 right-0">
          <div className=' w-[95%]  mx-auto '>
          <div className='flex justify-between items-center  '>
            <h1 className='font-bold text-xl'>Drug Category</h1>
            <div className='inline-block cursor-pointer' onClick={()=>{setOpenView(!openView)}}>
              <RxCross1 size={20} />
            </div>            
          </div>    
          </div>      
        </div>

        <hr className='mt-0 bg-slate-500' />
        <div className=' w-[95%] mt-4 mx-auto '>
            <div className="grid grid-cols-2 gap-2">
            {
              data.map((drug, index) => {
                
                return <div key={index} className="rounded-3xl mt-2 min-w-[50%] bg-category text-[#52575C] px-4 py-2 flex items-center justify-between">
                  <div className='flex items-center space-x-4'>
                    <div className='h-[10px] w-[10px] bg-[#100DB1] rounded-full'></div>
                    <p className="text-[#100DB1]">{drug}</p>
                  </div>
                  
                  
                  <div className='inline-block cursor-pointer' onClick={()=>{setOpenView(!openView)}}>
                    <RxCross1 size={14} color="#C92B27"/>
                  </div>               
                </div>
              })
              }                       
            </div>
         
                                 
          <form action="" className='mt-5'>
            <div className=''>
              <div>
                <p className=" font-semibold text-textDark">Add Category</p>
                <div className='flex space-x-5 items-center'>
                  <input type="text" name="categoryName" id="categoryName" className="bg-white text-[#52575C] px-4 py-2" /> 
                  <div className='inline-block'>
                    <button className="flex items-center justify-center w-full text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">Add
                    </button>  
                  </div>              
                </div>

              </div>

            </div>
          </form>
        </div>          
        
    </div>
  </div>
  )
}

export default AddCategory