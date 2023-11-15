interface ServiceCardProps {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({
  imgURL,
  label,
  subtext,
}: ServiceCardProps) => {
  console.log("img", imgURL);
  return (
    <div className='flex-1 w-full sm:min-w-[350px] sm:w-[350px] max-w-xs border rounded-lg shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
        />
      </div>
      <h3 className='mt-10 font-palanquin text-3xl font-bold max-sm:text-2xl'>
        {label}
      </h3>
      <p className='text-slate-gray text-lg font-montserrat leading-8 mt-6 mb-14 sm:max-w-sm break-words'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
