 "use client"
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import icon_1 from "../../../public/assets/img/hector/tab_1.7f885e86.png";
import icon_2 from "../../../public/assets/img/hector/tab_2.1827d8d5.png";
import icon_3 from "../../../public/assets/img/hector/tab_3.a5bc6c21.png";
import icon_4 from "../../../public/assets/img/hector/tab_4.779778af.png";
import icon_5 from "../../../public/assets/img/hector/tab_5.39032a9f.png";
import icon_6 from "../../../public/assets/img/hector/tab_6.ef7b2d97.png";
import icon_7 from "../../../public/assets/img/hector/tab_7.4876684a.png";
import icon_8 from "../../../public/assets/img/hector/tab_8.3844b092.png";
import icon_9 from "../../../public/assets/img/hector/tab_9.0936b5ee.png";
import icon_10 from "../../../public/assets/img/hector/tab_10.064354eb.png";
import icon_11 from "../../../public/assets/img/hector/tab_11.83bcb22d.png";
import React, { useRef } from "react";
import Slider from "react-slick";
// price data tyep
interface price_data_type {
    id: number;
    icon: StaticImageData;
    title: string;
    subtitle: string;
    price: number;
    sm_des: string;
}

const setting = {
    arrows: false, 
    infinite: true, 
    speed: 300, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    centerMode: true, 
    centerPadding: '160px', 
   responsive: [ 
     { 
       breakpoint: 1200, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll:1, 
         infinite: true, 
         dots: false, 
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
         centerMode: false, 
         centerPadding: '10px', 
       }
     }
 
   ]
}

// price data 
const price_data: price_data_type[] = [
    {
        id: 1,
        icon: icon_1,
        title: "Unified Dashboard",
        subtitle: "One Unified Dashboards for all Amazon Report",
        price: 34,
        sm_des: "No more downloading, uploading and making pivots to understand your amazon Advertising performance. Get all your reports datapoint blended together on One Unified Hector Dashboard.",
    },
    {
        id: 2,
        icon: icon_2,
        title: "Live Reporting",
        subtitle: "Live Reporting Dashboard",
        price: 45,
        sm_des: "See your Yesterday's data live on your Hector Dashboard when you start your day every morning without any data lagging",
    },
    {
        id: 3,
        icon: icon_3,
        title: "Live Reporting",
        subtitle: "Data Variation less than 1%",
        price: 65,
        sm_des: "We are proud of consistently proving that your datapoints show less than 1% Variation including Orders, Revenue, ROAS, ACOS because we download last 14 Days Performance Data everyday to miss no delayed 14 days attribution data.",
    },
    {
        id: 4,
        icon: icon_4,
        title: "Data Variation less than 1%",
        subtitle: "Own all your Amazon Data with Unlimited Data Storage forever",
        price: 65,
        sm_des: "Don't restrict yourself from being able to only have access to last 60 Days or 90 days data of Amazon Advertising Data or Seller Central or Vendor Central Data.",
    },
    {
        id: 5,
        icon: icon_5,
        title: "Blend your Datapoints across multiple Amazon Reports",
        subtitle: "Blend your Datapoints across multiple Amazon Reports",
        price: 65,
        sm_des: "No more of seeing your data in isolation, bring your datapoints together to make sense of how one datasets impacts the other. example how your Advertising investment in a particular ASIN increases the Organic Revenue too.",
    },
    {
        id: 6,
        icon: icon_6,
        title: "Most Powerful Search Bar",
        subtitle: "Hector's Most Powerful Search Bar",
        price: 65,
        sm_des: "Search for any answers from across any data points from any report and get the answer in jiffy with the Hector's Intelligent Search Bar",
    },
    {
        id: 7,
        icon: icon_7,
        title: "Intelligent Dynamic Rules",
        subtitle: "Create Intelligent Dynamic Rules to build efficiency",
        price: 65,
        sm_des: "Switch on & off Campaigns, Ad Group or any Targeting or Increase or Decrease any Bids with live dynamic Rules based on custom Triggers.",
    },
    {
        id: 8,
        icon: icon_8,
        title: "Compare like never before",
        subtitle: "Compare like never before",
        price: 65,
        sm_des: "Compare any date range and any number of date range to know how your campaigns or targeting worked or any of your bid changes worked after you implemented",
    },
    {
        id: 9,
        icon: icon_9,
        title: "Performance at Product Category & Sub-Category Level",
        subtitle: "Performance at Product Category & Sub-Category Level",
        price: 65,
        sm_des: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 10,
        icon: icon_10,
        title: "The Most Granular Breakdown of Advertising Report",
        subtitle: "The Most Granular Breakdown of Advertising Report",
        price: 65,
        sm_des: "Learn from the most granular data points of what worked and what didn't work with 1 Click. example: find out, if 7 day lookback period worked or 30 days when you targeted your ASIN against your competitor ASIN with View or Purchase Marketing Targeting.",
    },
    {
        id: 11,
        icon: icon_11,
        title: "Live",
        subtitle: "Take Action that changes live on Amazon Ad Account",
        price: 65,
        sm_des: "Don't just see the Optimisation Opportunity but take instant action by switching on & off any campaign, Ad Group or Targeting to changing a bid to changing the Bid Adjustment and also change daily Campaigns budget.",
    },
]


const PricingHomeOne = () => {

    const sliderRef = useRef<Slider | null>(null);

    const handlePrevClick = ({style} : any) => {
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
           <section className="pricing-area gray-bg pt-115 pb-120">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2><span className="colored-text">Features</span> & Power Ups</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...setting} ref={sliderRef} data-wow-delay="0.3s">
                            {price_data.map((item, i)  =>
                                <div  key={i} className="pricing-wrapper white-bg text-center wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="price-icon mb-15">
                                        <Image src={item.icon} alt="hector-ai" />
                                    </div>
                                    <div className="pricing-title mb-20">
                                        {/* <h3>{item.title}</h3> */}
                                        <h3>{item.subtitle}</h3>
                                    </div>
                                    <div className="price-body">
                                        {/* <h2>{item.price} <span className="month">/mo</span></h2> */}
                                        <p>{item.sm_des}</p>
                                    </div>
                                    <div className="price-link">
                                        <Link href="#" className="btn btn-2 btn-solid">View Details</Link>
                                    </div>
                                </div>     
                            )} 
                        </Slider> 
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pricing-more-link text-center mt-50">
                                 <p>See all the features and <Link href="#">book a demo</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default PricingHomeOne;