"use client";
import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import NavbarMinimalColored from "../NavbarMinimalColored";

const CommonNav = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  return (
    <div>
      {!isNavbarVisible && (
        <BiMenuAltLeft
          size={45}
          onClick={toggleNavbar}
          style={{
            cursor: "pointer",
            position: "absolute",
            left: 0,
            top: 10,
            zIndex: 1000,
          }}
        />
      )}

      <NavbarMinimalColored
        isVisible={isNavbarVisible}
        toggleNavbar={toggleNavbar}
      />
    </div>
  );
};

export default CommonNav;
