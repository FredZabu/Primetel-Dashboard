// import React from 'react'
import PropTypes from "prop-types";
import Loader from "./Loader.jsx"
const ButtonLong = ({ text,type, onClick, isLoading, isLoadingText }) => {
  return (
    <button
      className="bg-primary text-white text-base mt-2 py-2 rounded-md hover:bg-primary/70 focus:bg-primary flex justify-center items-center space-x-4"
      onClick={onClick}
      type={type}
    >
      {isLoading? <div className="flex justify-center items-center space-x-2"><Loader /> <div>{isLoadingText }</div></div> : text}    
    </button>
  );
};

ButtonLong.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoadingText: PropTypes.string
};

export default ButtonLong;
