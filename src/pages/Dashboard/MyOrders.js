import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import { DeleteOrders } from "./DeleteOrders";
import { SingelOrder } from "./SingelOrder";
import { useNavigate } from "react-router-dom";
export const MyOrders = () => {
  const navigate = useNavigate();
  const goToProducts=()=>{
    navigate("/products");
  }
  const [products, setProducts] = useState([]);

  const [deleteOrder, setDeleteOrder] = useState(null);

  console.log("delet", deleteOrder);

  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  
  useEffect(() => {
    fetch(`https://afternoon-escarpment-12190.herokuapp.com/order?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [email]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      {products.length === 0 && <><h1 className="text-center font-bold text-primary text-6xl">Please Order First</h1><button onClick={goToProducts} className="btn btn-primary mx-auto block mt-5">Go to Products</button></>}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <SingelOrder key={product._id} product={product} products={products} setProducts={setProducts} setDeleteOrder={setDeleteOrder}></SingelOrder>
        ))}
        {deleteOrder && <DeleteOrders deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} setProducts={setProducts} products={products}></DeleteOrders>}
      </div>
    </>
  );
};
