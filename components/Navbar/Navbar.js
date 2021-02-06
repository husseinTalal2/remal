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
                <div className="md:w-4/5 h-18 flex justify-between items-center md:ml-0 ml-5">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img
                                    width="50"
                                    src="https://res.cloudinary.com/dest-life-storage/image/upload/v1609838147/LOGOwithoutText_ys5kjm.svg"
                                    alt="logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Phone /> <span className="ml-5">+964 (770) 000-0000</span>
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
