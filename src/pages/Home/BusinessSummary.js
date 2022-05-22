import { FaMoneyCheckAlt, FaUserAlt } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
import { MdRateReview } from "react-icons/md";
export const BusinessSummary = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal w-full my-16">
      <div className="stat text-center">
        <div className="stat-title">
          <FaUserAlt className="text-6xl text-primary block mx-auto mb-1" />
        </div>
        <div className="stat-value mb-1">1k+</div>
        <div className="stat-desc text-lg">Customers We Served</div>
      </div>

      <div className="stat text-center">
        <div className="stat-title">
          <FaMoneyCheckAlt className="text-6xl text-success block mx-auto mb-1" />
        </div>
        <div className="stat-value mb-1">420M+</div>
        <div className="stat-desc text-lg">Annual Revenue</div>
      </div>

      <div className="stat text-center">
        <div className="stat-title">
          <ImHappy2 className="text-6xl text-warning block mx-auto mb-1" />
        </div>
        <div className="stat-value mb-1">900+</div>
        <div className="stat-desc text-lg">Happy Clients</div>
      </div>
      <div className="stat text-center">
        <div className="stat-title">
          <MdRateReview className="text-6xl text-secondary block mx-auto mb-1" />
        </div>
        <div className="stat-value mb-1">500+</div>
        <div className="stat-desc text-lg">Reviews</div>
      </div>
    </div>
  );
};
