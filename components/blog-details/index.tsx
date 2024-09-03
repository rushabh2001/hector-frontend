"use client";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import HeaderTwo from "../layout/headers/header-2";
import BlogDetailsArea from "./BlogDetailsArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BlogDetails } from "../types";
import { useGetBlogDetails } from "./service";

const Main = () => {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState<BlogDetails>();

  const { data } = useGetBlogDetails(slug);

  useEffect(() => {
    if (data) setBlogDetails(data.data);
  }, [data]);

  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumb top_title="Blog Details"  title="Blog Details" /> */}
        {blogDetails && <BlogDetailsArea blogDetails={blogDetails} />}
      </main>
      <FooterOne />
    </>
  );
};

export default Main;
