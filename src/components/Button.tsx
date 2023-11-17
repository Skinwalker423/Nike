type ButtonProps = {
  label: string;
  iconUrl?: string;
  outline?: string;
};

const Button = ({
  label = "Submit",
  iconUrl,
  outline,
}: ButtonProps) => {
  const themeColor = outline
    ? `text-slate-400 border-slate-400`
    : "bg-coral-red rounded-full text-white border-coral-red";
  return (
    <button
      type='button'
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full ${themeColor}`}
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
