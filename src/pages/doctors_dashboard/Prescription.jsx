//import react from 'react';
import NavbarWithNotification from "../../components/Navbar";
import MiniNavBar from "../../components/MiniNavBar";
import Layout from "./Layout";
import TableComponent from "../../components/TableComponent";


export default function Prescription() {

    const tableHeaders = [
      "ID",
      "Name",
      "Email",
      "Gender",
      "LastUpdated",
    ];
    const tableData = [
      {
        ID: "47380",
        Name: "Leslie Alexander",
        Email: "lesie.alexander@example.com",
        Gender: "Female",
        LastUpdated: "10/10/2020",
      },
      {
        ID: "48302",
        Name: "Ronald Richards",
        Email: "ronald.richards@example.com",
        Gender: "Male",
        LastUpdated: "10/10/2020",
      },
      {
        ID: "40284",
        Name: "Jane Cooper",
        Email: "jane.cooper@example.com",
        Gender: "Female",
        LastUpdated: "10/10/2020",
      },
      {
        ID: "032420",
        Name: "Robert Fox",
        Email: "robert.fox@gmail.com",
        Gender: "Male",
        LastUpdated: "10/10/2020",
      },
      {
        ID: "43784",
        Name: "Leslie Alexander",
        Email: "lesie.alexander@example.com",
        Gender: "Female",
        LastUpdated: "10/10/2020",
      },
      {
        ID: "62622",
        Name: "Ronald Richards",
        Email: "ronald.richards@example.com",
        Gender: "Male",
        LastUpdated: "10/10/2020",
      },
    ];

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder="Search Patient by ID, or Name"/>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100">
          <div className="container mx-auto px-6 py-8">
            <MiniNavBar
              buttonText={"Prescription"}
              modalType="create"
              funct="prescription"
            />
            <div className="mt-4">
              <TableComponent
                tableData={tableData}
                tableHeaders={tableHeaders}
                status={false}
                actions={true}
                funct = "Prescription"
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
