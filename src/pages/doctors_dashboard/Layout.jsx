import PropTypes from "prop-types";
import Sidebar from "../../components/Sidebar";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillCalendar3WeekFill, BsPeopleFill } from "react-icons/bs";
import { FaFilePrescription, FaPills } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";

const Layout = ({ children }) => {
  const doctorsMenuItems = [
    { title: "Dashboard", icon: <BiSolidDashboard size={23} />, link: "/" },
    {
      title: "Appointments",
      icon: <BsFillCalendar3WeekFill size={23} />,
      link: "/appointments",
    },
    { title: "Patients", icon: <BsPeopleFill size={23} />, link: "/patients" },
    {
      title: "Prescriptions",
      icon: <FaFilePrescription size={23} />,
      link: "/prescriptions",
    },
    { title: "Pharmacies", icon: <FaPills size={23} />, link: "/pharmacies" },
    {
      title: "Laboratories",
      icon: <MdLocalPharmacy size={23} />,
      link: "/laboratories",
    },
  ];
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar menuItems={doctorsMenuItems} />

      <div className="mt-1 overflow-y-auto w-full bg-extraLight/40">
        {children}
      </div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
