import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import pageNotFound from "../../assets/pageNotFound.jpg";
export const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Helmet>
        <title>404 Page Not Found | Estro Gadget</title>
      </Helmet>
      <img className="mx-auto d-block mt-3 rounded img-fluid" src={pageNotFound} alt="" />
      <button onClick={navigateToHome} className="font-extrabold btn btn-primary mx-auto block my-3 text-white">
        Go back to Home
      </button>
    </div>
  );
};


