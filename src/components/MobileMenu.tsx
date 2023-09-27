import { navLinks } from "../constants";

const MobileMenu = () => {
  return (
    <div className='max-sm:w-80 w-96 rounded-xl absolute top-10 right-0 bg-slate-50'>
      <ul className='flex flex-col w-full'>
        {navLinks.map(({ href, label }) => {
          return (
            <li
              className='hover:bg-slate-100 w-full text-center px-4 py-3 font-montserrat leading-normal text-lg text-slate-gray'
              key={label}
            >
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
