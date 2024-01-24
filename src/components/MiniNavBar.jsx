/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { BsFillFunnelFill } from "react-icons/bs";
import PropTypes from "prop-types";
import CreateModal from "./CreateModal";
import { handleSearch } from "../store";
import { useDispatch, useSelector } from "react-redux";


export default function MiniNavBar({ buttonText, modalType, funct, setTableData, tableData }) {
  
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
  
    return state.searchTerm.search
  })
  const [openModal, setOpenModal] = useState(false); // initialize openModal state to false
 // initialize Appointments state to empty array
  // create  patients object to pass to NewAppointment component

  const props = { openModal, setOpenModal, funct, setTableData, tableData }; //props being passed to the createModal function

  const handleSearchChange = (event) => {

    dispatch(handleSearch(event.target.value))
  };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   // handle search submit logic here
  // };

  return (
    <div className="bg-white rounded-md border border-textDisable shadow-md w-full  px-4 py-2 flex md:items-center flex-col gap-2 md:flex-row">
      <button
        type="submit"
        className="border max-w-[100px] h-10 flex items-center gap-2 border-textDisable  bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2.5"
      >
        <BsFillFunnelFill className="w-6 h-6 text-primary" />
        <p className="textDark">Filter</p>
      </button>
      <form className="flex items-center w-3/4" >
        <div className="relative w-full flex">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

            <input
            type="search"
            id="default-search"
            className="block mr-8 w-1/2 px-4 py-2.5 pl-10 text-sm text-gray-900 border-none rounded-lg bg-extraLight focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder="Search for patients' name, email ..."
            required
            value={searchTerm}
            onChange={handleSearchChange}
          />
        
        
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary/70 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex items-center">
        <button
          onClick={() => props.setOpenModal(true)}
          className="flex items-center justify-center w-full text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          <HiPlus className="w-6 h-6 mr-2" />
          {buttonText}
        </button>
      </div>
      {openModal && modalType === "create" ? <CreateModal {...props} /> : ""}
   
    </div>
  );
}

MiniNavBar.propTypes = {
  buttonText: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
  funct: PropTypes.string.isRequired,
};