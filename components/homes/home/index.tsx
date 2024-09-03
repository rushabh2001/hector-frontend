import HeaderOne from "../../layout/headers/header";
import NewsFeedHomeOne from "./NewsFeedHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";
import HeroSection from "../home/HeroSection";
import AboutUs from "./AboutUs";
import FeaturesTabs from "./FeaturesTabs";
import ReportSection from "./ReportSection";
import ReachOutSection from "./ReachOutSection";

interface Props{
  name:string
}

const HomeOne: React.FC<Props> = () => {
  return (
    <div className="template-home">
      <HeaderOne name={"home"} />
      <main>
        <HeroSection />
        <BrandHomeOne />
        <AboutUs />
        <FeaturesTabs style={true} />
        <ReportSection style={true} />
        <ReachOutSection />
        <NewsFeedHomeOne />
      </main>
      <FooterOne />
    </div>
  );
};

export default HomeOne;
