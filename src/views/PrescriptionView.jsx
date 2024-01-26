/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { GiMedicines } from "react-icons/gi";
import { FaPen } from "react-icons/fa";
function PrescriptionView({ openView, setOpenView, data, funct }) {
 
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
          <div className="">
            <p className=" font-semibold text-textDark">Patient</p>
            <p className="bg-white text-[#52575C] px-4 py-2">Asiimwe Fred</p>
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
            <div className="flex space-x-4 mt-2 items-start">
              <FaPen color="#FF7E07" size={20} className="cursor-pointer" />
              <span className="bg-[#2FE5A7] rounded-md p-1 cursor-pointer">
                <RxCross1 color="white" size={18} />
              </span>
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
            <div className="flex space-x-4 mt-2 items-start">
              <FaPen color="#FF7E07" size={20} className="cursor-pointer" />
              <span className="bg-[#2FE5A7] rounded-md p-1 cursor-pointer">
                <RxCross1 color="white" size={18} />
              </span>
            </div>
          </div> 
        </div>          
        
    </div>
  </div>
  )
}

export default PrescriptionView