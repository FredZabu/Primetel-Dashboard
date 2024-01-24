// import React from 'react'
import PropTypes from "prop-types";
import authImage1 from "../../assets/images/auth_img.png";
import authImage2 from "../../assets/images/auth_img2.png";
import authImage3 from "../../assets/images/auth_img3.png";
import LogoLong from "../../assets/images/primetel_logo.png";
import { Carousel } from "flowbite-react";
const Layout = ({ children }) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 w-full h-screen">
      {/* forms */}
      <div className="flex flex-col col-span-1 w-full px-32 overflow-y-scroll">
        <div className="flex w-full items-start  justify-start mb-12">
          <img className="mt-8 h-12 " src={LogoLong} />
        </div>
        {children}
      </div>
      {/* carousel */}
      <div className="hidden md:flex col-span-1 max-h-screen ">
        <Carousel
          //   indicators=""
          slideInterval={5000}
          className="w-full h-full rounded-sm"
        >
          <div className="h-full">
            <img
              className="h-full w-full object-cover"
              alt="..."
              src={authImage1}
            />
          </div>
          <div className="h-full">
            <img
              className="h-full w-full object-cover"
              alt="..."
              src={authImage2}
            />
          </div>
          <div className="h-full">
            <img
              className="h-full w-full object-cover"
              alt="..."
              src={authImage3}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
