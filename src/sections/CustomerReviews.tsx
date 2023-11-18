import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl font-bold text-center'>
        What Are{" "}
        <span className='text-coral-red inline-block mt-3'>
          Customers
        </span>{" "}
        Saying?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Read genuine stories from our satisfied customers
        about their exceptional experiences with us
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => {
          return <ReviewCard key={review.customerName} />;
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
