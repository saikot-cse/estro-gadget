import React from "react";
import Swal from "sweetalert2";

export const DeleteProducts = ({ deleteProduct, setDeleteProduct, setProducts, products }) => {
  console.log("delet product",deleteProduct);
  const { _id } = deleteProduct;

  const handleDelete = () => {
    const url = `https://afternoon-escarpment-12190.herokuapp.com/products/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = products.filter((item) => item._id !== _id);
          Swal.fire(
            'Success!',
            'Product Deleted Successfully!',
            'success'
          )

          setProducts(remaining);
          setDeleteProduct(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box text-black">
          <h3 className="font-bold text-lg text-red-500 mb-16">Are you sure you want to delete ?</h3>
          <div className="my-modal-7">
            <button onClick={() => handleDelete()} className="btn btn-sm btn-error mr-6">
              Delete
            </button>
            <label for="my-modal-7" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
