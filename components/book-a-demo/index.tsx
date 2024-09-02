import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import HeaderTwo from "../layout/headers/header-2";
import FormArea from "./FormArea";

const BookADemo = () => {
  return (
    <>
      <HeaderOne />
      <main className="gradient-background">
        {/* <Breadcrumb top_title="Login Page" title="Login" /> */}
        <FormArea />
      </main>
      <FooterOne />
    </>
  );
};

export default BookADemo;
