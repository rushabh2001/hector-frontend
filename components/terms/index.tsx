import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import ContentArea from "./ContentArea";

const Contact = () => {
  return (
    <>
      <HeaderOne style={true} />
      <main>
        <Breadcrumb top_title="Contact Us" title="About" />
        <ContentArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;
