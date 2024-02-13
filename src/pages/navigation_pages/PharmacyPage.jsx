import React from 'react'
 import { Link } from "react-router-dom";
 import Layout from '../Layout'
import NavbarWithNotification from '../../components/Navbar'
import {BsArrowLeftShort,} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import drug1 from "../../assets/images/drug1.png";
import drug2 from "../../assets/images/drug2.png";
import drug3 from "../../assets/images/drug3.png";
import drug4 from "../../assets/images/drug4.png";
function PharmacyPage() {
   const drugs = [
    {
       name: "Cephalosporins",
       image: drug1,
       description: "Green Capsules",
       price: "10mg, 20mg, 30mg",
       id: "2x234",
      
     },
    {
       name: "Fluoroquinolones",
       image: drug2,
       description: "White Tablets",
       price: "10mg, 20mg, 30mg",
       id: "2k234",
      
    },
    {
      name: "Paracetamol",
      image: drug3,
       description: "Colored Tablets",
       price: "500mg",
       id: "2z234",
      
     },
    {
      name: "Tetracyclines",
      image: drug4,
       description: "Blue Tablets",
       price: "100mg , 500mg",
       id: "3w234",
      
     },
    {
      name: "Metronidazole",
      image: drug1,
       description: "Orange and black Capsules",
       price: "300mg",
       id: "2s2d4",
      
     },
    {
      name: "Aminoglycosides",
      image: drug3,
       description: "Green Capsules",
       price: "100mg, 500mg",
       id: "2b234",
      
     },
      
   ]   
   return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder = "Search Labs by ID, or Name" />
         <main className="  overflow-x-hidden overflow-y-auto bg-white-100 ">
           
           <div className='flex justify-between px-6 items-center py-4 bg-navbg'>
             <div className='flex  space-x-6 items-center'>
               <Link to={`/pharmacies`}><BsArrowLeftShort size={40}  color='#06152B' /></Link>
              
               <p className='text-textDark'>ABC Pharmacy</p>
             </div>
             <div>
               <div className='flex space-x-2 items-center'><MdEmail size={20} color='#c92b27' /> <p className='text-textDark'>Pharmacy Email</p></div>
               <div className='flex space-x-2 items-center mt-2'><FaPhoneAlt size={20} color='#c92b27' /> <p className='text-textDark'>Pharmacy phoneNumber </p></div>
             </div>
           </div>
           <div className='grid gap-5 grid-cols-4 px-6 mt-5'>
             {drugs.map(({ name, image, description, price, id }) => {
               return <div key={id} className=' border-2 inline-flex py-2 flex-col items-center'>
                 <img src={image} alt=""  />
                 <p className='text-bold'>{name}</p>
                 <p className='text-gray-400'>{description}</p>
                 <p className='text-gray-400'>{price}</p>
                 <p className='text-gray-400'>Drug ID : {id }</p>
               </div>
             })}
           </div>
        </main>
      </div>           
    </Layout>
   )
 }
 
 export default PharmacyPage