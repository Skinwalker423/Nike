import Button from "../components/Button";

const Subsribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-center items-center max-lg:flex-col gap-10'
    >
      <h4 className='mt-10 font-palanquin text-4xl max-sm:text-6xl'>
        Sign Up for{" "}
        <span className='text-coral-red inline-block mt-3'>
          Updates
        </span>{" "}
        & Newsletter
      </h4>
      <div className='flex items-center max-lg:w-full lg:w-1/2 xl:w-1/3 h-20 px-4 py-2 border rounded-full relative'>
        <input
          className='w-1/2 max-md:w-2/3 lg:w-2/3 py-2'
          type='text'
        />
        <div className='absolute right-2 top-3'>
          <Button label='Sign Up' />
        </div>
      </div>
    </section>
  );
};

export default Subsribe;
