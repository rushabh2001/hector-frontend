import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
import DomainSearch from "./DomainSearchHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import ServicesHomeOne from "./ServicesHomeOne";
import FAQHomeOne from "./FAQHomeOne";
import ChoseAreaHomeOne from "./ChoseAreaHomeOne";
import TestimonailHomeOne from "./TestimonailHomeOne";
import NewsFeedHomeOne from "./NewsFeedHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";
import HeroHomeTwo from "../home-2/HeroHomeTwo";
import AboutUs from "./AboutUs";
import FeaturesTabs from "./FeaturesTabs";
import ReportsHomeOne from "./ReportsHomeOne";

interface Props{
  name:string
}

const HomeOne: React.FC<Props> = () => {
  return (
    <div className="template-home">
      <HeaderOne name={"home"} />
      <main>
        {/* <HeroHomeOne /> */}
        <HeroHomeTwo />
        <BrandHomeOne />
        <AboutUs />
    
        <PricingHomeOne />
        <ChoseAreaHomeOne />
        {/* <FeaturesTabs style={true} /> */}
        {/* <DomainSearch /> */}
        {/* <ReportsHomeOne /> */}
        {/* <ServicesHomeOne /> */}
        
        <TestimonailHomeOne />
        <FAQHomeOne />
        <NewsFeedHomeOne />
        </main>
      <FooterOne />
    </div>
  );
};

export default HomeOne;
