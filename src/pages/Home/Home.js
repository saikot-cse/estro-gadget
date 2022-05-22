import { Footer } from "../../components/Footer";
import { Reviews } from "../../components/Reviews";
import { AboutUS } from "./AboutUS";
import { Banner } from "./Banner";
import { BusinessSummary } from "./BusinessSummary";
import { HomeProducts } from "./HomeProducts";
import { JoinUs } from "./JoinUs";
export const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUS />
      <HomeProducts />
      <BusinessSummary />
      <Reviews />
      <JoinUs />
      <Footer />
    </div>
  );
};
