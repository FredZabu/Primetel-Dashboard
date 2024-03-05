
import  {useState} from 'react';
import NavbarWithNotification from "../../components/Navbar";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import AddCategory from './model/AddCategory';
import Layout from "../Layout";
import drug1 from "../../assets/images/drug1.png";
import drug2 from "../../assets/images/drug2.png";
import drug3 from "../../assets/images/drug3.png";
import drug4 from "../../assets/images/drug4.png";


export default function drugs() {
  
  const [dropDown, setDropDown] = useState(false);
  const [viewCategory, setViewCategory] = useState(true);
  const drugCategory = [
    "Allergies",
    "Anti-biotics",
    "Fungal",
    "Paracetamol"
  ]
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
     // 
    {
       name: "Cephalosporins",
       image: drug1,
       description: "Green Capsules",
       price: "10mg, 20mg, 30mg",
       id: "3x234",
      
     },
    {
       name: "Fluoroquinolones",
       image: drug2,
       description: "White Tablets",
       price: "10mg, 20mg, 30mg",
       id: "3k234",
      
    },
    {
      name: "Paracetamol",
      image: drug3,
       description: "Colored Tablets",
       price: "500mg",
       id: "3z234",
      
     },
    {
      name: "Tetracyclines",
      image: drug4,
       description: "Blue Tablets",
       price: "100mg , 500mg",
       id: "4w234",
      
     },
    {
      name: "Metronidazole",
      image: drug1,
       description: "Orange and black Capsules",
       price: "300mg",
       id: "3s2d4",
      
     },
    {
      name: "Aminoglycosides",
      image: drug3,
       description: "Green Capsules",
       price: "100mg, 500mg",
       id: "3b234",
      
     },
      
   ] 
 
  return (
    <Layout >
      <div className="flex flex-col no-scrollbar w-full h-[100vh]">
        <NavbarWithNotification placeholder="Search Orders by ID, Name" />
        <div className="border-b border-b-textDisable px-6 py-5 relative no-scrollbar  w-[100%]">

          <div className="flex justify-between">
              <div>
                <button onClick={()=>{setViewCategory(!viewCategory)}}  className="flex items-center justify-center w-full text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">
                  <FaPencilAlt className="w-5 h-5 mr-2"  />
                Edit Categories
               </button>              
              </div>

              <div>
                <button  className="flex items-center justify-center w-full  border border-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-primary text-sm px-4 py-2">
                <FaPencilAlt className="w-5 h-5 mr-2" />
                Edit Category Items
               </button>              
              </div>
            </div>
            <div className="inline-block mt-4 no-scrollbar relative overscroll-y-none ">
              <button  className="inline-flex items-center justify-center w-full  border border-primary hover:bg-primary/50  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-primary hover:text-white text-sm px-4 py-2" onClick={()=>{setDropDown(!dropDown)}}>
                <MdOutlineFilterAlt className="w-5 h-5 mr-2 " />
                Anti-biotics
                <RiArrowDropDownLine className="w-5 h-5 ml-2 "/>
              </button>   
              <div className={` ${dropDown ? 'block' : 'hidden'} absolute  w-[50vw] bg-white min-h-[200px] border-2 border-black z-[1000] top-[100%] mt-1`}>
           
              </div>
            </div> 
            
        </div>
        <main className="flex-1 overflow-x-hidden   bg-white-100">
          <div className="container mx-auto px-6 py-8   overflow-y-auto">
            <div className='grid gap-5 grid-cols-4  mt-4'>
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
          </div>
        </main>
      </div>
      { viewCategory ? <AddCategory openView={viewCategory} setOpenView={setViewCategory} data={drugCategory}  /> : '' }
    </Layout>
  );
}
