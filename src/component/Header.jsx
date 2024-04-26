import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../Constants/routerConstants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      id: 0,
      linkTo: "/",
      display: "Home",
    },
    {
      id: 1,
      linkTo: routes.CRYPTO,
      display: "Crypto",
    },
    {
      id: 2,
      linkTo: routes.TRENDING,
      display: "Trending",
    },
    {
      id: 3,
      linkTo: routes.SAVED,
      display: "Saved",
    },
  ];
  return (
    <header className="bg-black fixed w-full">
      <nav className="flex justify-between items-center w-[90%] mx-auto text-white h-16 ">
        <div className="text-xl md:text-2xl font-bold">
          <Link to="/">CryptoVerse</Link>
        </div>
        <ul className="hidden gap-5 md:flex font-poppins h-[60%] items-center justify-center">
          {navItems.map((item) => (
            <li className="" key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "px-6 py-2 bg-[#FFD700] text-black cursor-pointer rounded-xl h-full flex items-center"
                      : "px-6 py-2 hover:bg-[#FFD700] hover:text-black cursor-pointer rounded-xl h-full flex items-center"
                  }`
                }
                // className=""
                to={item.linkTo}
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <RiMenu3Fill className="w-16 h-6" />
          ) : (
            <FaTimes className="w-16 h-6" />
          )}
        </button>
        {isOpen && (
          <ul className="flex flex-col font-poppins md:hidden absolute top-16 left-0 bg-black w-full justify-center items-center gap-4 pb-5 ">
            {navItems.map((item) => (
              <li className="" key={item.id} onClick={() => setIsOpen(!isOpen)}>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "px-6 py-2 bg-[#FFD700] text-black cursor-pointer rounded-xl h-full flex items-center"
                        : "px-6 py-2 hover:bg-[#FFD700] hover:text-black cursor-pointer rounded-xl h-full flex items-center"
                    }`
                  }
                  // className=""
                  to={item.linkTo}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
