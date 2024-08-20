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

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <HeroHomeOne /> */}
        <HeroHomeTwo />
        <BrandHomeOne />
        <AboutUs />
        <FeaturesTabs style={true} />
        <DomainSearch />
        <ServicesHomeOne />
        <PricingHomeOne />
        <FAQHomeOne />
        <ChoseAreaHomeOne />
        <TestimonailHomeOne />
        <NewsFeedHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
