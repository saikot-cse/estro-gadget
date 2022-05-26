// import { setDate } from 'date-fns';
import React, { useEffect, useState } from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../../components/Loading";
import { DeleteOrders } from "./DeleteOrders";
// import auth from '../../firebase.init';
import { ManageIndividualOrders } from "./ManageIndividualOrders";
export const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  
  
  //   const [user, loading] = useAuthState(auth);
  // const email = user.email;
  // console.log(email);
  useEffect(() => {
    fetch(`https://afternoon-escarpment-12190.herokuapp.com/order`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [deleteOrder]);

  if (orders === []) {
    return <Loading></Loading>;
  }
  console.log(orders);
  return (
    <div>
    {orders.length === 0 && <Loading></Loading>}
    <h2 className="text-4xl mb-8 font-extrabold text-center grid ">
      Manage Order
    </h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map((order) => (
        <ManageIndividualOrders
          key={order._id}
          order={order}
          orders={orders}
          setOrders={setOrders}
          setDeleteOrder={setDeleteOrder}
        ></ManageIndividualOrders>
      ))}
      {deleteOrder && (
        <DeleteOrders
          orders={orders}
          setOrders={setOrders}
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
        ></DeleteOrders>
      )}
    </div>
  </div>
  );
};
