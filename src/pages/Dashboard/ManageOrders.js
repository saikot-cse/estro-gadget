// import { setDate } from 'date-fns';
import React, { useEffect, useState } from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../../components/Loading";
// import auth from '../../firebase.init';
import { ManageIndividualOrders } from "./ManageIndividualOrders";

export const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  //   const [user, loading] = useAuthState(auth);
  // const email = user.email;
  // console.log(email);
  useEffect(() => {
    fetch(`http://localhost:6060/order`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  if (orders === []) {
    return <Loading></Loading>;
  }
  console.log(orders);
  return (
    <>
      <h2 className="text-4xl font-bold">Manage All Orders</h2>
      <div className="grid grid-cols-4 gap-5 mt-16">
        {orders.map((order) => (
          <ManageIndividualOrders key={order._id} order={order} orders={orders} setOrders={setOrders}></ManageIndividualOrders>
        ))}
      </div>
    </>
  );
};
