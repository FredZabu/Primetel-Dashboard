//import react from 'react';
import NavbarWithNotification from "../../components/Navbar";
import MiniNavBar from "../../components/MiniNavBar";
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
  const { data, error, isLoading } = useGetPatientsQuery();
  console.log(data);

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
              isLoading? <div>Loading</div> :             <div className="mt-4">
              <TableComponent
                tableData={data}
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
