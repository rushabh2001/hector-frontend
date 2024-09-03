"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import useEffectOnce from "../../../hooks/useEffectOnce";
import { BlogResponse } from "../../types";
import { useGetBlogList } from "../services";
import { encryptData } from "../../utils/utils";

// components
import Skeleton from "../Skeleton";
import BlogList from "../BlogList";
import Pagination from "../Pagination";
import DataNoFound from "../DataNoFound";
import ContactForm from "../../blog-details/ContactForm";
import CategoriesArea from "../CategoriesArea";
import Tags from "../Tags";

const BlogArea = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [blogListData, setBlogListData] = useState<BlogResponse>();
  const [encryptedData, setEncryptedData] = useState(() =>
    encryptData(
      JSON.stringify({
        page: page,
        limit: limit,
        category_slug: category,
        tag_slug: tag,
      })
    )
  );

  const { data, isLoading, isFetching } = useGetBlogList(encryptedData);

  useEffect(() => {
    if (data) {
      setBlogListData(data);
    }
  }, [data]);

  useEffectOnce(() => {
    const newEncryptedData = encryptData(
      JSON.stringify({
        page: page,
        limit: limit,
        category_slug: category,
        tag_slug: tag,
      })
    );
    setEncryptedData(newEncryptedData);
  }, [page, limit, category, tag]);

  return (
    <>
      <section className="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {isLoading || isFetching ? (
                <Skeleton />
              ) : blogListData?.status ? (
                <>
                  {" "}
                  <BlogList blogList={blogListData?.data ?? []} />
                  <Pagination
                    page={page}
                    setPage={setPage}
                    limit={limit}
                    setLimit={setLimit}
                    totalItems={blogListData.total}
                  />
                </>
              ) : (
                <DataNoFound error={blogListData?.error ?? ""} />
              )}
            </div>

            <div className="col-lg-4">
              <div className="sidebar-sticky">
                <CategoriesArea />
                <Tags />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
