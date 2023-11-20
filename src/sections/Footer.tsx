import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container px-10 py-5 bg-black'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col '>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt={"footer logo"}
              width={150}
              height={46}
            />
          </a>
          <p className='text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest
            Nike store. Find your perfect size in store. Get
            Rewards.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map(({ src, alt }) => {
              return (
                <div
                  key={alt}
                  className='flex justify-center items-center rounded-full bg-white-400 h-12 w-12'
                >
                  <img
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map(({ links, title }) => {
            return (
              <div key={title}>
                <h4 className='text-white font-montserrat text-2xl leading-normal mb-6 font-medium'>
                  {title}
                </h4>
                <ul>
                  {links.map(({ name, link }) => {
                    return (
                      <li
                        className='text-white-400 font-montserrat text-base hover:text-slate-gray'
                        key={name}
                      >
                        <a href={link}>{name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt={"copyright sign"}
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer'>
          Terms and conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
