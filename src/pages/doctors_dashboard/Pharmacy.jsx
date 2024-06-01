import React from "react";
import NavbarWithNotification from "../../components/Navbar";
import PharmacyCard from "../../components/PharmacyCard"; // Import your PharmacyCard component
import Layout from "../Layout";
import { FaMedkit, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { useEffect } from "react";
export default function Pharmacy() {
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event){
        window.history.pushState(null, document.title,  window.location.href);
    });
  },[])
  const pharmacies = [
    {
      id: 1,
      name: "ABC Pharmacy",
      storeId: "12345",
    },
    {
      id: 2,
      name: "XYZ Pharmacy",
      storeId: "67890",
    },
    {
      id: 3,
      name: "PharmaCorp",
      storeId: "54321",
    },
    {
      id: 4,
      name: "HealthFirst",
      storeId: "98765",
    },
    {
      id: 5,
      name: "MedsRUs",
      storeId: "24680",
    },
    {
      id: 6,
      name: "QuickRx",
      storeId: "13579",
    },
    {
      id: 7,
      name: "PharmaPlus",
      storeId: "86420",
    },
    {
      id: 8,
      name: "MediCare",
      storeId: "11223",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder="Search Pharmacy by ID, or Name" />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100 px-6">
          <p className="text-textDark mt-5 font-bold text-xl tracking-wide ">View Pharmacies</p>          
          <div className="my-4 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {pharmacies.map((pharmacy) => (
              <PharmacyCard
                key={pharmacy.id}
                name={pharmacy.name}
                storeId={pharmacy.storeId}
              >
                {/* Link to a pharmacy details page */}
                {/* <Link to={`/pharmacy/${pharmacy.id}`}>
                  <FaArrowRight />
                  Read More
                </Link> */}
              </PharmacyCard>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
