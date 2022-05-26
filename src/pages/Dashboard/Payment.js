import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { CheckoutForm } from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51L34oeHJBf3paXtlNkHiZ9FyiMcs6byphpxforezUtImsqAYdsZ8QHrv0YegnSm57tW9olhLvSzHaO6lfTcBnkXr005yGXYg7c");
export const Payment = () => {
  const { id } = useParams();
  const url = `https://afternoon-escarpment-12190.herokuapp.com/order/${id}`;

  const { data, isLoading } = useQuery(["products", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div>
      <div className="card w-50  max-w-md bg-base-100 shadow-xl my-16 mt-48 mx-auto">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {data?.userName}</p>
          <h2 className="card-title">Please Pay for: {data?.name}</h2>
          <p>Please pay: ${data?.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};
