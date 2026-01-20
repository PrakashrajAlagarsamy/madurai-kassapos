import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeDemoForm from "../ModalPopups/freeDemoForm";


import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Button } from "@mui/material";

const Header = ({ showPopup, setShowPopup }) => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState < number | null > (null);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <>
      <FreeDemoForm showPopup={showPopup} setShowPopup={setShowPopup} />
      <header
        className={showPopup ? `relative left-0 top-0 w-full py-3 ${stickyMenu
          ? "bg-white py-3 shadow-sm transition duration-100 dark:bg-black"
          : ""
          }` : `fixed left-0 top-0 z-99999 w-full py-3 ${stickyMenu
            ? "bg-white py-3 shadow-sm transition duration-100 dark:bg-black"
            : ""
          }`}
      >
        <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
          <div className="flex w-full items-center justify-between xl:w-1/4">
            <Link href="/">
              <Image
                src="/images/logo/kassaposlogo.png"
                alt="logo"
                width={119.03}
                height={30}
                className="hidden w-full dark:block"
              />
              <Image
                src="/images/logo/kassaposlogo.png"
                alt="logo"
                width={180}
                height={50}
                className="w-full dark:hidden"
              />
            </Link>

            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-label="hamburger Toggler"
              className="block xl:hidden"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="absolute right-0 block h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "w-full! delay-300" : "w-0"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 w-full!" : "w-0"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "w-full! delay-500" : "w-0"
                      }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "h-0! delay-0" : "h-full"
                      }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "h-0! delay-200" : "h-0.5"
                      }`}
                  ></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}
          </div>

          {/* Nav Menu Start   */}
          {/* <div
            className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
              "navbar visible! mt-4 h-auto max-h-[400px] rounded-md bg-white p-0 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
              }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                {menuData.map((menuItem, key) => (
                  <li key={key} className={menuItem.submenu && "group relative"}>
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => setDropdownToggler(!dropdownToggler)}
                          className="flex cursor-pointer items-center justify-between gap-3 hover:text-[#1660c1]"
                        >
                          {menuItem.title}
                          <span>
                            <svg
                              className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-[#1660c1]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </span>
                        </button>

                        <ul
                          className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                        >
                          {menuItem.submenu.map((sub) => (
                            <li key={sub.id} className="group/sub relative">

                              {sub.children ? (
                                <>
                                  
          <span className="flex w-full cursor-pointer items-center justify-between pb-0.5 hover:text-[#1660c1]">
            {sub.title}
            <span>▶</span>
          </span>

          
          <ul className="invisible absolute left-full top-0 ml-1 w-56 rounded-md bg-white shadow-lg group-hover/sub:visible dark:bg-blacksection">
            {sub.children.map((child) => (
              <li key={child.id}>
                <Link
                  href={child.path!}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1660c1] dark:hover:bg-black"
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
        ) : (
                                
          <Link
            href={sub.path || "#"}
            className="block hover:text-[#1660c1]"
          >
            {sub.title}
          </Link>
                              )}

        </li>
                          ))}

      </ul>
    </>
  ) : (
    <Link
      href={menuItem.path || "#"}
      className={
        pathUrl === menuItem.path
          ? "text-[#05090e] hover:text-[#1660c1]"
          : "hover:text-[#1660c1]"
      }
    >
      {menuItem.title}
    </Link>
  )
}
                  </li >
                ))}
              </ul >
            </nav >

  <div className="mt-7 flex items-center gap-6 xl:mt-0">
    <Link
      href="https://github.com/NextJSTemplates/solid-nextjs"
      className="text-regular font-medium text-waterloo hover:text-[#1660c1]"
    >
      9150665480
    </Link>

    <button
      onClick={() => { setShowPopup(true); console.log("clicked"); }}
      className="cursor-pointer flex items-center justify-center rounded-full bg-[#1660c1] hover:bg-white border-2 border-[#1660c1] hover:text-[#1660c1] px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-[#1660c1]ho"
    >
      Get Free demo
    </button>
  </div>
          </div> 
          */}

{/* Nav Menu Start */ }
<div
  className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
    "navbar visible! mt-4 h-auto max-h-[400px] rounded-md bg-white p-0 shadow-solid-5 dark:bg-blacksection"
    }`}
>
  <nav>
    <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
      {menuData.map((menuItem) => (
        <li
          key={menuItem.id}
          className={menuItem.submenu ? "group relative" : ""}
        >
          {menuItem.submenu ? (
            <>
              {/* PARENT */}
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === menuItem.id ? null : menuItem.id
                  )
                }
                className="flex items-center gap-3 hover:text-[#1660c1]"
              >
                {menuItem.title}
                <svg
                  className="h-3 w-3 fill-waterloo group-hover:fill-[#1660c1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </button>

              {/* DROPDOWN */}
              <ul
                className={`absolute top-full left-0 mt-2 w-64 rounded-md bg-white shadow-lg ${activeDropdown === menuItem.id ? "block" : "hidden"
                  }`}
              >
                {menuItem.submenu.map((sub) => (
                  <li key={sub.id} className="group/sub relative">
                    {sub.children ? (
                      <>
                        <span className="flex cursor-pointer items-center justify-between px-4 py-2 hover:text-[#1660c1]">
                          {sub.title}
                          <span>▶</span>
                        </span>

                        <ul className="invisible absolute left-full top-0 w-56 rounded-md bg-white shadow-lg group-hover/sub:visible">
                          {sub.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={child.path!}
                                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1660c1]"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={sub.path!}
                        className="block px-4 py-2 hover:text-[#1660c1]"
                      >
                        {sub.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={menuItem.path!}
              className="hover:text-[#1660c1]"
            >
              {menuItem.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
</div>
{/* Nav Menu End */ }
        </div >
      </header >
    </>
  );
};

export default Header;
