import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='padding-x'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='nike logo'
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map(({ href, label }) => {
            return (
              <li
                className='hover:text-red-500 font-montserrat leading-normal text-lg text-slate-gray'
                key={label}
              >
                <a href={href}>{label}</a>
              </li>
            );
          })}
        </ul>
        <div
          onClick={handleOpenMobileMenu}
          className='hidden max-lg:block'
        >
          <img
            src={hamburger}
            alt='hamburger menu icon'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
