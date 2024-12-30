import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/logo/logoDark.svg'

function NavLinks() {
    const linkData = [
        {
            href: "/",
            text: "Home"
        },
        {
            href: "/about",
            text: "About"
        },
        {
            href: "/services",
            text: "Services"
        },
        {
            href: "/help",
            text: "Help"
        },
    ]

    const links = linkData.map(e => {
        return (
            <li key={linkData.indexOf(e)}><NavLink className={({ isActive }) => isActive ? "group font-bold" : "group"} to={e.href}><span className="py-0.5 bg-bottom bg-gradient-to-r from-customBlack to-customBlack bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200">
                {e.text}
            </span></NavLink></li >
        )
    })

    return (<>
        {links}
    </>
    )
}

function NavBar() {
    const [click, setClick] = useState(false);
    function handleClick() {
        setClick(!click);
    }

    return (
        <>
            <header className='w-full h-16 fixed z-10 bg-customCream text-customBlack font-semibold'>
                <nav className='max-w-[100rem] h-16 mx-auto flex justify-between items-center'>
                    <NavLink to="/">
                        <div className="w-40 ml-5 hover:cursor-pointer">
                            <img src={logo} alt="" />
                        </div>
                    </NavLink>
                    <ul className="hidden w-2/6 lg:flex justify-evenly">
                        <NavLinks />
                    </ul>
                    <div>
                        <NavLink className="mr-5 px-4 py-2 hidden lg:block rounded-lg text-customCream bg-customBlue transition-all duration-200  hover:scale-110" to="/login">Login</NavLink>
                        <div className="w-10 h-10 rounded-full mr-3 lg:hidden text-3xl transition-all">
                            <button className="pl-[10px]" type="button" onClick={handleClick}>&#8801;</button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="w-full h-16 bg-white"></div>
            {click && <section className='w-40 h-fit fixed right-0 font-semibold bg-customCream text-customBlack lg:hidden z-10' >
                <ul onClick={handleClick} className="w-[100%] h-48 my-auto mr-5 flex justify-evenly flex-col bg-transparent text-center">
                    <NavLinks />
                    <li><NavLink className="group" to="/login"><span className="py-0.5 bg-bottom bg-gradient-to-r from-customBlack to-customBlack bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200">
                        Login
                    </span></NavLink></li>
                </ul>
            </section>}
        </>
    )
}
export default NavBar;