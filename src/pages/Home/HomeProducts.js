import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../Products/Product";

export const HomeProducts = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="mt-16 mx-12">
      <h1 className="text-4xl font-extrabold text-center">Get Your Drone</h1>
      <p className="max-w-xl mx-auto text-center">If you’re buying a drone for the first time, you may want to consider the features, flight time, camera resolution, accessories and easy of use.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <button onClick={navigateToProducts} className="btn btn-md lg:btn-lg mx-auto block btn-primary">
        View All Products
      </button>
    </div>
  );
};
