import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";


export const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isLoading } = useQuery("reviews", () => fetch("http://localhost:6060/reviews").then((res) => res.json()));

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
          const reviews = {
            name: data.name,
            image: image,
            shortDesc: data.shortDesc,
          };
          // send to your database
          fetch("http://localhost:6060/reviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(reviews),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                Swal.fire("Success!", "Review Added Successfully!", "success");
                reset();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Failed to add review!",
                  footer: '<a href="">Why do I have this issue?</a>',
                });
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="text-black">
      <h2 className="text-4xl text-white mb-8 font-extrabold text-center">Add a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Your Name"
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
          <input
            type="file"
            className="w-full max-w-xs dark:text-white"
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
        <input className="btn btn-primary w-full max-w-xs text-white" type="submit" value="Add Review" />
      </form>
    </div>
  );
};
