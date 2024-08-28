"use client"
import Tags from "../Tags";
import Link from "next/link";
import Image from "next/image";
import AboutMe from "../AboutMe";
import SearchBox from "../SearchBox";
import CategoriesArea from "../CategoriesArea";
import PopularNewsFeeds from "../PopularNewsFeeds";
import SocialLinks from "../../common/social-links";

import instafed_img_1 from "../../../public/assets/img/blog/ins1.jpg";
import instafed_img_2 from "../../../public/assets/img/blog/ins2.jpg";
import instafed_img_3 from "../../../public/assets/img/blog/ins3.jpg";
import instafed_img_4 from "../../../public/assets/img/blog/ins4.jpg";
import instafed_img_5 from "../../../public/assets/img/blog/ins5.jpg";
import instafed_img_6 from "../../../public/assets/img/blog/ins1.jpg";

import banner from "../../../public/assets/img/hector/1705056274457.jpeg";
import blog_img_1 from "../../../public/assets/img/blog/b1.jpg";
import blog_img_2 from "../../../public/assets/img/blog/b2.jpg"; 

import blog_slider_1 from "../../../public/assets/img/blog/b3.jpg";
import blog_slider_2 from "../../../public/assets/img/blog/b4.jpg";
import blog_slider_3 from "../../../public/assets/img/blog/b5.jpg";

import Slider from "react-slick";
import { useRef, useState } from "react";
import VideoPopup from "../../modals/video-popup";
import ContactForm from "../../blog-details/ContactForm";
// blog content
const blog_content =  [ 
    {
        id: 1, 
        cls: "format-image",
        just_thumb: true,
        img: blog_img_1,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "But there is a downside. Simply running a search for medical blogs.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 2, 
        cls: "format-video",
        video: true,
        videoID: "Y6MlVop80y0",
        img_thumb: blog_img_2,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "When Do We Need A Design System? An Interview With Brad Frost.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 3, 
        cls: "format-gallery", 
        slider: true,
        slider_img: [
            blog_slider_1,
            blog_slider_2,
            blog_slider_3,
        ],
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "Exploring The Latest Web Design Trends Together With Be Theme?.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 4, 
        cls: "format-audio",
        audio: true,
        audioID: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/469608615&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        img_thumb: blog_img_1,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "If you find yourself constantly bookmarking health sections on news.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },

] 
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
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
const BlogArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    // const sliderRef = useRef()
    const sliderRef = useRef<Slider | null>(null);

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
    return (
        <>
            <section className="blog-area gray-bg pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8"> 
                            <div className="container">
                                <div className="row">
                                    {blog_content.map((item, i)  => 
                                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="latest-feed mb-45 wow fadeInUp  animated" data-wow-delay="0.3s">
                                                <div className="news-feed-img">
                                                    <Link href="/blog-details"><Image src={banner} alt="hector-ai" /></Link>
                                                </div>
                                                <div className="news-feed-info">
                                                    <div className="news-feed-mata">
                                                        <ul>
                                                            {/* <li><Image src={item.avatar} alt="hector-ai" /> <span><a href="#">{item.name}</a></span></li> */}
                                                            <li><span><i className="fas fa-calendar-week"></i> {item.date}</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="news-feed-titles">
                                                        <h4><a href="/blog-details">{item.title}</a></h4>
                                                        <p>{item.sm_des}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   


                                    )} 
                                </div>
                            </div>


                            <div className="basic-pagination basic-pagination-2 mb-4 text-center">
                                <ul>
                                <li><Link href="#"><i className="fas fa-angle-double-left"></i></Link></li>
                                <li><Link href="#">01</Link></li>
                                <li className="active"><Link href="#">02</Link></li>
                                <li><Link href="#">03</Link></li>
                                <li><Link href="#"><i className="fas fa-ellipsis-h"></i></Link></li>
                                <li><Link href="#"><i className="fas fa-angle-double-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="sidebar-sticky">
                                <CategoriesArea /> 
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
                videoId={"g1u2_-Xz8qw"} />
            {/* video modal end */}
        </>
    );
};

export default BlogArea;