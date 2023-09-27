import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";

const Nav = () => {
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
          <li>Home</li>
        </ul>
        <img
          src={hamburger}
          alt='hamburger menu icon'
          width={25}
          height={25}
          className='lg:hidden'
        />
      </nav>
    </header>
  );
};

export default Nav;
