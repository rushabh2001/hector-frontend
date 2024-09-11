import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import ContractArea from "./ContractArea";
import ContractServices from "./ContractServices";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main>
        <Breadcrumb top_title="Contact Us" title="Contact Us" />
        <ContractServices />
        <ContractArea />
        <GoogleMap />
        </main>
      <FooterOne />
    </>
  );
};

export default Contact;
