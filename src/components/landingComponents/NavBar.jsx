import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/logo/logoDark.svg';

function NavLinks({ onClick }) {
  const linkData = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/help", text: "Help" },
  ];

  return (
    <>
      {linkData.map(({ href, text }, index) => (
        <li key={index} onClick={onClick}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "group font-bold" : "group"
            }
            to={href}
          >
            <span className="py-0.5 bg-bottom hover:text-[#FF7426] bg-gradient-to-r from-[#FF7426] to-[#FF7426] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200">
              {text}
            </span>
          </NavLink>
        </li>
      ))}
    </>
  );
}

function NavBar() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <>
      <header className="w-full py-2 fixed z-10 bg-customcream text-customBlack font-semibold shadow-md">
        <nav className="max-w-[100rem] h-16 mx-auto flex justify-between items-center px-4 lg:px-10">
          {/* Logo */}
          <NavLink to="/">
            <div className="w-40 ml-5 hover:cursor-pointer">
              <img src={logo} alt="Logo" />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex w-2/6 justify-evenly">
            <NavLinks />
          </ul>

          {/* Desktop Login Button */}
          <div>
            <NavLink
              className="mr-5 px-6 py-2 hidden lg:block rounded-full text-customCream text-md bg-customPurple transition-all duration-200 hover:scale-110"
              to="/login"
            >
              Login
            </NavLink>

            {/* Mobile Menu Button */}
            <div className="w-10 h-10 rounded-full mr-3 lg:hidden text-3xl transition-all">
              <button
                className="pl-[10px]"
                type="button"
                onClick={handleClick}
              >
                &#8801;
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Placeholder for Fixed Header */}
      <div className="w-full h-16 bg-transparent"></div>

      {/* Mobile Dropdown */}
      {click && (
        <section
          className="w-full fixed top-16 bg-customcream text-customBlack lg:hidden z-10 shadow-lg transition-transform transform duration-300 ease-in-out"
        >
          <ul
            onClick={handleClick}
            className="flex flex-col items-center space-y-4 py-4"
          >
            <NavLinks onClick={handleClick} />
            <li>
              <NavLink
                className="group"
                to="/login"
                onClick={handleClick}
              >
                <span className="py-0.5 bg-bottom bg-gradient-to-r from-customBlack to-customBlack bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200">
                  Login
                </span>
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default NavBar;
