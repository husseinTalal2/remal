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
            <header className="flex md:flex-col justify-between md:justify-center items-center text-white bg-black">
                <div className="w-full px-40 h-18 flex justify-between items-center md:ml-0 ml-5 bg-white">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img
                                    width="70"
                                    src="https://firebasestorage.googleapis.com/v0/b/alrimal-aldhahabiya.appspot.com/o/%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D9%84_%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9-1-removebg-preview.png?alt=media&token=1ab5ade2-c6ae-4c0e-b6b6-fe3833a28300"
                                    alt="logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Phone className="text-black" /> <a href="tel:+9647700000000" className="ml-5 text-black">+964 (0) 770 000-0000</a>
                    </div>
                </div>
                <nav className="md:w-4/5 h-20 flex justify-between items-center">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full nav-items hidden md:flex justify-between ">
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
                            className="nav-toggle md:hidden cursor-pointer mr-5"
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
                    <div className="flex flex-col mobile-nav bg-black bg-opacity-25 h-100 w-full items-center pb-10 text-white">
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
