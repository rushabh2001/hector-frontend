"use client"
import Slider  from 'react-slick';
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
// brand data images 
import brand_1 from "../../../public/assets/img/hector/noise-logo.png";
import brand_2 from "../../../public/assets/img/hector/download.png";
import brand_3 from "../../../public/assets/img/hector/bodywise-logo.png";
// brand data type
interface brand_images_type {
    img: StaticImageData;
}
// brand data 
const brand_images: brand_images_type[] = [
    {img: brand_1},
    {img: brand_2},
    {img: brand_3},
]
// slider setting
const setting = {
    dots: false, 
    arrows: false, 
    infinite: true, 
    speed: 300, 
   slidesToShow: 3, 
   slidesToScroll: 1, 
   responsive: [ 
     { 
       breakpoint: 1024, 
       settings: { 
         slidesToShow: 4, 
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
            <section className={`brand-area ${style && "pt-120"} pb-100`}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
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