import Helmet from "react-helmet";
import { Footer } from "../../components/Footer";
import { useBlogs } from "../../hooks/useBlogs";
import { Blog } from "./Blog";

export const Blogs = () => {
  const [blogs] = useBlogs();

  return (
    <>
      <Helmet>
        <title>Blogs | Estro Gadget</title>
      </Helmet>
      <div>
        <div className="hero h-[40vh] bg-about bg-fixed mt-16 opacity-90">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-7xl font-bold text-primary">Our Blogs</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 mb-16 px-20">
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
