// import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";

const InputPassword = ({
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  togglePasswordVisibility,
  passwordVisible,
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <RiLockPasswordFill
          size={20}
          className="text-gray-500 dark:text-gray-400"
        />
      </div>
      <input
        id="input-group-1"
        name={name}
        type={passwordVisible ? "text" : "password"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? (
          <AiTwotoneEyeInvisible size={20} />
        ) : (
          <AiFillEye size={20} />
        )}
      </button>
    </div>
  );
};
InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  passwordVisible: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputPassword;
