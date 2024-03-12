/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { FiPlus } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";


function AddCategoryItem({ openView, setOpenView, data, openDrug, setOpenDrug }) {
  return (
    <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
    <div className='w-[40%] h-[90%] overflow-y-scroll overflow-x-hidden relative  rounded-md bg-[#F0F3F9]'>

        <div className="sticky bg-[#F0F3F9] z-50 top-0  left-0 right-0">
          <div className=' w-[95%]  mx-auto py-4'>
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
          <hr className='mt-0 bg-slate-500' />
        <div className='flex justify-end w-[95%] mt-4  mx-auto'>
                  <div className='inline-block '>
                      
              <button onClick={() => {
                setOpenView(!openView)
                setOpenDrug(!openDrug)
              }} className="flex items-center justify-center w-full text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"><span className='inline-block bg-white mr-2 rounded-full text-black'><FiPlus size={18} /></span> Add Test
                    </button>  
            </div>       
        </div>        
        </div>


        <div className=' w-[95%] mt-4 mx-auto pb-4'>
            <div className=" ">
            {
              data.map(({name,description, price}, index) => {
                
                return <div key={index} className=" mt-5 min-w-[50%] border border-[#DDDDE8]  px-4 py-2 flex justify-between">
                  <div><ImLab size={18} color="#C92B27" /></div>
                  <div>
                    <p > <span className="text-[#52575C]">Name: </span> <span>{name}</span></p>
                    <p > <span className="text-[#52575C]">Charge: </span> <span>$20</span></p>
                    <p > <span className="text-[#52575C]">Description: </span> <span>{description}</span></p>
                    <p > <span className="text-[#52575C]">Duration: </span> <span>12hrs</span></p>
                    <p > <span className="text-[#52575C]">Availability: </span> <span>{name}</span></p>
                    <p className='mt-2'> <span className="text-[#52575C]">Created: </span> <span>02/01/2024</span></p>
                  </div>
                  <div className='flex flex-col justify-between items-end'>
                    <div className='flex space-x-2'>
                      <span><RiDeleteBin6Fill size={18} color="#C92B27"/></span>
                      <span><FaPencilAlt size={18} color="#C92B27"/></span>                  
                    </div>
                    <div>
                      <span className='text-[#52575C]'>Updated </span>21/02/2024<span></span>
                    </div>
                  </div>
                  
                      
                </div>
              })
              }                       
            </div>
         
        </div>          
        
    </div>
  </div>
  )
}

export default AddCategoryItem;