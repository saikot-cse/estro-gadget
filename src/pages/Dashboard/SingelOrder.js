import React from "react";
import { useNavigate } from "react-router-dom";

export const SingelOrder = (props) => {
  // const {index, setDeleteOrder, order} = props
  // const { _id, name, quantity } = props.order;
  const { products, setProducts, setDeleteOrder } = props;
  const navigate = useNavigate();
  const navigateTo = (id) => {
    navigate(`/payment/${id}`);
  };
  const { name, description, paid, price, productCode, quantity, _id, status, totalPrice, transactionId,  address, email, phone } = props.product;
  return (
    <div className="p-5 ">
      <div className="card w-80 h-full bg-base-100 shadow-xl">
        
        <div className="card-body items-center text-center text-black ">
          <h2 className="card-title"> Name: {name}</h2>
          <p>Address:{address}</p>
          <h2 className="card-title"> Email: {email}</h2>
          <h2 className="card-title"> Phone: {phone}</h2>
          <h2 className="card-title"> Total: {totalPrice}</h2>
          <h2 className="card-title"> Quantity: {quantity}</h2>
          {paid && status === "Pending" ? (
            <h4 className="card__title">
              Order Status: <span className="text-error">{status}</span>
            </h4>
          ) : (
            <h4 className="card__title">
              Order Status: <span className="text-success">{status}</span>
            </h4>
          )}
          {!paid ? (
            <button
              className="btn btn-secondary mx-4"
              onClick={() => {
                navigateTo(_id);
              }}
            >
              Pay
            </button>
          ) : (
            <div>
              <h4 className="card__title">
                Payment Status: <span className="text-success">Paid</span>
              </h4>
              <p>
                Transaction ID :<span className="text-success">{transactionId}</span>
              </p>
            </div>
          )}

          {!paid && (
            <label onClick={() => setDeleteOrder(props.product)} for="my-modal-6" className="btn  btn-error">
              Delete
            </label>
          )}
        </div>
      </div>
    </div>
    // <tr>
    //   <th>{index + 1}</th>
    //   <td>{name}</td>
    //   <td>{quantity}</td>
    //   <td>
    //     {!order?.paid ? (
    //       <label onClick={() => setDeleteOrder(props.order)} for="my-modal-6" className="btn btn-secondary btn-xs btn-error  text-white text-center">
    //         Cancle
    //       </label>
    //     ) : (
    //       <label disabled className="btn text-semibold btn-success btn-xs">
    //         Cancle
    //       </label>
    //     )}
    //   </td>
    //   <td>
    //     {order?.price && !order?.paid ? (
    //       <Link to={`/payment/${order._id}`}>
    //         <button className="btn text-semibold  btn-success  btn-xs">Pay</button>
    //       </Link>
    //     ) : (
    //       order?.price &&
    //       order?.paid && (
    //         <div>
    //           <p>
    //             <span className="text-success">Paid</span>
    //           </p>
    //           <p>
    //             Transaction id: <span className="text-success">{order.transactionId}</span>
    //           </p>
    //         </div>
    //       )
    //     )}
    //   </td>
    // </tr>
  );
};
