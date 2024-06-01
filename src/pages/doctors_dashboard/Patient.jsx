import { useState, useEffect } from "react";
import NavbarWithNotification from "../../components/Navbar";
import MiniNavBar from "../../components/MiniNavBar";
import { toast } from "react-hot-toast";
import Layout from "../Layout";
import TableComponent from "../../components/TableComponent";
import {useGetPatientsQuery} from "../../store/index.js"
import { useSelector } from "react-redux";

export default function Patient() {
    const tableHeaders = [
      "name",
      "gender",
      "email",
      "phoneNumber",
      "date",
      
    ];
  const { data, error, isLoading,isError,isSuccess } = useGetPatientsQuery();

  const [dataTable, setDataTable] = useState([])
  const user = JSON.parse(sessionStorage.getItem("user") || '{}')
  const handleTestRequest = async () => {
    
    const response = await fetch("/api/v1/patients", { headers:{Authorization: ` ${user.token}`} })
    console.log("Start");
    console.log(response);
    console.log("End");
  }
  useEffect(() => {

    handleTestRequest();

    if (isSuccess) {
      setDataTable(data)
    }
    if (isError) {
    console.log(error);
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
                tableData={dataTable}
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
