import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineInstagram,
} from "react-icons/ai";

const Social = [
    {
        path: "https://www.instagram.com/aashish.dhimaan/",
        icon: <AiOutlineInstagram className="hover:text-[#E4405F] w-6 h-6" />,
    },
    {
        path: "https://www.linkedin.com/in/aashish-dhiman/",
        icon: <AiFillLinkedin className="hover:text-[#0077B5] w-6 h-6 " />,
    },
    {
        path: "https://github.com/aashish-dhiman/",
        icon: <AiFillGithub className="hover:text-[#181717] w-6 h-6" />,
    },
];

const QuickLinks01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/",
        display: "About us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/",
        display: "Blog",
    },
];

const QuickLinks02 = [
    {
        path: "/find-a-doctor",
        display: "Find a Doctor",
    },
    {
        path: "/",
        display: "Request an Appointment",
    },
    {
        path: "/",
        display: "Find a Location",
    },
    {
        path: "/",
        display: "Give your opinion",
    },
];

const QuickLinks03 = [
    {
        path: "/",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact us",
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container footer">
                <div className=" flex justify-between flex-col md:flex-row lg:flex-row gap-[30px] pb-4">
                    <div>
                        <img src={logo} alt="logo" />
                        <p className="  text-[16px] leading-6 font-[400] text-textColor mt-2 ">
                            Copyright ©️ {year} - Aashish Dhiman
                        </p>

                        <div className="flex items-center gap-4 mt-3">
                            {Social.map((item, index) => (
                                <Link key={index} to={item.path}>
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[18px] leading-[28px] font-[700] mt-8 mb-6 text-headingColor  ">
                            Quick Links
                        </h2>

                        <ul>
                            {QuickLinks01.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={item.path}
                                        className="text-[14px] font-[400] text-textColor leading-7 hover:text-primaryColor"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[18px] leading-[28px] font-[700] mt-8 mb-6 text-headingColor  ">
                            Want to :
                        </h2>

                        <ul>
                            {QuickLinks02.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={item.path}
                                        className="text-[14px] font-[400] text-textColor leading-7 hover:text-primaryColor"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[18px] leading-[28px] font-[700] mt-8 mb-6 text-headingColor  ">
                            Support
                        </h2>

                        <ul>
                            {QuickLinks03.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={item.path}
                                        className="text-[14px] font-[400] text-textColor leading-7 hover:text-primaryColor"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
