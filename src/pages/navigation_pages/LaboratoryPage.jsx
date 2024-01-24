 import React from 'react'
 import Layout from '../doctors_dashboard/Layout'
import NavbarWithNotification from '../../components/Navbar'
import {BsArrowLeftShort,} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import cmpImage from "../../assets/images/cmp.png";
import { Link } from 'react-router-dom';
function LaboratoryPage() {
   const tests = [
    {
       name: "CBC",
       description: "Complete blood count",
       price: "$10",
       id: "2x234",
      
     },
    {
       name: "Malaria",
       description: "Complete blood count",
       price: "$10",
       id: "2k234",
      
    },
    {
       name: "HIV",
       description: "Complete blood count",
       price: "$10",
       id: "2z234",
      
     },
    {
       name: "BT",
       description: "Complete blood count",
       price: "$30",
       id: "3w234",
      
     },
    {
       name: "CMM",
       description: "Complete blood count",
       price: "$20",
       id: "2s2d4",
      
     },
    {
       name: "CBB",
       description: "Complete blood count",
       price: "$10",
       id: "2b234",
      
     },
    {
       name: "CMP",
       description: "Complete blood count",
       price: "$10",
       id: "2a234",
      
    }    
   ]
   return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder = "Search Labs by ID, or Name" />
        <main className="  overflow-x-hidden overflow-y-auto bg-white-100 ">
           <div className='flex justify-between px-6 items-center py-4 bg-navbg'>
             <div className='flex  space-x-6 items-center'>
               <Link to="/laboratories"><BsArrowLeftShort size={40}  color='#06152B' /></Link>
              
               <p className='text-textDark'>Laboratory Name</p>
             </div>
             <div>
               <div className='flex space-x-2 items-center'><MdEmail size={20} color='#c92b27' /> <p className='text-textDark'>Laboratory Email</p></div>
               <div className='flex space-x-2 items-center mt-2'><FaPhoneAlt size={20} color='#c92b27' /> <p className='text-textDark'>Laboratory PhoneNumber</p></div>
             </div>
           </div>
           <div className='grid gap-5 grid-cols-4 px-6 mt-5'>
             {tests.map(({ name, description, price, id }) => {
               return <div key={id} className=' border-2 inline-flex py-2 flex-col items-center'>
                 <img src={cmpImage} alt=""  />
                 <p className='text-bold'>{name}</p>
                 <p className='text-gray-400'>{description}</p>
                 <p className='text-gray-400'>{price}</p>
                 <p className='text-gray-400'>Test ID : ${id }</p>
               </div>
             })}
           </div>
        </main>
      </div>           
    </Layout>
   )
 }
 
 export default LaboratoryPage