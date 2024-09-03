import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import FormArea from "./FormArea";

const BookADemo = () => {
  return (
    <>
      <HeaderOne />
      <main className="gradient-background">
        <FormArea />
      </main>
      <FooterOne />
    </>
  );
};

export default BookADemo;
