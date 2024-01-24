// import React from 'react'
import { HiOutlineInformationCircle } from "react-icons/hi";
import PropTypes from "prop-types";

const InputInfoComponent = ({ message, type }) => {
  return (
    <>
      {type === "error" ? (
        <div className="text-primary font-medium text-sm">
          <p>
            <div className="flex items-center gap-4 w-full ">
              <div>
                <HiOutlineInformationCircle size={20} />
              </div>
              <p>{message}</p>
            </div>
          </p>
        </div>
      ) : (
        <div className="text-textDark font-medium text-sm">
          <p>
            <div className="flex items-center gap-4 w-full ">
              <div>
                <HiOutlineInformationCircle size={20} />
              </div>
              <p>{message}</p>
            </div>
          </p>
        </div>
      )}
    </>
  );
};

InputInfoComponent.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputInfoComponent;
