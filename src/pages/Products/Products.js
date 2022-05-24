import Helmet from "react-helmet";
import { Footer } from "../../components/Footer";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "./Product";

export const Products = () => {
  const [products] = useProducts();

  return (
    <>
      <Helmet>
        <title>Products | Estro Gadget</title>
      </Helmet>
      
      <div className="px-12 mt-24">
        <h1 className="text-4xl font-extrabold">Get Your Drone</h1>
        <p>If you’re buying a drone for the first time, you may want to consider the features, flight time, camera resolution, accessories and easy of use.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 mb-16">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
