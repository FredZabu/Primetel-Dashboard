import PropTypes from "prop-types";
import {
  BsArrowLeftShort,
} from "react-icons/bs";
import {  BiSolidExit } from "react-icons/bi";


import { useState } from "react";
import LogoLong from "../assets/images/primetel_logo.png";
import Logo from "../assets/images/primetel_logo_short.png";
import { NavLink } from "react-router-dom";

const Sidebar = ({menuItems}) => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`relative h-screen  duration-300 py-2 px-2 border-r border-b border-r-textDisable ${
        open ? "w-56" : "w-20"
      }`}
    >
      <BsArrowLeftShort
        className={`bg-white border border-primary text-primary text-2xl rounded-full absolute -right-3 top-9 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div
        className={`flex items-center   w-full ${open ? "" : "justify-center"}`}
      >
        <img src={open ? LogoLong : Logo} className={"h-12 duration-300"} />
      </div>
      <div className="  flex flex-col">
        <ul className="pt-4 px-2">
          {menuItems.map((menu, index) => {
            return (
              <div key={index} className={` ${menu.role === "pharmacy" || menu.role === "default" ? '' : 'hidden'} `
          } >
                              <NavLink  to={menu.link}   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " font-semibold tracking-wide   hover:bg-primary/20 rounded-md  py-4 text-[14px] flex items-center gap-x-4 cursor-pointer px-2 text-primary duration-300 bg-primary/20 mb-2" : "text-textLight font-semibold tracking-wide  hover:bg-primary/20 rounded-md  py-4 text-[14px] flex items-center gap-x-4 cursor-pointer px-2 hover:text-primary duration-300 mb-2"
  }>
                {menu.icon}
                  {open && menu.title}
             
              </NavLink>
</div>
            );
          })}
        </ul>

        {/* profile section */}

      </div>
        <div className="absolute bottom-4 flex  items-center px-0 mt-24 gap-2 ">

          <div className="flex gap-2 flex-col md:flex-row hover:scale-105 duration-300">
            <img
              className="object-cover h-12 w-12 rounded-full "
              src="https://images.unsplash.com/photo-1605602517387-ec78b947335e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1575&q=80"
            />
            {open && (
              <div className="flex flex-col text-[14px]  ">
                <p className="text-textDark font-bold hover:text-primary">
                  Joe Bukusi
                </p>
                <p className="text-textLight font-medium hover:text-primary">
                  Provider
                </p>
              </div>
            )}
          </div>
          <div className="mb-4 cursor-pointer text-textLight hover:text-primary duration-300">
            <BiSolidExit size={30} />
          </div>          
        </div>      
    </div>
  );
};
Sidebar.propTypes = {
  menuItems: PropTypes.node.isRequired,
};
export default Sidebar;
