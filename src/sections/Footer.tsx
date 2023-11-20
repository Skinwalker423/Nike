import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col bg-black'>
        Test
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
                <div className='flex justify-center items-center rounded-full bg-white-400 h-12 w-12'>
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
      </div>
    </footer>
  );
};

export default Footer;
