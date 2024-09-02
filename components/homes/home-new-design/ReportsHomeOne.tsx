 "use client"
import Link from "next/link";
import Image from "next/image"; 
import React, { useRef } from "react";
import reports_data_type from "../../types/service-types";
// service images 
import service_img_1 from "../../../public/assets/img/hector/report-search-term.e077c286.png";
import service_img_2 from "../../../public/assets/img/hector/report-search-term.e077c286.png";
import service_img_3 from "../../../public/assets/img/hector/report-search-term.e077c286.png";
import service_img_4 from "../../../public/assets/img/hector/report-search-term.e077c286.png";
import service_img_5 from "../../../public/assets/img/hector/report-search-term.e077c286.png";
import service_img_6 from "../../../public/assets/img/hector/report-search-term.e077c286.png"; 

import Slider from "react-slick";

// service data 
 const reports_data: reports_data_type[] = [
    {
        id: 1,
        img: service_img_1,
        title: "Shared Hosting",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore.",
    },
    {
        id: 2,
        img: service_img_2,
        title: "VPS Hosting",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore.",
    },
    {
        id: 3,
        img: service_img_3,
        title: "Reseller Hosting",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore.",
    },
    {
        id: 4,
        img: service_img_4,
        title: "Cloud Hosting",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore.",
    },
    {
        id: 5,
        img: service_img_5,
        title: "Dedicated Hosting",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore.",
    },
    {
        id: 5,
        img: service_img_6,
        title: "Domain Name",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore.",
    },
    
 ]

 interface service_content_type {
    title: string;
    sub_title: string;
}
 const service_content: service_content_type = {
    title: "Our Services",
    sub_title: "Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 }
 const {title, sub_title} = service_content

 const setting2 = {
    arrows: false, 
    infinite: true, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    asNavFor: ".main-content-box"
 }

 const setting = {
    arrows: false, 
    infinite: true, 
    speed: 300, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    centerMode: true, 
    centerPadding: '160px', 
    asNavFor: ".main-content-nav",
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
       }
 
     }
 
   ]
}


 
const ReportsHomeOne = () => { 

    const sliderRef = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider2 | null>(null);

    // const handlePrevClick = ({style} : any) => {
    //   if (sliderRef.current) {
    //     sliderRef.current.slickPrev();
    //   }
    // };
  
    // const handleNextClick = () => {
    //   if (sliderRef.current) {
    //     sliderRef.current.slickNext();
    //   }
    // };

    return (
        <>
            <section className="industries-section bg-color-1">
                {/* <div className="pattern-layer"></div> */}
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="row clearfix">
                            <div className="col-xl-4 col-lg-12 col-sm-12 btn-column">
                                <div className="sec-title light">
                                    <h2 className="main-title white-square">Our Bouquet of Services</h2>
                                </div>
                                <div className="tab-btn-box">
                                    <ul className="tab-btns tab-buttons clearfix">
                                        <Slider2 className="main-content-nav" {...setting2} ref={sliderRef2} data-wow-delay="0.3s">
                                            <li className="tab-btn active-btn" data-tab="#tab-3">
                                                <figure className="icon-box"><Image src={service_img_1} alt="Recruitment company" /></figure>
                                                <h3>Recruitment</h3>
                                            </li>
                                            <li className="tab-btn" data-tab="#tab-4">
                                                <figure className="icon-box"><Image src={service_img_1} alt="Staffing Company" /></figure>
                                                <h3>Staffing</h3>
                                            </li>
                                            <li className="tab-btn" data-tab="#tab-5">
                                                <figure className="icon-box"><Image src={service_img_1} alt="Assessment by HR Consultancy" /></figure>
                                                <h3>Assessment</h3>
                                            </li>
                                            <li className="tab-btn" data-tab="#tab-6">
                                                <figure className="icon-box"><Image src={service_img_1} alt="HR Consultancy" /></figure>
                                                <h3>Consulting</h3>
                                            </li>
                                            <li className="tab-btn" data-tab="#tab-7">
                                                <figure className="icon-box"><Image src={service_img_1} alt="HR Outsourcing" /></figure>
                                                <h3>Outsourcing</h3>
                                            </li>
                                            <li className="tab-btn" data-tab="#tab-8">
                                                <figure className="icon-box"><Image src={service_img_1} alt="Employee training by HR Consultancy" /></figure>
                                                <h3>Training</h3>
                                            </li>
                                        </Slider2> 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-sm-12 content-column">
                                <div className="tabs-content">
                                    <Slider className="main-content-box" {...setting} ref={sliderRef} data-wow-delay="0.3s">
                                        <div className="tab active-tab" id="tab-3">
                                            <div className="inner-box">
                                                <figure className="image-box"><Image src={service_img_1} alt="Recruitment company service" title="Recruitment" /></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Recruitment</p>
                                                        <span>In an era of ever-changing economy, attracting and boarding
                                                            the right talent can be a daunting task. Kaapro, one of the
                                                            reputed recruitment agencies in India, ensures end to end
                                                            services at affordable price in a time bound manner. We
                                                            specialize in Senior Level recruitment which requires specific
                                                            skill &amp; expertise. Sr. Level recruitment also called “Executive
                                                            Search” is very important for any organization. We do have an
                                                            experienced team to fill the top open spot for any organization
                                                            with the best available candidate.</span>
                                                        <a href="./recruitment-process" className="btn-one mt-3 ml-0">Know
                                                            more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                 
                                     <div className="tab" id="tab-4">
                                        <div className="inner-box">
                                            <figure className="image-box"><Image src={service_img_1} alt="Staffing solutions services" title="Staffing" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Staffing</p>
                                                    <span>To go with the ebb and flow of the current market trends, we
                                                        provide our clients with efficient staffing solutions that have
                                                        proven to be a better option for flexible workforce &amp; compliance
                                                        management.</span>
                                                    <a href="./staffing" className="btn-one mt-3 ml-0">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-5">
                                        <div className="inner-box">
                                            <figure className="image-box"><Image src={service_img_1} alt="Assessment service by HR Consultancy" title="HR Assessment" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Assessment</p>
                                                    <span>Every organization wants to ensure that they recruit a
                                                        best-fit candidate for fresh recruitment or an internal
                                                        movement. Doing this only through an interview is a subjective
                                                        procedure. So Assessment can be used for the purpose, which is
                                                        an objective way to do that.</span>
                                                    <a href="./assessment" className="btn-one mt-3 ml-0">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-6">
                                        <div className="inner-box">
                                            <figure className="image-box"><Image src={service_img_1} alt="HR Consultancy service" title="HR Consultancy" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Consulting</p>
                                                    <span>Our HR Consultancy division aims to provide solutions to our
                                                        clients when they want any consulting related to HR including
                                                        PMS, HR Policy Manual, Compensation benchmarking, ROR mapping
                                                        and so on.</span>
                                                    <a href="./consulting" className="btn-one mt-3 ml-0">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-7">
                                        <div className="inner-box">
                                            <figure className="image-box"><Image src={service_img_1} alt="HR outsourcing services" title="HR Outsourcing" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Outsourcing</p>
                                                    <span>We partner with clients to offer a talent acquisition solution
                                                        that is best suited for the organization, ranging from a
                                                        customized RPO solution to a standardized RPO package with goals
                                                        focusing on quality, cost-to-hire, and time-to-fill.</span>
                                                    <a href="./outsourcing" className="btn-one mt-3 ml-0">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-8">
                                        <div className="inner-box">
                                            <figure className="image-box"><Image src={service_img_1} alt="Employee training by HR Consultancy" title="Employee Training" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Training</p>
                                                    <span>All jobs require employees to have certain skills and
                                                        attributes that enable them to do their work efficiently and
                                                        effectively. We offer a wide genre of soft skill training to our
                                                        clients to choose from.</span>
                                                    <a href="./training" className="btn-one mt-3 ml-0">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                                    </Slider> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReportsHomeOne;