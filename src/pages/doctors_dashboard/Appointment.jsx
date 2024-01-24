import  {useState} from 'react';
import NavbarWithNotification from "../../components/Navbar";
import MiniNavBar from "../../components/MiniNavBar";
import Layout from "./Layout";
import TableComponent from "../../components/TableComponent";
import MiniNavBar2 from '../../components/MiniNavBar2';

export default function Appointment() {
    const tableHeaders = [
      "Name",
      "Email",
      "MeetingDate",
      "MeetingTime",
      "PhoneNumber",
    ];
    const [tableData, setTableData]  = useState([
      {
        Name: "Leslie Alexander",
        Email: "lesie.alexander@example.com",
        MeetingDate: "10/10/2020",
        MeetingTime: "09:15-09:45am",
        PhoneNumber: "0787953142",
        Status: "Upcoming",
      },
      {
        Name: "Ronald Richards",
        Email: "ronald.richards@example.com",
        MeetingDate: "10/10/2020",
        MeetingTime: "12:00-12:45pm",
        PhoneNumber: "0787953142",
        Status: "Missed",
      },
      {
        Name: "Jane Cooper",
        Email: "jane.cooper@example.com",
        MeetingDate: "10/13/2020",
        MeetingTime: "01:15-01:45pm",
        PhoneNumber: "0787953142",
        Status: "Past",
      },
      {
        Name: "Robert Fox",
        Email: "robert.fox@gmail.com",
        MeetingDate: "10/14/2020",
        MeetingTime: "02:00-02:4pm",
        PhoneNumber: "0787953142",
        Status: "Missed",
      },
      {
        Name: "Leslie Alexander",
        Email: "lesie.alexander@example.com",
        MeetingDate: "10/10/2020",
        MeetingTime: "09:15-09:45am",
        PhoneNumber: "0787953142",
        Status: "Upcoming",
      },
      {
        Name: "Ronald Richards",
        Email: "ronald.richards@example.com",
        MeetingDate: "10/10/2020",
        MeetingTime: "12:00-12:45pm",
        PhoneNumber: "0787953142",
        Status: "Missed",
      },
      
    ]);
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder="Search Patient by ID, or Name"/>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100">
          <div className="container mx-auto px-6 py-8">
            <MiniNavBar buttonText={"Appointment"} modalType="create" setTableData = {setTableData} tableData = {tableData} funct="appointment"/>
            <div className="mt-4">
              <TableComponent
                tableData={tableData}
                tableHeaders={tableHeaders}
                status={true}
                actions={true}
                funct="Appointment"
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
