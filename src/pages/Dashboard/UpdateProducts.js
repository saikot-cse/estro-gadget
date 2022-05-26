import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
export const UpdateProducts = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "f0f0f2bf446f8f55f66f44d630e01993";

  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch(`https://afternoon-escarpment-12190.herokuapp.com/products?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);
  const onSubmit = async (data) => {
    console.log(data);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    console.log(image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          const image = result.data.url;
          const updatedProduct = {
            price: data.price,
            availableQuantity: data.quantity,
            minOrderQuantity: data.minOrderQuantity,
            image: image,
          };

          fetch(`https://afternoon-escarpment-12190.herokuapp.com/products?id=${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updatedProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              fetch(`https://afternoon-escarpment-12190.herokuapp.com/products?id=${id}`)
                .then((res) => res.json())
                .then((data) => setProduct(data));
              Swal.fire("Success!", "Product Updated Successfully!", "success");
              reset();
            });
        }
      });
  };

  return (
    <div>
      <div className=" grid  justify-center items-center  mt-16">
        <div className="card max-w-full h-full bg-base-100  ">
          <figure className="px-4 pt-6">
            <img src={product[0]?.image} className="h-4/6" alt="Movie" />
          </figure>
          <div className="card-body  mx-auto">
            <h2 className="card-title">Product name: {product[0]?.name}</h2>

            <h2 className="card-title">Min Order Quantity : {product[0]?.minOrderQuantity}</h2>
            <h2 className="card-title">Quantity : {product[0]?.availableQuantity}</h2>
            <h2 className="card-title">Price : {product[0]?.price}</h2>
            <p>Description: {product[0]?.shortDesc} </p>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Product Price"
                      className="input input-bordered w-full max-w-xs"
                      {...register("price", {
                        required: {
                          value: true,
                          message: "Product Price is Required",
                        },
                      })}
                    />
                    <label className="label">{errors.price?.type === "required" && <span className="label-text-alt text-red-500">{errors.price.message}</span>}</label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Product Quantity"
                      min={1}
                      className="input input-bordered w-full max-w-xs"
                      {...register("quantity", {
                        required: {
                          value: true,
                          message: "Product Quantity is Required",
                        },
                      })}
                    />
                    <label className="label">{errors.quantity?.type === "required" && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}</label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Minimum Quantity</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Minimum Order Quantity"
                      className="input input-bordered w-full max-w-xs"
                      {...register("minOrderQuantity", {
                        required: {
                          value: true,
                          message: "Minimum Order Quantity is Required",
                        },
                      })}
                    />
                    <label className="label">{errors.naminOrderQuantityme?.type === "required" && <span className="label-text-alt text-red-500">{errors.minOrderQuantity.message}</span>}</label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                          required: {
                            value: true,
                            message: " ",
                          },
                        })}
                      />
                      <label className="label">{errors.file?.type === "required" && <span className="label-text-alt text-red-500">{errors.file.message}</span>}</label>
                    </div>
                  </div>

                  <input className="btn  btn-primary  mx-auto mt-4" type="submit" value="Update!" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
