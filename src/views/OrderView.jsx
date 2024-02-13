/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { GiMedicines } from "react-icons/gi";
import { FaPen } from "react-icons/fa";
function OrderView({ openView, setOpenView, data, funct }) {
 
  return (
  <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
    <div className='w-[50%] h-[90%] relative  rounded-md bg-[#F0F3F9]'>

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
             <p className="mt-5 font-semibold text-textDark">Drugs Ordered</p>         
         </div>
        <div className="mt-4 px-1 py-2 w-[75%] space-x-2 flex items-start justify-between bg-white">
            
            <div><GiMedicines size={24} color="#c92b27" /></div>
            <div className="flex-1">
              <p className="text-textDark">Amlodipine 5mg</p>
              <p className="text-textDark">One tablet three times for 5 days</p>
              <div className="flex justify-between text-[#52575C]">
                <p>ABC Pharmacy</p>
                <p>Updated 22/01/2024</p>
              </div>
            </div>
 
        </div>                
        <div className="mt-4 px-1 py-2 w-[75%] space-x-2 flex items-start justify-between bg-white">
            
            <div><GiMedicines size={24} color="#c92b27" /></div>
            <div className="flex-1">
              <p className="text-textDark">Omeprazole 20mg</p>
              <p className="text-textDark">One capsule daily before breakfast for 1 week</p>
              <div className="flex justify-between text-[#52575C]">
                <p>Medicare Health Pharmacy</p>
                <p>Updated 22/01/2024</p>
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
        <div>
            <p className="mt-5 font-semibold text-textDark">Update Delivery Status</p>
        </div>
        </div>          
        
    </div>
  </div>
  )
}

export default OrderView