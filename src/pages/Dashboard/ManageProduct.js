import { useState } from "react";
import { Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const ManageProduct = (props) => {
  const { products, setProducts } = props;
  const { _id, name, image, shortDesc, minOrderQuantity, availableQuantity, price } = props.product;
  const [modalShow, setModalShow] = useState(false);
  // const navigate = useNavigate();
  // const goToPurchase = () => {
  //   navigate("/purchase");
  // };
  const deleteProduct = () => {
    const url = `https://afternoon-escarpment-12190.herokuapp.com/products/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = products.filter((item) => item._id !== _id);
          Swal.fire("Success!", "You clicked the button!", "success");
          setProducts(remaining);
        }
      });
  };
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Name {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Description {shortDesc}</h4>
          <h4>Price {price}</h4>
          <p>
            Notice: <span className="text-danger">{shortDesc}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-33" onClick={() => deleteProduct()}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="card max-w-lg bg-neutral shadow-2xl my-16 text-white">
        <figure>
          <img className=" w-full rounded-lg" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDesc}</p>
          <p className="font-bold">Minimum Quantity: {minOrderQuantity}</p>
          <p>Available Quantity: {availableQuantity}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-center">
            <>
              {/* <label
                onClick={() => Delete(_id)}
              className="btn btn-primary text-white text-center"
            >
              Delete Item
            </label> */}
              <button className="button-33 my-3" variant="primary" onClick={() => setModalShow(true)}>
                Delete Order
              </button>
              <label
                //   onClick={() => Delete(_id)}
                className="btn btn-primary text-white text-center"
              >
                Update Item
              </label>
            </>
          </div>
        </div>
      </div>
    </>
  );
};
