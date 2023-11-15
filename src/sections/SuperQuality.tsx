import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe4 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-8xl max-sm:text-6xl'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            We Provide You
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className='text-slate-gray text-lg font-montserrat leading-8 mt-6 sm:max-w-sm'>
          Feel the ground beneath your feet with our new
          line of athletic shoes. Designed with the athlete
          in mind, our shoes provide the support and
          traction you need to perform at your best.
        </p>
        <p className='text-slate-gray text-lg font-montserrat leading-8 mb-14 sm:max-w-sm'>
          Our shoes are made with the highest quality
          materials, so you can be sure they'll last.
        </p>
        <Button label='Show now' iconUrl={arrowRight} />
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe4} alt='shoe collection' />
      </div>
    </section>
  );
};

export default SuperQuality;
