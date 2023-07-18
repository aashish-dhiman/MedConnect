import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navigations = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/doctors",
        display: "Find a Doctor",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const Header = () => {
    return (
        <header className="header flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ============logo============ */}
                    <div>
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                    {/* ========= Menu ==========  */}
                    <div className="navigation">
                        <ul className="menu flex items-center gap-10">
                            {Navigations.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={(navClass) =>
                                            navClass.isActive
                                                ? "text-primaryColor text-[16px] leading-2 font-[600] "
                                                : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================ nav-right ============ */}
                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full hover:scale-[1.02]">
                                    <img
                                        src={avatar}
                                        alt="profile"
                                        className="w-full rounded-full"
                                    />
                                </figure>
                            </Link>
                        </div>

                        <Link to="/login">
                            <button
                                className=" bg-primaryColor px-6 py-2 text-white text-[15px] font-[600] h-30px cursor-pointer flex items-center justify-center rounded-[50px]
                        hover:bg-primaryHover hover:scale-[0.98] transition-all"
                            >
                                Login
                            </button>
                        </Link>

                        <span className="md:hidden">
                            <FiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
