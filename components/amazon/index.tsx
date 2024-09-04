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
import VisualSection from "./VisualSection";

const Amazon = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main>
        <Breadcrumb top_title="Amazon ADs Reporting" title="Amazon ADs Reporting" />
        <HeroSection />
        <LogoSlider />
        <HeatMapSection />
        <VisualDataSection />
        <VisualSection />
        <CTASection />
        <IconSectionOne />
        <IconSectionTwo />
        <CTASectionTwo />
        <IconSectionThree />
        <IconSectionFour />
      </main>
      <FooterOne />
    </>
  );
};

export default Amazon;
