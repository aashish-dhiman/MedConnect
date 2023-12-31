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
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add("sticky__header");
        } else {
            headerRef.current.classList.remove("sticky__header");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyHeader);
        //clean up function
        return () => {
            window.removeEventListener("scroll", handleStickyHeader);
        };
    });

    const toggleMenu = () => {
        menuRef.current.classList.toggle("show__menu");
    };

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ============logo============ */}
                    <div>
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                    {/* ========= Menu ==========  */}
                    <div
                        className="navigation"
                        onClick={toggleMenu}
                        ref={menuRef}
                    >
                        <ul className="menu flex items-center gap-10">
                            {Navigations.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={(navClass) =>
                                            navClass.isActive
                                                ? "text-primaryColor text-[16px] leading-2 font-[600]"
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
                                className="btn__hover bg-primaryColor px-6 py-2 mx-4 text-white text-[14px] font-[600] h-30px cursor-pointer flex items-center justify-center rounded-[50px]
                        "
                            >
                                Login
                            </button>
                        </Link>

                        {/* ================= Nav button ================ */}
                        <span
                            className="hover:scale-[1.03] md:hidden"
                            onClick={toggleMenu}
                        >
                            <FiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
