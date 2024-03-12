//import react from 'react';
import NavbarWithNotification from "../../components/Navbar";
import MiniNavBar from "../../components/MiniNavBar";
import Layout from "../Layout";
import TableComponent from "../../components/TableComponent";
import { useSelector } from "react-redux";

export default function Patient() {
    const tableHeaders = [
      "Name",
      "Gender",
      "Email",
      "PhoneNumber",
      "Date",
      
    ];
  const tableData = useSelector((state) => {
    console.log(state.patients.data);
    return state.patients.data.filter((patient) => {
      console.log("Patient "+ patient.Name);
     return patient.Name.toLowerCase().includes(state.searchTerm.search.toLowerCase())
    });
  }) ;
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

            <div className="mt-4">
              <TableComponent
                tableData={tableData}
                tableHeaders={tableHeaders}
                status={false}
                actions={true}
                funct = "Patient"
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
