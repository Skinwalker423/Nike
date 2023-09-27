import React from "react";

const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28'>
        <p>Our Summer Collection</p>
      </div>
    </section>
  );
};

export default Hero;
