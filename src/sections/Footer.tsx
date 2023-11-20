import { footerLogo } from "../assets/images";

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
          <p>
            Get shoes ready for the new term at your nearest
            Nike store. Find your perfect size in store. Get
            Rewards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
