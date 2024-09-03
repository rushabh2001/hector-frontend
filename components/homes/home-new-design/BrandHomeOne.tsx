"use client"
import Slider  from 'react-slick';
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
// brand data images 
import brand_1 from "../../../public/assets/img/hector/noise-logo.png";
import brand_2 from "../../../public/assets/img/hector/manmatters-logo.webp";
import brand_3 from "../../../public/assets/img/hector/bodywise_logo.png";
import brand_4 from "../../../public/assets/img/logo/659b1510133d5685daa11e56_a2sb0cjotxoturgefust.png";
import brand_5 from "../../../public/assets/img/logo/2148b8f180f8f2696b1aab724e929091.w3296.h3296.png";
import brand_6 from "../../../public/assets/img/logo/8055890ead8a012d7d8288525d1a698a.w3000.h3000.jpg";
import brand_7 from "../../../public/assets/img/logo/beatXP-grey-logo.png";
import brand_8 from "../../../public/assets/img/logo/arlbjmfg4weitt5dkutd-ezgif.com-webp-to-png-converter.png";
import brand_9 from "../../../public/assets/img/logo/Article-Main-Image-5-2.png";
import brand_10 from "../../../public/assets/img/logo/arvind.png";
import brand_11 from "../../../public/assets/img/logo/CAMPUS.NS_BIG.D-d06b3db4-Copy.png";
import brand_12 from "../../../public/assets/img/logo/Duroflex-Logo-PNG@.png";
import brand_13 from "../../../public/assets/img/logo/Emami-Group.png";
import brand_14 from "../../../public/assets/img/logo/Kapiva-new-logo--1-.png";
import brand_15 from "../../../public/assets/img/logo/lifelong.png";
import brand_16 from "../../../public/assets/img/logo/logo-col.png";
import brand_17 from "../../../public/assets/img/logo/nua.png";
import brand_18 from "../../../public/assets/img/logo/Orient_Electric_logo.svg.png";
import brand_19 from "../../../public/assets/img/logo/tata-consumer-products-logo-91ABE5D997-seeklogo.com.png";
import brand_20 from "../../../public/assets/img/logo/White_Logo.png";
// brand data type
interface brand_images_type {
    img: StaticImageData;
}
// brand data 
const brand_images: brand_images_type[] = [
    {img: brand_1},
    {img: brand_2},
    {img: brand_3},
    {img: brand_4},
    {img: brand_5},
    {img: brand_6},
    {img: brand_7},
    {img: brand_8},
    {img: brand_9},
    {img: brand_10},
    {img: brand_11},
    {img: brand_12},
    {img: brand_13},
    {img: brand_14},
    {img: brand_15},
    {img: brand_16},
    {img: brand_17},
    {img: brand_18},
    {img: brand_19},
    {img: brand_20},
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
const BrandHomeOne = ({style} : any) => {
    const sliderRef = useRef(null);
    return (
        <> 
            <section className={`brand-area ${style && "pt-120"} pb-100 logo-home-section`}>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <h6 className="hector-landing__testimonials--title">TRUSTED BY</h6>
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

export default BrandHomeOne;