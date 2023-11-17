import { arrowRight } from "../assets/icons";
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
          className='object-contain'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h4 className='mt-10 font-palanquin text-4xl max-sm:text-6xl'>
          <span className='text-coral-red inline-block mt-3'>
            Special
          </span>{" "}
          Offer
        </h4>
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
        <div className='mt-11 flex gap-5'>
          <Button label='Shop now' iconUrl={arrowRight} />
          <Button label='Learn More' outline />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
