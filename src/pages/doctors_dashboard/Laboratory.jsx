
import NavbarWithNotification from "../../components/Navbar";
import PharmacyCard from "../../components/PharmacyCard"; // Import your PharmacyCard component
import Layout from "./Layout";
import { FaMedkit, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import LaboratoryCard from "../../components/LaboratoryCard";

export default function Laboratory() {
  const laboratory = [
    {
      id: 1,
      name: "ABC Laboratory",
      labId: "12345",
    },
    {
      id: 2,
      name: "Qc Laboratory",
      labId: "67890",
    },
    {
      id: 3,
      name: "Mulago Laboratory",
      labId: "54321",
    },
    {
      id: 4,
      name: "HealthFirst",
      labId: "98765",
    },
    {
      id: 5,
      name: "MedsRUs",
      labId: "24680",
    },
    {
      id: 6,
      name: "QuickRx",
      labId: "13579",
    },
    {
      id: 7,
      name: "PharmaPlus",
      labId: "86420",
    },
    {
      id: 8,
      name: "MediCare",
      labId: "11223",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <NavbarWithNotification placeholder="Search Laboratory by ID, or Name" />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100 px-6">
          <p className="text-textDark mt-5 font-bold text-xl tracking-wide ">View Laboratories</p>
          <div className="my-4 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {laboratory.map((laboratory) => (
              <LaboratoryCard
                key={laboratory.id}
                name={laboratory.name}
                labId={laboratory.labId}
              />
                
              
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
