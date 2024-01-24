/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";

function PatientView({openView, setOpenView, data, funct}) {
  return (
<div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
      <div className='w-[50%] h-[90%] rounded-md bg-white'>
        <div className=' w-[95%] mt-4 mx-auto '>
          <div className='flex justify-between items-center  '>
            <h1 className='font-bold text-xl'>View { funct}</h1>
            <div className='inline-block cursor-pointer' onClick={()=>{setOpenView(!openView)}}>
              <RxCross1 size={20} />
            </div>            
          </div>
        <p className='mt-2'>Make Sure the Patient is added before trying to book an appointment with them.</p>          
        </div>


        <hr className='mt-5 bg-slate-500' />

        <div className=' w-[95%] mt-4 mx-auto '>
      
        </div>        

      </div>
    </div>
  )
}

export default PatientView