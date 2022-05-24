import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = ({ product, fromHome }) => {
  const { _id, name, image, shortDesc, minOrderQuantity, availableQuantity, price } = product;
  console.log(product);
  const navigate = useNavigate();
    const purchaseItem = id => {
        navigate(`/purchase/${id}`)
    }
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
        {fromHome !== undefined ?  (
              <>
                <label
                  //   disabled={tool.length === 0}
                  //   onClick={() => {
                  //     newPath(tool._id);
                  //   }}
                  className="btn btn-primary text-white text-center"
                >
                  Update
                </label>
                <label
                  //   onClick={() => Delete(_id)}
                  className="btn btn-primary text-white text-center"
                >
                  Delete Item
                </label>
              </>
            ):(
              <>
                <button
                  onClick={() => purchaseItem(_id)}
                  className="btn btn-primary text-white text-center"
                >
                  Purchase
                </button>
              </>
            ) }
        </div>
      </div>
    </div>
  );
};
