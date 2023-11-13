import React from "react";

type ButtonProps = {
  label: string;
  iconUrl: string;
};

const Button = ({
  label = "Submit",
  iconUrl = "/arrow-right.svg",
}: ButtonProps) => {
  return (
    <button
      type='button'
      className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'
    >
      {label}
      <img
        className='ml-2 rounded-full w-5 h-5'
        src={iconUrl}
        alt='button icon'
      />
    </button>
  );
};

export default Button;
