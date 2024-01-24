import PropTypes from "prop-types";
import { FaMedkit } from "react-icons/fa"; // Replace with your pharmacy icon
import { Link } from "react-router-dom"; // If you want to link to a pharmacy details page

export default function PharmacyCard({ name, storeId }) {
  return (
    <div className="bg-white border border-textDisable rounded-md flex gap-4 p-4">
      {/* icon */}
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary p-2">
        <FaMedkit size={25} /> {/* Replace with your pharmacy icon */}
      </div>
      {/* pharmacy info */}
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-base text-textDark">{name}</h2>
       
        <div className="font-medium text-sm">
          Store ID: {storeId}
        </div>
        <Link to={`/pharmacies/${storeId}`} className="text-primary flex items-center space-x-1">
          <span>View Meds</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

          
        </Link>
      </div>
    </div>
  );
}

PharmacyCard.propTypes = {
  name: PropTypes.string.isRequired,
  storeId: PropTypes.string.isRequired,
};
