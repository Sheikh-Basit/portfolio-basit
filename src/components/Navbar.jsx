import React, { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLightDark, setIsLightDark] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const ToggleThemeChange = () => {
        setIsLightDark(!isLightDark);
        if (isLightDark) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            document.body.style.backgroundColor = "#0e0c0c";
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            document.body.style.backgroundColor = "white";
        }
    };

    return (
        <>
            <nav className="bg-white dark:bg-neutral-950 shadow fixed w-full z-10">
                <div className="container mx-auto flex justify-between items-center p-3 lg:px-14">

                    {/* Logo */}
                    <picture className="logo order-2 sm:order-1">
                        <img src={logo} width={50} alt="AB" />
                    </picture>


                    {/* Hamburger Icon */}
                    <button
                        onClick={toggleMobileMenu}
                        className="hamburger flex flex-col space-y-0.5 px-2 py-2.5 border-1 border-neutral-500 order-1 sm:hidden cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <span className="line bg-gray-800 dark:bg-white w-5 h-0.5"></span>
                        <span className="line bg-gray-800 dark:bg-white w-5 h-0.5"></span>
                        <span className="line bg-gray-800 dark:bg-white w-5 h-0.5"></span>
                    </button>


                    {/* Nav-menu */}
                    <ul className={`flex gap-x-5 order-2 absolute top-full left-0 flex-col bg-white dark:bg-neutral-950 w-full border-t-1 border-neutral-200 dark:border-neutral-800 -translate-x-full sm:translate-0 ${isMobileMenuOpen ? 'translate-x-0' : ""} transition-all  sm:pb-0 sm:border-0 sm:relative sm:flex-row sm:justify-center`}>
                        <li className="relative text-gray-800 dark:text-white px-3 sm:px-0 hover:bg-neutral-200 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
                            <a href="#home" className="py-3 block font-bold sm:font-semibold before:content=[''] before:absolute before:left-0 before:bottom-0 before:bg-cyan-500 before:w-0 before:h-0.5 before:transition-all before:duration-300 hover:before:w-full" >Home</a>
                        </li>
                        <li className="relative text-gray-800 dark:text-white px-3 sm:px-0 hover:bg-neutral-200 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
                            <a href="#aboutme" className="py-3 block font-bold sm:font-semibold before:content=[''] before:absolute before:left-0 before:bottom-0 before:bg-cyan-500 before:w-0 before:h-0.5 before:transition-all before:duration-300 hover:before:w-full" >About Me</a>
                        </li>
                        <li className="relative text-gray-800 dark:text-white px-3 sm:px-0 hover:bg-neutral-200 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
                            <a href="#services" className="py-3 block font-bold sm:font-semibold before:content=[''] before:absolute before:left-0 before:bottom-0 before:bg-cyan-500 before:w-0 before:h-0.5 before:transition-all before:duration-300 hover:before:w-full" >Services</a>
                        </li>
                        <li className="relative text-gray-800 dark:text-white px-3 sm:px-0 hover:bg-neutral-200 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
                            <a href="#projects" className="py-3 block font-bold sm:font-semibold before:content=[''] before:absolute before:left-0 before:bottom-0 before:bg-cyan-500 before:w-0 before:h-0.5 before:transition-all before:duration-300 hover:before:w-full" >Projects</a>
                        </li>
                        <li className="relative text-gray-800 dark:text-white px-3 sm:px-0 hover:bg-neutral-200 dark:hover:bg-neutral-900 sm:hover:bg-transparent sm:dark:hover:bg-transparent">
                            <a href="#contactme" className="py-3 block font-bold sm:font-semibold before:content=[''] before:absolute before:left-0 before:bottom-0 before:bg-cyan-500 before:w-0 before:h-0.5 before:transition-all before:duration-300 hover:before:w-full">Contact Me</a>
                        </li>
                    </ul>

                    {/* toogle light/dark Mode */}
                    <div
                        className="flex rounded-full space-x-1 dark:bg-amber-500 bg-gray-500 px-2 py-1 relative order-3"
                        aria-label="User menu"
                        onClick={ToggleThemeChange}
                    >
                        <span
                            className={`absolute top-0 ${isLightDark ? "left-0" : "right-0"
                                } bottom-0 rounded-full bg-gray-800 w-1/2 m-0`}
                        ></span>
                        <IoSunny className="text-white text-xl" />
                        <IoIosMoon className="text-white text-xl" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
