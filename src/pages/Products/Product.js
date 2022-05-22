import React from "react";

export const Product = ({ product }) => {
  const { name, image, shortDesc, minOrderQuantity, availableQuantity, price } = product;
  return (
    <div className="card max-w-lg bg-neutral shadow-2xl my-16 text-white">
      <figure>
        <img className=" w-full rounded-lg" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{shortDesc}</p>
        <p className="font-bold">Minimum Quantity: {minOrderQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
