import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { CheckoutForm } from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51L34oeHJBf3paXtlNkHiZ9FyiMcs6byphpxforezUtImsqAYdsZ8QHrv0YegnSm57tW9olhLvSzHaO6lfTcBnkXr005yGXYg7c');
export const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:6060/order/${id}`;

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
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mt-16">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {data.userName}</p>
          <h2 class="card-title">Please Pay for: {data.name}</h2>
          <p>Please pay: ${data.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
    </div>
  );
};
