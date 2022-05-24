import { useNavigate } from "react-router-dom";
export const ManageProduct = ({ product, fromHome }) => {
  const { name, image, shortDesc, minOrderQuantity, availableQuantity, price } = product;
  const navigate = useNavigate();
  const goToPurchase=()=>{
    navigate("/purchase");
  }
  return (
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
        {fromHome !== undefined ? (
              <>
                <label
                  for="booking-modal"
                  disabled={product.length === 0}
                  onClick={() => {
                    goToPurchase(product._id);
                  }}
                  className="btn btn-primary text-white text-center"
                >
                  Purchase
                </label>
              </>
            ) : (
              <>
                <label
                  for="booking-modal"
                  //   disabled={tool.length === 0}
                  //   onClick={() => {
                  //     newPath(tool._id);
                  //   }}
                  className="btn btn-primary text-white text-center"
                >
                  Update
                </label>
                <label
                  //   onClick={() => Delete(_id)}
                  className="btn btn-primary text-white text-center"
                >
                  Delete Item
                </label>
              </>
            )}
        </div>
      </div>
    </div>
  );
};
