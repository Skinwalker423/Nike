import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt={"offer"}
          width={773}
          height={687}
        />
      </div>
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
        <p className='mt-4 lg:max-w-lg info-text'>
          Feel the ground beneath your feet with our new
          line of athletic shoes. Designed with the athlete
          in mind, our shoes provide the support and
          traction you need to perform at your best.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our shoes are made with the highest quality
          materials, so you can be sure they'll last.
        </p>
        <div className='mt-11'>
          <Button label='View Details' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
