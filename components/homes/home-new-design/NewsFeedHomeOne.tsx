"use client"
import Link from "next/link";
import Image from "next/image";
import news_data from "../../data/news-data";
import line_img from "../../../public/assets/img/icon/line.png";
import Slider from "react-slick";
import { useRef } from "react";

const setting = {
    arrows: false, 
    infinite: true, 
    speed: 300, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    centerMode: false, 
    // centerPadding: '160px',
    responsive: [ 
        { 
        breakpoint: 1200, 
        settings: { 
            slidesToShow: 2, 
            slidesToScroll:1, 
            infinite: true, 
            dots: true, 
            centerMode: false, 
        } 
        }, 
        { 
        breakpoint: 992, 
        settings: { 
            slidesToShow: 2, 
            slidesToScroll: 1, 
            arrows: false, 
            centerMode: false, 
        } 
        }, 
        { 
        breakpoint: 767, 
        settings: { 
            slidesToShow: 1, 
            slidesToScroll: 1, 
            arrows: false, 
        }
    
        }
 
   ]
}

const NewsFeedHomeOne = () => {
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

    return (
        <>
            <section className="news-feed-area gray-bg pt-115 pb-115">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2>Latest Blogs</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row slick-initialized slick-slider">
                        <button onClick={handlePrevClick} type="button" className="slick-prev slick-arrow">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button onClick={handleNextClick} type="button" className="slick-next slick-arrow">
                            <i className="fas fa-chevron-right"></i>
                        </button> 
                        <Slider {...setting} ref={sliderRef} data-wow-delay="0.3s">
                            {news_data.map((item, i) => 
                                <div key={i} className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="latest-feed mb-45 wow fadeInUp  animated" data-wow-delay="0.3s">
                                        <div className="news-feed-img">
                                            <Link href="#"><Image src={item.news_thumb} alt="hector-ai" /></Link>
                                        </div>
                                        <div className="news-feed-info">
                                            <div className="news-feed-mata">
                                                <ul>
                                                    <li><Image src={item.avatar} alt="hector-ai" /> <span><a href="#">{item.name}</a></span></li>
                                                    <li><span><i className="fas fa-calendar-week"></i> {item.date}</span></li>
                                                </ul>
                                            </div>
                                            <div className="news-feed-titles">
                                                <h4><a href="#">{item.title}</a></h4>
                                                <p>{item.news_blog}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            )} 
                        </Slider> 
                    </div>
                    {/* <div className="row mt-60">
                        <div className="col-md-12">
                            <div className="news-feed-bottom-img">
                                <Image src={line_img} alt="hector-ai" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default NewsFeedHomeOne;