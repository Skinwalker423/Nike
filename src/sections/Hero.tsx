import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-6xl'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className='text-slate-gray text-lg font-montserrat leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stlyish Nike arrivals, quality, comfort,
          and innovation for you active needs.
        </p>
        <Button label='Show now' iconUrl={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map(({ label, value }) => {
            return (
              <div key={label}>
                <p className='text-4xl font-palanquin font-bold'>
                  {value}
                </p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          className='object-contain z-10 relative'
          src={bigShoe}
          alt='shoe collection'
          width={610}
          height={500}
        />
      </div>
      <div>
        {shoes.map((shoe) => {
          return (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgUrl={shoe}
                bigShoeImage={bigShoe}
                changeBigShoeImage={setBigShoe}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
