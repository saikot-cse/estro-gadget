import { Banner } from "./Banner";
import { BusinessSummary } from "./BusinessSummary";
import { Footer } from "../../components/Footer";
import { Reviews } from "./Reviews";
import { ExtraInfo } from "./ExtraInfo";
import { HomeProducts } from "./HomeProducts";
export const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProducts/>
      <BusinessSummary/>
      <ExtraInfo/>
      <Reviews/>
      <Footer/>
    </div>
  );
};
