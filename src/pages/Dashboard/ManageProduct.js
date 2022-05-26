import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export const ManageProduct = (props) => {
  const { product, setDeleteProduct } = props;
  const { name, image, shortDesc, minOrderQuantity, availableQuantity, price } = props.product;
  // const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const goToUpdate = (id) => {
    navigate(`/update-products/${id}`);
  };
  return (
    <>
      {/* <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}

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
            <label onClick={() => setDeleteProduct(props.product)} for="my-modal-7" className="btn  btn-error  text-white text-center">
              Delete
            </label>
            <label onClick={() => goToUpdate(product._id)} className="btn btn-primary text-white text-center">
              Update Item
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
