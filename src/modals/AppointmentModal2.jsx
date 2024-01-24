/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Select from 'react-select'

function AppointmentModal2({ openModal, setOpenModal, funct, setTableData, tableData }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    console.log("The value selected is :" + selectedOption.value);
    showIt();
  }
  
  
  const options = [
    { value: "Fred Asiimwe", label: "Fred Asiimwe id: 001" },
    { value: "Kahwa Zabulon", label: "Kahwa Zabulon id: 002" },
    {value: "Daphine", label: "Daphine id: 005"}
  ]
  return (
    <div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
      <div className='w-[50%] h-[90%] rounded-md bg-white'>
        <div className=' w-[95%] mt-4 mx-auto '>
          <div className='flex justify-between items-center  '>
            <h1 className='font-bold text-xl'>Create Appointment</h1>
            <div className='inline-block cursor-pointer' onClick={()=>{setOpenModal(!openModal)}}>
              <RxCross1 size={20} />
            </div>            
          </div>
        <p className='mt-2'>Make Sure the Patient is added before trying to book an appointment with them.</p>          
        </div>


        <hr className='mt-5 bg-slate-500' />

        <div className=' w-[95%] mt-4 mx-auto '>
          <form action="">
            <label  className="text-sm text-black text-[15px]">
             Name
            </label>
            <Select
              options={options}
              value={selectedOption}
              onChange={handleChange}
            />

            <label  className="text-sm text-black text-[15px]">
             Date
            </label>            
        </form>
        </div>        

      </div>
    </div>
  )
}

export default AppointmentModal2