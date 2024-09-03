"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
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
import AboutMe from "../AboutMe";
import SearchBox from "../SearchBox";
import PopularNewsFeeds from "../PopularNewsFeeds";
import SocialLinks from "../../common/social-links";
import VideoPopup from "../../modals/video-popup";

// slider setting
const setting = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
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

  // const sliderRef = useRef()
  const sliderRef = useRef<Slider | null>(null);
  const { data, isLoading, isFetching } = useGetBlogList(encryptedData);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

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
      <section className="blog-area gray-bg pt-120 pb-80">
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
                {/* <PopularNewsFeeds />  */}
              </div>
              {/* <SearchBox />  */}
              {/* <AboutMe  />  */}
              {/* <PopularNewsFeeds />  */}

              {/*<div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                <span className="animate-border"></span>
                                <h3 className="widget-title">Social Profile</h3>
                                </div>
                                <div className="social-profile">
                                    <SocialLinks /> 
                                </div>
                            </div>
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                <span className="animate-border"></span>
                                <h3 className="widget-title">Instagram Feeds</h3>
                                </div>
                                <ul id="Instafeed">
                                <li><Link href="#"><Image src={instafed_img_1} alt="theme-pure" /></Link></li>
                                <li><Link href="#"><Image src={instafed_img_2} alt="theme-pure" /></Link></li>
                                <li><Link href="#"><Image src={instafed_img_3} alt="theme-pure" /></Link></li>
                                <li><Link href="#"><Image src={instafed_img_4} alt="theme-pure" /></Link></li>
                                <li><Link href="#"><Image src={instafed_img_5} alt="theme-pure" /></Link></li>
                                <li><Link href="#"><Image src={instafed_img_6} alt="theme-pure" /></Link></li>
                                </ul>
                            </div>
                            <Tags /> 
                            <div className="widget mb-40 p-0 b-0">
                                <div className="banner-widget">
                                <Link href="#"><Image src={banner} alt="theme-pure" /></Link>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"g1u2_-Xz8qw"}
      />
      {/* video modal end */}
    </>
  );
};

export default BlogArea;
