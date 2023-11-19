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
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input
          className='input'
          type='text'
          placeholder='enter your email'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subsribe;
