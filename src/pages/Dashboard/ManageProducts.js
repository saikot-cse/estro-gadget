import Helmet from "react-helmet";
import { useProducts } from "../../hooks/useProducts";
import { ManageProduct } from "./ManageProduct";

export const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  

  return (
    <>
      <Helmet>
        <title>Products | Estro Gadget</title>
      </Helmet>
      <div className="px-12 h-full mt-16">
        <h1 className="text-4xl font-extrabold">Get Your Drone</h1>
        <p>If you’re buying a drone for the first time, you may want to consider the features, flight time, camera resolution, accessories and easy of use.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
          {products.map((product) => (
            <ManageProduct key={product._id} product={product} products={products} setProducts={setProducts} />
          ))}
        </div>
      </div>
    </>
  );
};
