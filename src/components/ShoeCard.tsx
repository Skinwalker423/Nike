type ShoeCardProps = {
  imgUrl: {
    thumbnail: string;
    bigShoe: string;
  };
  bigShoeImage: string;
  changeBigShoeImage: (shoe: string) => void;
};

const ShoeCard = ({
  imgUrl,
  bigShoeImage,
  changeBigShoeImage,
}: ShoeCardProps) => {
  console.log(imgUrl, bigShoeImage);
  const handleBigShoeDisplayChange = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      onClick={handleBigShoeDisplayChange}
      className={`border-2 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4'>
        <img
          src={imgUrl.thumbnail}
          alt={"show thumbnail image"}
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
