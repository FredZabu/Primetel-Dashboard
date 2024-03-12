import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillCalendar3WeekFill, BsPeopleFill } from "react-icons/bs";
import { FaFilePrescription, FaPills, FaCartPlus } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { CiPillsBottle1 } from "react-icons/ci";
import { ImLab } from "react-icons/im";


const Layout = ({ children }) => {
  const doctorsMenuItems = [
    { title: "Dashboard", icon: <BiSolidDashboard size={23} />, link: "/dashboard",role: "default" },
    {
      title: "Appointments",
      icon: <BsFillCalendar3WeekFill size={23} />,
      link: "/appointments",
      role: "doctor"
    },
    { title: "Patients", icon: <BsPeopleFill size={23} />, link: "/patients",role: "doctor" },
    {
      title: "Prescriptions",
      icon: <FaFilePrescription size={23} />,
      link: "/prescriptions",
      role: "doctor"
    },
    { title: "Pharmacies", icon: <FaPills size={23} />, link: "/pharmacies",role: "doctor" },
    {
      title: "Laboratories",
      icon: <MdLocalPharmacy size={23} />,
      link: "/laboratories",
      role: "doctor"
    },
        {
      title: "Orders",
      icon: <FaCartPlus size={23} />,
      link: "/pharmacyOrders",
      role: "pharmacy"
    },   
    {
      title: "Drugs",
      icon: <CiPillsBottle1 size={23} />,
      link: "/drugs",
      role: "pharmacy"
    },
    {
      title: "Orders",
      icon: <FaCartPlus size={23} />,
      link: "/laboratoryOrders",
      role: "laboratory"
    }, 
    {
      title: "Tests",
      icon: <ImLab size={23} />,
      link: "/tests",
      role: "laboratory"
    },
  ];
  return (
    <div className="flex h-screen  overflow-hidden">
      <Sidebar menuItems={doctorsMenuItems} />

      <div className="mt-1 no-scrollbar overflow-y-auto w-full bg-extraLight/40">
        {children}
      </div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
