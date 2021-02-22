import React, { useState } from "react";
import Link from "next/link";
import ActiveLink from "../utils/ActiveLink";
import { Menu, Phone } from "react-feather";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const toggleNav = () => {
        setToggle(() => !toggle);
    };
    return (
        <>
            <header className="flex md:flex-col justify-between md:justify-center items-center bg-white shadow-sm">
                <nav className="md:w-4/5 w-full h-20 flex justify-between items-center">
                    <div className="w-full flex items-center justify-between">
                        <img className="ml-5" width="70" src="https://firebasestorage.googleapis.com/v0/b/alrimal-aldhahabiya.appspot.com/o/%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D9%84_%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9-1-removebg-preview.png?alt=media&token=1ab5ade2-c6ae-4c0e-b6b6-fe3833a28300" />
                        <div className="w-4/5 nav-items hidden md:flex justify-between ">
                            <ActiveLink activeClassName="active" href="/">
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    HOME
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink
                                activeClassName="active"
                                href="/projects"
                            >
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    PROJECTS
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink activeClassName="active" href="/about">
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    ABOUT US
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink activeClassName="active" href="/team">
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    OUR TEAM
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink activeClassName="active" href="/gallery">
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    GALLERY
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink
                                activeClassName="active"
                                href="/contact"
                            >
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    CONTACT US
                                </a>
                            </ActiveLink>
                        </div>
                        <div
                            className="nav-toggle md:hidden cursor-pointer mr-5 "
                            onClick={() => toggleNav()}
                        >
                            <Menu />
                        </div>
                    </div>
                </nav>
               
            </header>
            <div
                    className={
                        !toggle && "mobile-nav bg-black md:hidden hidden"
                    }
                >
                    <div className="flex transition-all duration-150 ease-in-out flex-col mobile-nav bg-black h-100 w-full items-center pb-10 text-white">
                        <ActiveLink activeClassName="active" href="/">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max align-center">
                                HOME
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/projects">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                PROJECTS
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/about">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                ABOUT US
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/team">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                OUR TEAM
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/contact">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                CONTACT US
                            </a>
                        </ActiveLink>
                    </div>
                </div>
        </>
    );
}

export default Navbar;
