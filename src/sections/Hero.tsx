import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
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
        <p>
          Discover stlyish Nike arrivals, quality, comfort,
          and innovation for you active needs.
        </p>
        <Button label='Show now' iconUrl={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map(({ label, value }) => {
            return (
              <div key={label}>
                <p>{value}</p>
                <p>{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
