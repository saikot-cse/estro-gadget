export const Review = ({ review }) => {
  const { name, image, shortDesc } = review;
  return (
    <div className="card max-w-lg bg-neutral shadow-2xl my-16 text-white">
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 block mx-auto mt-5">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card-body mx-auto text-center">
        <p>{shortDesc}</p>
        <h2 className="card-title mx-auto">{name}</h2>
        <div class="rating mx-auto">
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </div>

        {/* <DynamicStar className="star" rating={ratings} /> */}
      </div>
    </div>
  );
};
