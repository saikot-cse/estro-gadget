import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

export const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isLoading } = useQuery("products", () => fetch("http://localhost:6060/products").then((res) => res.json()));

  const imageStorageKey = "f0f0f2bf446f8f55f66f44d630e01993";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const product = {
            name: data.name,
            image: image,
            shortDesc: data.shortDesc,
            minOrderQuantity: data.minOrderQuantity,
            availableQuantity: data.availableQuantity,
            price: data.price
          };
          // send to your database
          fetch("http://localhost:6060/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                // toast.success('Doctor added successfully')
                reset();
              } else {
                // toast.error('Failed to add the doctor');
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-80 text-black">
      <h2 className="text-2xl">Add a New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">{errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}</label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-md"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">{errors.image?.type === "required" && <span className="label-text-alt text-red-500">{errors.image.message}</span>}</label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input
            type="text"
            placeholder="Short Description"
            className="input input-bordered w-full max-w-xs"
            {...register("shortDesc", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">{errors.shortDesc?.type === "required" && <span className="label-text-alt text-red-500">{errors.shortDesc.message}</span>}</label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
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
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label className="label">{errors.availableQuantity?.type === "required" && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}</label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">{errors.price?.type === "required" && <span className="label-text-alt text-red-500">{errors.price.message}</span>}</label>
        </div>
        

        <input className="btn btn-primary w-full max-w-xs text-white" type="submit" value="Add Product" />
      </form>
    </div>
  );
};
