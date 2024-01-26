/* eslint-disable react/prop-types */
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

function AppointmentEditModal(props) {
  const { openModal, setOpenModal, funct, data } = props;
  const [editedData, setEditedData] = useState({ date: "", time: "" });
  const { Name, MeetingDate, MeetingTime, PhoneNumber, Status } = data;
  console.log(data);
  return (
  <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
    <div className='w-[50%] h-[70%] relative  rounded-md bg-[#F0F3F9]'>

        <div className="sticky bg-[#F0F3F9] z-50 top-0 py-4 left-0 right-0">
          <div className=' w-[95%]  mx-auto '>
          <div className='flex justify-between items-center  '>
            <h1 className='font-bold text-xl'>Edit { funct}</h1>
            <div className='inline-block cursor-pointer' onClick={()=>{setOpenModal(!openModal)}}>
              <RxCross1 size={20} />
            </div>            
          </div>      
          </div>      
        </div>

        <hr className='mt-0 bg-slate-500' />
        <div className=' w-[95%] mt-4 mx-auto '>
          <div className="">
            <p className=" font-semibold text-textDark">Patient</p>
            <p className="bg-white text-[#52575C] px-4 py-2">{Name}</p>
          </div> 

          <form action="">
            <div className="flex justify-between space-x-5 mt-3">
              <div className="flex-1">
              <p className=" font-semibold text-textDark">Date</p>
                
                <input type="text" value={MeetingDate} name="" id="" className="bg-white text-[#52575C] px-4 py-2 customInput" />
              </div> 

              <div className=" flex-1">
              <p className=" font-semibold text-textDark">Time</p>
                
              <input type="text" value={MeetingTime} name="" id="" className="bg-white text-[#52575C] px-4 py-2 customInput " />            
              </div>           
            </div>          
          </form>
          <div className="mt-3">
            <p className=" font-semibold text-textDark">Status</p>
            <p className="bg-white text-[#52575C] px-4 py-2">{Status}</p>
          </div>    
          <div className="mt-5">
            <p className="text-textDark font-semibold">Notes</p>
          <p className="px-5 text-[#52575C] py-2 bg-white  font-semibold"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quo nihil ipsam, voluptates repellat ab perspiciatis nemo doloribus numquam ex, eaque modi. Quae, quo error? Similique iure voluptatum illo amet. </p>            
          </div>

          <div className=" mt-5 grid place-items-center">
            <button type="submit" className="px-4 py-1 rounded-lg text-lg font-semibold bg-primary border border-primary mx-auto hover:bg-white hover:text-primary text-white">Save</button>
          </div>
        </div>          
        
    </div>
  </div>
  )
}

export default AppointmentEditModal