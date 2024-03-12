/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { ImLab } from "react-icons/im";

function ViewOrder({ openView, setOpenView, data, funct }) {
 
  return (
  <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
    <div className='w-[50%] h-[95%] pb-5 overflow-y-scroll relative  rounded-md bg-[#F0F3F9]'>

        <div className="sticky bg-[#F0F3F9] z-50 top-0 py-4 left-0 right-0">
          <div className=' w-[95%]  mx-auto '>
          <div className='flex justify-between items-center  '>
            <h1 className='font-bold text-xl'>View { funct}</h1>
            <div className='inline-block cursor-pointer' onClick={()=>{setOpenView(!openView)}}>
              <RxCross1 size={20} />
            </div>            
          </div>      
          </div>      
        </div>

        <hr className='mt-0 bg-slate-500' />
        <div className=' w-[95%] mt-4 mx-auto '>
            <div className="flex justify-between space-x-10">
                <div className=" flex-1">
                  <p className=" font-semibold text-textDark">Patient</p>
                  <p className="bg-white text-[#52575C] px-4 py-2">Asiimwe Fred</p>
                      </div>   
                <div className="flex-1">
                  <p className=" font-semibold text-textDark">Patient Contact</p>
                  <p className="bg-white text-[#52575C] px-4 py-2">0781936669</p>
                </div>                        
            </div>
            <div className="flex justify-between mt-5 space-x-10">
                <div className=" flex-1">
                  <p className=" font-semibold text-textDark">Doctor</p>
                  <p className="bg-white text-[#52575C] px-4 py-2">Dr. Samuel Mukisa</p>
                      </div>   
                <div className="flex-1">
                  <p className=" font-semibold text-textDark">Doctor Contact</p>
                  <p className="bg-white text-[#52575C] px-4 py-2">0781932000</p>
                </div>                        
            </div> 
            <div className="flex justify-between mt-5 space-x-10">
                <div className=" flex-1">
                  <p className=" font-semibold text-textDark">Order Date</p>
                  <p className="bg-white text-[#52575C] px-4 py-2">12/02/2024</p>
                      </div>   
                <div className="flex-1">
                  <p className=" font-semibold text-textDark">Delivery Date</p>
                  <p className="bg-white text-[#52575C] px-4 py-2">15/02/2024</p>
                </div>                        
            </div>                       

        <div>
             <p className="mt-5 font-semibold text-textDark">Tests Ordered</p>         
         </div>
        <div className="mt-4 px-1 py-2 w-[75%] space-x-2 flex items-start justify-between bg-white">
            
            <div><ImLab size={24} color="#c92b27" /></div>
            <div className="flex-1">
              <p className="text-textDark">Comprehensive Metabolic Panel (CMP)</p>
              <p className="text-[#52575C]">Collect sample without injecting patient. Possible haemorrhage</p>
              <p className="text-textDark my-2">Lancet Laboratories</p>
              <div className="flex justify-between text-[#52575C]">
                <p> <span>Created: </span> <span className="text-textDark">22/01/2024</span></p>
                <p> <span>Updated: </span> <span className="text-textDark">22/01/2024</span></p>
              </div>
            </div>
 
        </div>                
        <div className="mt-4 px-1 py-2 w-[75%] space-x-2 flex items-start justify-between bg-white">
            
            <div><ImLab size={24} color="#c92b27" /></div>
            <div className="flex-1">
              <p className="text-textDark">Comprehensive Metabolic Panel (CMP)</p>
              <p className="text-[#52575C]">Collect sample without injecting patient. Possible haemorrhage</p>
              <p className="text-textDark my-2">Lancet Laboratories</p>
              <div className="flex justify-between text-[#52575C]">
                <p> <span>Created: </span> <span className="text-textDark">22/01/2024</span></p>
                <p> <span>Updated: </span> <span className="text-textDark">22/01/2024</span></p>
              </div>
            </div>

        </div> 
        <div>
            <p className="mt-5 font-semibold text-textDark">Delivery status</p>
            <div className="px-2 py-[2px] space-x-2 inline-flex items-center bg-past rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF7E07] inline-block"> </span>
              <span className="">pending</span>
            </div>
        </div>
        <div className="mt-5">
          <div >
            <p className=" font-semibold text-textDark">Update Delivery Status</p>
            <div className='flex space-x-5 items-center'>
              <select id="countries" className="bg-gray-50 border border-gray-500 text-[#52575C] text-[16px]  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Select Delivery Status</option>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Missed">Missed</option>
              </select>       
            </div>
          </div>
          </div>

          <div className='mt-5 grid place-items-center'>
            <div className='inline-block'>
                <button className="flex items-center justify-center w-full text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-2 text-[18px]">Save
                </button>  
            </div>                
          </div> 
          
        </div>          
        
    </div>
  </div>
  )
}

export default ViewOrder