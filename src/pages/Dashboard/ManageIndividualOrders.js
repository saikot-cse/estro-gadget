import React from "react";
import Swal from "sweetalert2";
export const ManageIndividualOrders = (props) => {
  const { orders, setOrders, setDeleteOrder } = props;

  const { status, _id, paid, description, name, email, transactionId, image, address, phone, totalPrice, quantity } = props.order;

  const changeStatus = (e) => {
    const updatedProduct = {
      status: "Shipped",
    };
    console.log(updatedProduct.quantity);
    fetch(`http://localhost:6060/order?id=${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < orders.length; i++) {
          if (orders[i]._id === _id) {
            orders[i].status = "Shipped";
            console.log(orders[i]);
          }
        }
        Swal.fire(
          'Success!',
          'Panding Status Updated',
          'success'
        )
        setOrders(orders);
      });

    fetch(`http://localhost:6060/order`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  return (
    <div>
      <div className="card w-80 h-full bg-base-100 shadow-xl">
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title"> Name: {name}</h2>
          <p>Address:{address}</p>
          <h2 className="card-title"> Email: {email}</h2>
          <h2 className="card-title"> Phone: {phone}</h2>
          <h2 className="card-title"> Total: {totalPrice}</h2>
          <h2 className="card-title"> Quantity: {quantity}</h2>

          {!paid ? (
            <h4 className="card_title">
              Payment: <span className="text-danger">Pending</span>
            </h4>
          ) : (
            <h4 className="card_title">
              Payment: <span className="text-success">Paid</span>
            </h4>
          )}
          {status === "pending" ? (
            <h4 className="card_title">
              Status: <span className="text-danger">{status}</span>
            </h4>
          ) : (
            <h4 className="card_title">
              Status: <span className="text-success">{status}</span>
            </h4>
          )}
          {status === "pending" && paid? 
            <button onClick={() => changeStatus()} className="btn btn-success text-center">
              Shipped
            </button>
            :
            <button disabled onClick={() => changeStatus()} className="btn btn-success text-center">
              Shipped
            </button>
          }
          {!transactionId && (
            <label onClick={() => setDeleteOrder(props.order)} for="my-modal-6" className="btn  btn-error">
              Delete
            </label>
          )}
        </div>
      </div>
    </div>
  );
};
