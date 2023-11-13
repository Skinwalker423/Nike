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
    <button type='button'>
      {label}
      <img src={iconUrl} alt='button icon' />
    </button>
  );
};

export default Button;
