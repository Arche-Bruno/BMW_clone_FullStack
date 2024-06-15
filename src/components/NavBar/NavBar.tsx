"use client";
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Image from "next/image";
import logo from "../../imgs/logo/logo_BMW.svg";
import { NavItems } from "@/utils/constant";
import CardNavItems from "./CardNavItems";

import { RiMapPin2Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
const NavBar = () => {
  const [showNavMobile, setShowNavMobile] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<number>(0);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleModeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);
  const handleShowNavMobile = () => {
    setShowNavMobile(!showNavMobile);
  };
  const handleIsSelected = (positionNav: number) => {
    setIsSelected(positionNav);
  };
  const handleResetPage = () => {
    setIsSelected(0);
  };

  return (
    <div className="relative w-full h-full flex justify-between py-2">
      <div
        className={` ${
          showNavMobile
            ? "fixed inset-0  w-full h-full bg-light-card dark:bg-dark-card top-24 translate-x-0 transition-all duration-300 ease-in-out"
            : "fixed inset-0  w-full h-full bg-light-card dark:bg-dark-card top-24 translate-x-full transition-all duration-300 ease-in-out"
        }`}
      >
        <div className={` w-full mt-8`}>
          <div className="w-[70%] mx-auto">
          <ul className={`flex flex-col w-full gap-2 `}>
            {NavItems.map((item, index) => (
              <div key={index}>
                <CardNavItems
                  position={item.position}
                  name={item.name}
                  link={item.link}
                  handleIsSelected={handleIsSelected}
                  isSelected={isSelected}
                ></CardNavItems>
              </div>
            ))}
          </ul>
          </div>
       
        </div>
      </div>

      <div className="flex items-center gap-10">
        <Link href="/" onClick={handleResetPage}>
          <div className="w-[40px] lg:w-[50px] h-[50px] rounded-full overflow-hidden  ">
            <Image src={logo} alt="img_logo" className="w-full h-full"></Image>
          </div>
        </Link>

        <div className="hidden xl:block ">
          <ul className="flex items-center w-full gap-8 ">
            {NavItems.map((item, index) => (
              <div key={index}>
                <CardNavItems
                  position={item.position}
                  name={item.name}
                  link={item.link}
                  handleIsSelected={handleIsSelected}
                  isSelected={isSelected}
                ></CardNavItems>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 max-w ">
          <div className="style_icon">
            <IoSearchSharp></IoSearchSharp>
          </div>
          <div className="xl:hidden max-w" onClick={handleShowNavMobile}>
            <button
              className={`outline-none flex flex-col w-[2rem] h-[1.5rem] border-0 gap-[.65rem] text-dark-text bg-transparent ${
                showNavMobile ? "btn-hamburger" : ""
              } `}
            >
              <div className={`style_hamburger  bg-light-principal`}></div>
              <div className={`style_hamburger bg-light-principal`}></div>
              <div className={`style_hamburger bg-light-principal`}></div>
            </button>
          </div>

          <div className="style_icon hidden xl:block ">
            <RiMapPin2Line></RiMapPin2Line>
          </div>
        </div>
        <div className="max-w ">
          <label className="switch  border_style rounded-full">
            <input
              type="checkbox"
              id="switch1"
              checked={theme === "dark"}
              onChange={handleModeTheme}
            ></input>
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
