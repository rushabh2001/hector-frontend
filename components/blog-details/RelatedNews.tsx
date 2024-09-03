"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Blog } from "../types";
import { encryptData, formatDate } from "../utils/utils";
import { useGetBlogList } from "../blogs/services";

const setting = {
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false,
  // centerPadding: '160px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const RelatedNews = () => {
  const [blogListData, setBlogListData] = useState<Blog[]>();

  const encryptedData = encryptData(
    JSON.stringify({
      page: 1,
      limit: 20,
    })
  );

  const { data } = useGetBlogList(encryptedData);

  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    if (data) {
      setBlogListData(data.data);
    }
  }, [data]);

  return (
    <>
      <section className="related-news news-feed-area gray-bg pt-115 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title mb-30">
                <h2 className="related-title">Related Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row slick-initialized slick-slider">
            <button
              onClick={handlePrevClick}
              type="button"
              className="slick-prev slick-arrow"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={handleNextClick}
              type="button"
              className="slick-next slick-arrow"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <Slider {...setting} ref={sliderRef} data-wow-delay="0.3s">
              {blogListData?.map((blog) => (
                <div
                  key={blog.blog_id}
                  className="col-xl-12 col-lg-12 col-md-12"
                >
                  <div
                    className="latest-feed mb-45 wow fadeInUp  animated"
                    data-wow-delay="0.3s"
                  >
                    <div className="news-feed-img">
                      <Link href={`/blog/${blog.slug}`} scroll={false}>
                        <Image
                          src={blog?.feature_image}
                          alt={blog?.alt_text}
                          width={500}
                          height={250}
                        />
                      </Link>
                    </div>
                    <div className="news-feed-info">
                      <div className="news-feed-mata">
                        <ul>
                          <li>
                            <span>
                              <i className="fas fa-calendar-week"></i>{" "}
                              {formatDate(blog?.date, "DD MMM, YYYY")}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="news-feed-titles">
                        <h4>
                          <a href="#">{blog?.title}</a>
                        </h4>
                        <p>{blog?.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedNews;
