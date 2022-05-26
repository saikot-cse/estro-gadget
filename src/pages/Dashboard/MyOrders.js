import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import { DeleteOrders } from "./DeleteOrders";
import { SingelOrder } from "./SingelOrder";

export const MyOrders = () => {
  const [products, setProducts] = useState([]);
 

  const [deleteOrder, setDeleteOrder] = useState(null);

  console.log("delet", deleteOrder);

  const [user, loading] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:6060/order?email=${email}`)
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
      {products.length === 0 && <Loading></Loading>}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <SingelOrder
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
            setDeleteOrder={setDeleteOrder}
          ></SingelOrder>
        ))}
        {deleteOrder && (
          <DeleteOrders
            deleteOrder={deleteOrder}
            setDeleteOrder={setDeleteOrder}
            setProducts={setProducts}
            products={products}
          ></DeleteOrders>
        )}
      </div>
    </>
    
  );
};
