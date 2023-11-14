import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section
      id='products'
      className='max-container max-sm:mt-12'
    >
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold font-palanquin'>
          Our{" "}
          <span className='text-coral-red'>Popular</span>{" "}
          Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our
          sought-after selections. Disvover a world of
          comfort, design, and value
        </p>
      </div>
    </section>
  );
};

export default PopularProducts;
