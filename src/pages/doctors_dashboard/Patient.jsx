import { useState, useEffect } from "react";
import NavbarWithNotification from "../../components/Navbar";
import MiniNavBar from "../../components/MiniNavBar";
import { toast } from "react-hot-toast";
import Layout from "../Layout";
import TableComponent from "../../components/TableComponent";
import {useGetPatientsQuery} from "../../store/index.js"
import getAccessToken from "../../store/api/getAccessToken.js";
export default function Patient() {
    // const tableHeaders = [
    //   "name",
    //   "gender",
    //   "email",
    //   "phoneNumber",
    //   "date",
      
    // ];
    const tableHeaders = [
      "first_name",
      "gender",
      "email",
      "phone_number",
      "created_at",
      
    ];  
    const token = getAccessToken()
    const { data, error, isLoading,isError,isSuccess } = useGetPatientsQuery(token);

    const [dataTable, setDataTable] = useState([])

  useEffect(() => {
    if (isSuccess) {
      console.log("Data Below")
      console.log(data.data)
      setDataTable(data)
      console.log(dataTable);
      toast.success("Success")
    }
    if (isError) {
      console.error('Error object:', error);
    if (error.data) {
      console.error('Error data:', error.data);
    }
  
      toast.error(error.data, {
        style: {
          background: 'red',
          color: 'white',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#000',
        },
      });
    }
  }, [isError, isSuccess])

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder="Search Patient by ID, or Name" />
        <div className="px-6 mt-5">
            <MiniNavBar
              buttonText={"Patient"}
              modalType="create"
              funct="patient"
            />
        </div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100">
          <div className="container mx-auto px-6 py-8">
            {
              isLoading ? <div>Loading</div> :             <div className="mt-4">
              <TableComponent
                tableData={isSuccess ? data.data : []}
                tableHeaders={tableHeaders}
                status={false}
                actions={true}
                funct = "Patient"
              />
              </div>
              
            }
          
          </div>
        </main>
      </div>
    </Layout>
  );
}
