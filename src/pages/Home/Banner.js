import banner from "../../assets/Banner-Images/banner.png";
export const Banner = () => {
  return (
    <div className="hero lg:h-[80vh] bg-secondary text-white">
      <div className="hero-content flex-col lg:flex-row">
        <div data-aos="fade-right">
          <h1 className="text-5xl lg:text-6xl font-bold" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            We Can Make Your Celebration Marvelous
          </h1>
          <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="900" className="py-6 max-w-5xl">
            While they might seem like toys, a high-quality drone is a serious investment. We’ve flown plenty and there are a lot of good performers that we use.
          </p>
          <button data-aos="zoom-in" data-aos-delay="1300" className="btn btn-primary">
            Get Started
          </button>
        </div>
        <div className="h-70vh shrink-0" data-aos="fade-left">
          <img src={banner} className="h-full" alt="" />
        </div>
      </div>
    </div>
  );
};
