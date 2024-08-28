import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import HeaderOne from "../../layout/headers/header";
import HeaderTwo from "../../layout/headers/header-2";
import BlogArea from "./BlogArea";

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Blogs" title="Blog" />
        <BlogArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Blog;
