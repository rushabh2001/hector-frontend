"use client"
import Slider  from 'react-slick';
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
// brand data images 
import brand_1 from "../../public/assets/img/hector/noise-logo.png";
import brand_2 from "../../public/assets/img/hector/manmatters-logo.webp";
import brand_3 from "../../public/assets/img/hector/bodywise_logo.png";
// brand data type
interface brand_images_type {
    img: StaticImageData;
}
// brand data 
const brand_images: brand_images_type[] = [
    {img: brand_1},
    {img: brand_2},
    {img: brand_3},
    {img: brand_1},
    {img: brand_2},
    {img: brand_3},
    {img: brand_1},
    {img: brand_2},
    {img: brand_3}, 
]
// slider setting
const setting = {
  speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 3,
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
   responsive: [ 
     { 
       breakpoint: 1024, 
       settings: { 
         slidesToShow: 3, 
         slidesToScroll:1, 
         infinite: true, 
         dots: false, 
       } 
     }, 
     { 
       breakpoint: 600, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll: 2
 
       } 
     }, 
     { 
       breakpoint: 480, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll: 1 
       } 
     } 
   ] 
 }
const LogoSlider = ({style} : any) => {
    const sliderRef = useRef(null);
    return (
        <> 
            <section className={`service-logo-slider brand-area ${style && "pt-120"} pb-100`}>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <h6 className="hector-landing__testimonials--title">TRUSTED BY BEST</h6>
                      <Slider {...setting} ref={sliderRef} className="row brand-active">
                          {brand_images.map((item, i) => 
                              <div key={i} className="col-12">
                                  <div className="single-brand">
                                      <Image src={item.img} alt="hectorai" />
                                  </div>
                              </div>                        
                          )} 
                      </Slider>
                    </div>
                  </div>
                </div>
            </section>
        </>
    );
};

export default LogoSlider;