
import  {useState} from 'react';
import NavbarWithNotification from "../../components/Navbar";
// import MiniNavBar from "../../components/MiniNavBar";
import Layout from "../Layout";
import OrderTable from "../../components/OrderTable";
// import MiniNavBar2 from '../../components/MiniNavBar2';

export default function orders() {
  const tableHeaders = [
      "Order_ID",
      "Doctor_Name",
      "Doctor_Contact",
      "Patient_Name",
      "Patient_Contact",
      "Date",
    ];
  const [tableData, setTableData] = useState([
    {
      Order_ID: "230x200",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Asiimwe Fred",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "pending",
      
    },
    {
      Order_ID: "230x300",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Kahwa Zabulon",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "delivered",
      
    },
    {
      Order_ID: "230x600",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Asiimwe Fred",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "missed",
      
    },
    {
      Order_ID: "230x700",
      Doctor_Name: "Leslie Alexander",
      Doctor_Contact: "0781936669",
      Patient_Name: "Asiimwe Fred",
      Patient_Contact: "0787953142",
      Date: "10/10/2020",
      Status: "delivered",
      
    }    
  ]);
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder="Search Orders by ID, Name"/>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100">
          <div className="container mx-auto px-6 py-8">
          
            <div className="mt-4">
              <OrderTable
                tableData={tableData}
                tableHeaders={tableHeaders}
                status={true}
                actions={true}
                funct="orders"
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
