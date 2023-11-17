type ButtonProps = {
  label: string;
  iconUrl?: string;
  outline?: boolean;
  color?: string;
};

const Button = ({
  label = "Submit",
  iconUrl,
  outline,
  color = "coral-red",
}: ButtonProps) => {
  const themeColor = outline
    ? `text-${color} border-${color} hover:bg-${color} hover:text-white`
    : "bg-coral-red rounded-full text-white border-coral-red";
  return (
    <button
      type='button'
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full border ${themeColor}`}
    >
      {label}

      {iconUrl && (
        <img
          className='ml-2 rounded-full w-5 h-5'
          src={iconUrl}
          alt='button icon'
        />
      )}
    </button>
  );
};

export default Button;
