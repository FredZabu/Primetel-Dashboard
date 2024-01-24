/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { GiMedicines } from "react-icons/gi";
import { FaEdit, FaEye } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdDownload } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
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
      <div className='w-[50%] h-[90%] relative overflow-y-scroll rounded-md bg-[#F0F3F9]'>

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

        {/* Patient Detail section */}
        <hr className='mt-5 bg-slate-500' />

        <div className=' w-[95%] mt-4 mx-auto '>
          <div className="">
            <p className=" font-semibold text-textDark">Name</p>
            <p className="bg-white text-[#52575C] px-4 py-2">Asiimwe Fred</p>
          </div> 
          <div className="flex justify-between space-x-5 mt-3">
            <div className="flex-1">
            <p className=" font-semibold text-textDark">Phone Number</p>
            <p className="bg-white text-[#52575C] px-4 py-2">+256781936669</p>
            </div> 
            <div className=" flex-1">
            <p className=" font-semibold text-textDark">Gender</p>
            <p className="bg-white text-[#52575C] px-4 py-2">Male</p>
            </div>           
          </div>
          <div className="mt-3">
            <p className=" font-semibold text-textDark">Email</p>
            <p className="bg-white text-[#52575C] px-4 py-2">fredasiimwe133@gmail.com</p>
          </div>    

        </div>   
        {/* Appointment section */}
        <hr className='mt-5 bg-slate-500' />

        <div className=' w-[95%] mt-4 mx-auto '>
          <div className="flex items-center space-x-4">
            <p className="text-textDark font-semibold">Upcoming and Past Meetings</p>  
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
          
          <div className="mt-5">
            <p className="text-textDark font-semibold">Condition/Notes</p>
          <p className="px-5 text-[#52575C] py-2 bg-white  font-semibold"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quo nihil ipsam, voluptates repellat ab perspiciatis nemo doloribus numquam ex, eaque modi. Quae, quo error? Similique iure voluptatum illo amet. </p>            
          </div>
        </div>

        {/* Prescription section */}
        <hr className='mt-5 bg-slate-500' />
        
        <div className=' w-[95%] mt-4 mx-auto '>
          <div className="flex justify-between">
            <p className="text-textDark font-semibold">Prescription</p>
            <p className="text-primary font-semibold cursor-pointer">Add Prescription</p>
          </div>
          <div className="mt-4 w-[60%] flex items-center justify-between ">
            <span className="flex items-center space-x-4"><GiMedicines size={18} color="#c92b27" /> <span>Amoxicillin 500mg one tablet three times...</span>  </span>
            <FaEye size={18} color="#0B8A00" className="cursor-pointer" />
          </div>
          <div className="mt-4 w-[60%] flex items-center justify-between ">
            <span className="flex items-center space-x-4"><GiMedicines size={18} color="#c92b27" /> <span> Amlodipine 5mg, take one tablet daily...</span>  </span>
            <FaEye size={18} color="#0B8A00" className="cursor-pointer" />
          </div>          
        </div>

        {/* Laboratory Test section */}
        <hr className='mt-5 bg-slate-500' />
        
        <div className=' w-[95%] mt-4 mx-auto '>
            <div className="flex justify-between">
            <p className="text-textDark font-semibold">Laboratory Tests</p>
            <p className="text-primary font-semibold cursor-pointer">Add Test</p>
          </div>
          <div className="mt-4 w-[60%] flex items-center justify-between ">
            <span className="flex items-center space-x-4"><ImLab size={18} color="#c92b27" /> <span>Jomo Labs -Liver Function Tests</span>  </span>
            <FaEye size={18} color="#0B8A00" className="cursor-pointer" />
          </div>
          <div className="mt-4 w-[60%] flex items-center justify-between ">
            <span className="flex items-center space-x-4"><ImLab size={18} color="#c92b27" /> <span> Pfizer Labs - Urinalysis</span>  </span>
            <FaEye size={18} color="#0B8A00" className="cursor-pointer" />
          </div>  
        </div>     
        
        {/* Available Test section */}
        <hr className='mt-5 bg-slate-500' />
        
        <div className=' w-[95%] mt-4 mx-auto mb-5'>
            <div className="">
            <p className="text-textDark font-semibold">Available Laboratory Tests Results</p>
            
          </div>
          <div className="mt-4 w-[60%] flex items-center justify-between ">
            <span className="flex items-center space-x-4"><FaFile size={18} color="#c92b27" /> <span>Lancet Labs - CBC</span>  </span>
            <IoMdDownload size={18} color="#0B8A00" className="cursor-pointer" />
          </div>
          <div className="mt-4 w-[60%] flex items-center justify-between ">
            <span className="flex items-center space-x-4"><FaFile size={18} color="#c92b27" /> <span> Lancet Labs - CBC</span>  </span>
            <IoMdDownload size={18} color="#0B8A00" className="cursor-pointer" />
          </div> 
        </div>        
      </div>
    </div>
  )
}

export default PatientView