/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";

function PatientView({ openView, setOpenView, data, funct }) {
  const meetings = [{
    date: "20/01/2024",
    time: "12:00 - 12:30 pm"
  },
  {
    date: "21/12/2023",
      time: "12:00 - 12:30 pm"
    },
  {
    date: "2/04/2024",
      time: "12:00 - 12:30 pm"
    },
  {
    date: "20/01/2022",
      time: "12:00 - 12:30 pm"
    },
  {
    date: "20/01/2021",
      time: "12:00 - 12:30 pm"
    },
  {
    date: "20/01/2023",
  time: "12:00 - 12:30 pm"}]
  const currentDate = new Date();
  return (
<div className='grid place-items-center h-[100vh] top-0 left-0 right-0 z-[999] bg-[rgba(0,0,0,0.2)] absolute'>
      <div className='w-[50%] h-[90%] rounded-md bg-[#F0F3F9]'>
        <div className=' w-[95%] mt-4 mx-auto '>
          <div className='flex justify-between items-center  '>
            <h1 className='font-bold text-xl'>View { funct}</h1>
            <div className='inline-block cursor-pointer' onClick={()=>{setOpenView(!openView)}}>
              <RxCross1 size={20} />
            </div>            
          </div>      
        </div>


        <hr className='mt-5 bg-slate-500' />

        <div className=' w-[95%] mt-4 mx-auto '>
          <div className="">
            <p className="text-lg font-semibold text-textDark">Name</p>
            <p className="bg-white px-4 py-2">Asiimwe Fred</p>
          </div> 
          <div className="flex justify-between space-x-5 mt-3">
            <div className="flex-1">
            <p className="text-lg font-semibold text-textDark">Phone Number</p>
            <p className="bg-white px-4 py-2">+256781936669</p>
            </div> 
            <div className=" flex-1">
            <p className="text-lg font-semibold text-textDark">Gender</p>
            <p className="bg-white px-4 py-2">Male</p>
            </div>           
          </div>
          <div className="mt-3">
            <p className="text-lg font-semibold text-textDark">Email</p>
            <p className="bg-white px-4 py-2">fredasiimwe133@gmail.com</p>
          </div>    

        </div>   
        
        <hr className='mt-5 bg-slate-500' />
        <div className=' w-[95%] mt-4 mx-auto '>
          <div className="flex items-center space-x-4">
            <p className="text-textDark">Upcoming and Past Meetings</p>  
            <div className="space-x-2">
              <div className="px-2 py-[2px] space-x-2 inline-flex items-center bg-upcoming rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#2FE5A7] inline-block"> </span>
              <span className="">Upcoming</span>
            </div>

            <div className="px-2 py-[2px] space-x-2 inline-flex items-center bg-past rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF7E07] inline-block"> </span>
              <span className="">Past</span>
            </div>

            <div className="px-2 py-[2px] space-x-2 inline-flex items-center bg-missed rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#C92B27] inline-block"> </span>
              <span className="">Missed</span>
            </div>           
            </div>

          </div>   
          <div className="grid grid-cols-2 gap-4 mt-4">
            {meetings.map(({ date, time }, index) => {
              
              let dateArray = date.split("/");
              let newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
              const inputDate = new Date(newDate); 
              if (inputDate < currentDate) {
            return <div key={index} className="px-2 py-[2px] space-x-2 inline-flex items-center bg-past rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF7E07] inline-block"> </span>
              <span className="">{date} { time}</span>
            </div>             
              } else {
                  return <div key={index} className="px-2 py-[2px] space-x-2 flex items-center bg-upcoming rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#2FE5A7] inline-block"> </span>
                  <span className="">{date} { time}</span>
            </div>              
              }

              })}
          </div>        
        </div>

      </div>
    </div>
  )
}

export default PatientView