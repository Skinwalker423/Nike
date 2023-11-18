import { star } from "../assets/icons";

interface ReviewCardProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <img
        src={imgURL}
        alt={`avatar image of ${customerName}`}
        className='object-cover w-[120px] h-[120px] rounded-full'
      />
      <p className='mt-6 max-w-sm text-center info-text'>
        {feedback}
      </p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          alt={"rating start icon"}
          className='object-contain m-0'
          width={24}
          height={24}
        />
        <p className='text-xl font-montserrat text-slate-gray'>
          ({rating})
        </p>
      </div>
      <p className='mt-1 font-montserrat text-3xl text-center font-bold'>
        {customerName}
      </p>
    </div>
  );
};

export default ReviewCard;
