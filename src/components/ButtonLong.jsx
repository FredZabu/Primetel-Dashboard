// import React from 'react'
import PropTypes from "prop-types";
const ButtonLong = ({ text,type, onClick }) => {
  return (
    <button
      className="bg-primary text-white text-base mt-2 py-2 rounded-md hover:bg-primary/70 focus:bg-primary"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

ButtonLong.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLong;
