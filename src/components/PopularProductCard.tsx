import { star } from "../assets/icons";

type PopularProductCardProps = {
  imgURL: string;
  name: string;
  price: string;
  rating: number;
};

const PopularProductCard = ({
  imgURL,
  name,
  price,
  rating,
}: PopularProductCardProps) => {
  console.log("props", imgURL, name, price);
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img
        src={imgURL}
        alt={name}
        className='w-cardImg h-cardImg'
      />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img
          src={star}
          alt={"rating"}
          width={24}
          height={24}
        />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          {rating}
        </p>
      </div>
      <p className='mt-2 leading-normal text-2xl font-semibold font-palanquin'>
        {name}
      </p>
      <p className='mt-2 leading-normal text-2xl font-montserrat text-coral-red'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
