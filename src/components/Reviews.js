import React from "react";
import { useReviews } from "../hooks/useReviews";
import { Review } from "./Review";
export const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="px-12 mt-16">
      <h1 className="text-4xl font-extrabold">Our Clients Feedback</h1>
      <p>Read trusted reviews from our customers.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 mb-16">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};
