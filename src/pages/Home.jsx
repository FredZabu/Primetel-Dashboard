//import react from 'react';
import { DoughNutChart } from "../components/DoughnutChart";
import { BarGraph } from "../components/BarGraph";
import Table from "../components/Table";
import NavbarWithNotification from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import Layout from "./Layout";
import { FaUsers, FaFilePrescription, FaStar } from "react-icons/fa";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event){
        window.history.pushState(null, document.title,  window.location.href);
    });
  }, []);
  const { totalPatients, user } = useSelector((state) => {
    console.log("User State")
    console.log(state.auth.user)
    return { totalPatients: state.patients.totalPatients, user: state.auth.user }
  });
  const cardStats = [
    {
      title: "Total Patients",
      figure: totalPatients,
      percentageChange: -50,
      icon: <FaUsers size={30} />,
    },
    {
      title: "Total Appointments",
      figure: 300,
      percentageChange: 20,
      icon: <BsFillCalendar3WeekFill size={20} />,
    },
    {
      title: "Total Prescriptions",
      figure: 100,
      percentageChange: 10,
      icon: <FaFilePrescription size={25} />,
    },
    {
      title: "Ratings",
      figure: 3.9,
      percentageChange: -5,
      icon: <FaStar size={25} />,
    },
  ];
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100 px-6">
          <div className="my-4 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {cardStats.map((stat, index) => {
              return (
                <StatsCard
                  key={index}
                  title={stat.title}
                  figure={stat.figure}
                  percentageChange={stat.percentageChange}
                  icon={stat.icon}
                />
              );
            })}
            
          </div>
          <div className="bg-white border border-textDisable rounded-md py-4 px-8 h-full w-full">
            <BarGraph />
          </div>

          <div className=" mb-8 flex gap-16 flex-col md:flex-row justify-between mt-8 bg-white border border-textDisable rounded-md py-10 px-8 h-full w-full">
            <div className="w-full border border-textDisable/50 p-2 rounded-md">
              <Table />
            </div>
            <div className="w-80 border border-textDisable/50 p-2 rounded-md">
              <DoughNutChart />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

