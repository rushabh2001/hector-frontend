import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import ChoseAreaHomeOne from "../homes/home/ChoseAreaHomeOne";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import CoreFeatures from "../hosting/CoreFeatures";
import PriceArea from "../hosting/PriceArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import CTASection from "./CTASection";
import CTASectionTwo from "./CTASectionTwo";
import HeatMapSection from "./HeatMapSection";
import HeroSection from "./HeroSection";
import IconSectionFour from "./IconSectionFour";
import IconSectionOne from "./IconSectionOne";
import IconSectionThree from "./IconSectionThree";
import IconSectionTwo from "./IconSectionTwo";
import LogoSlider from "./LogoSlider";
import VisualDataSection from "./VisualDataSection";

const Amazon = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main>
        <Breadcrumb top_title="Amazon Marketplace" title="Amazon Marketplace" />
        <HeroSection />
        <LogoSlider />
        <HeatMapSection />
        <VisualDataSection />
        <CTASection />
        <IconSectionOne />
        <IconSectionTwo />
        <CTASectionTwo />
        <IconSectionThree />
        <IconSectionFour />
        {/* <PriceArea />  */}
        {/* <CoreFeatures /> */}
        {/* <TestimonailHomeOne style={true} /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default Amazon;
