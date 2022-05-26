import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

export const Purchase = () => {
  const { _id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [reload, setReload] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://afternoon-escarpment-12190.herokuapp.com/products/${_id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [_id]);
  console.log(productDetail);

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    const min = productDetail.minOrderQuantity;
    const max = productDetail.availableQuantity;

    if (quantity < min || quantity > max) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter quantity between minimum to maximum",
      });
      setReload(!reload);
      setIsDisabled(true);
      return;
    } else {
      Swal.fire("Congratulation!", "Your order has been placed!", "success");
    }

    const orders = {
      userEmail: user.email,
      userName: user.displayName,
      phone: e.target.phone.value,
      address: e.target.address.value,
      name: productDetail.name,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
    };
    fetch("https://afternoon-escarpment-12190.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        e.target.reset();
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 mt-16">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="w-40" src={productDetail.image} alt={productDetail.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold ">{productDetail.name}</h2>
            <p className="text-semibold">shortDesc:{productDetail.shortDesc}</p>
            <p>
              {" "}
              <span className="text-xl font-bold">Available Quantity:</span> {productDetail.availableQuantity}{" "}
            </p>
            <p>
              {" "}
              <span className="text-xl font-bold">Minimum Order Quantity:</span> {productDetail.minOrderQuantity}{" "}
            </p>
            <p>
              {" "}
              <span className="text-xl font-bold">Price:$</span> {productDetail.price}{" "}
            </p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="form-control">
              <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered my-2 input-success w-full max-w-xs" />
              <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered my-2 input-success w-full max-w-xs" />
              <input type="text" name="phone" required placeholder="Your Number" className="input input-bordered my-2 input-success w-full max-w-xs" />
              <input type="text" name="address" required placeholder="Your Address" className="input input-bordered my-2 input-success w-full max-w-xs" />
              <input type="number" className="input input-bordered my-2 input-success w-full max-w-xs" name="quantity" defaultValue={productDetail.minOrderQuantity} placeholder="Set quantity" />
              <input type="number" className="input input-bordered my-2 input-success w-full max-w-xs" name="price" placeholder="price" required />
              <input type="Submit" value={"Order"} disabled={isDisabled} className="btn btn-secondary my-2 w-80 text-white" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
