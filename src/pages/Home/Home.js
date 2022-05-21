import { Banner } from "./Banner";
import { BusinessSummary } from "./BusinessSummary";
import { Footer } from "./Footer";
import { Reviews } from "./Reviews";
export const Home = () => {
  return (
    <div>
      <Banner />
      <BusinessSummary/>
      <Reviews/>
      <Footer/>
    </div>
  );
};
