"use client"
import Link from "next/link";
import Image from "next/image";
import news_data from "../../data/news-data";
import line_img from "../../../public/assets/img/icon/line.png";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import report_data, { report_tab_type } from "../../data/report-tab-data";
import img_thumb from "../../../public/assets/img/hector/report-search-term.e077c286.png";
import feature_data from "../../data/feature-tab-data";

const setting = {
    arrows: false, 
    infinite: false, 
    speed: 300, 
    // slidesToShow: 3, 
    // slidesToScroll: 1, 
    centerMode: true, 
    // centerPadding: '160px',
    // asNavFor: '.slider',
    focusOnSelect: true,
    responsive: [ 
        { 
        breakpoint: 1200, 
        settings: { 
            slidesToShow: 2, 
            slidesToScroll:1, 
            infinite: false, 
            dots: true, 
            centerMode: true, 
        } 
        }, 
        { 
        breakpoint: 992, 
        settings: { 
            slidesToShow: 2, 
            slidesToScroll: 1, 
            arrows: false, 
            centerMode: true, 
            infinite: false, 
        } 
        }, 
        { 
        breakpoint: 767, 
        settings: { 
            slidesToShow: 1, 
            slidesToScroll: 1, 
            arrows: true, 
            infinite: false, 
        }
    
        }
 
   ]
}

const ReportSection = () => {
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

    const [slider1, setSlider1] = useState(null);
    const [nav1, setNav1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [reportTabData, setReportTabData] = useState<report_tab_type>()

        useEffect(() => {
        setNav1(slider1);
        // setSlider1(slider)
        }, [slider1]);

        const settings = {
            onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
            // lazyLoad: true,
            asNavFor: ".slider-nav",
            focusOnSelect: true,
            // centerMode: true, 
            // slidesToShow: 7, 
            slidesToScroll: 1, 
            // centerPadding: '60px',   
            // variableWidth: true,    
            vertical: true,
            verticalSwiping: true,
            // arrows: false, 
            infinite: false, 
            nextArrow: (
                <div>
                  <div className="next-slick-arrow"> <i className="fas fa-chevron-down"></i> </div>
                </div>
              ),
              prevArrow: (
                <div>
                  <div className="prev-slick-arrow"> <i className="fas fa-chevron-up"></i> </div>
                </div>
              ),
          };

          useEffect(() => {
            setReportTabData(report_data.find(data => data.id === currentSlide + 1))
          }, [currentSlide])
          
    return (
        <>
            <div className="container report-tab-container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hector-landing__reports--header">
                                        <h6 className="hector-landing__reports--header-title">Reports Overview</h6>
                                        <h4 className="hector-landing__reports--header-subtitle">Beat your Performance Goals with Hector</h4>
                                        <p className="hector-landing__reports--header-description">Leverage cutting-edge ad tech to scale campaign results across marketplaces</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">                             
                                    <div className="row slick-initialized slick-slider">
                                        {/* <button onClick={handlePrevClick} type="button" className="slick-prev slick-arrow">
                                            <i className="fas fa-chevron-left"></i>
                                        </button>
                                        <button onClick={handleNextClick} type="button" className="slick-next slick-arrow">
                                            <i className="fas fa-chevron-right"></i>
                                        </button>  */}
                                        <Slider {...settings}
                                            // ref={sliderRef}
                                            asNavFor={nav1}
                                            // onChange={(slider: any) => {
                                            //     setSlider1(slider.target.value);
                                            //     console.log(slider.target.value);
                                            // }}
                                            // onSlidingStart={(newSliderValue) => console.log('on sliding start: ', newSliderValue)}

                                            ref={(slider:any) => setSlider1(slider)}
                                        >
                                            {report_data.map((item, i) => 
                                                <div key={i} 
                                                    onClick={() => {
                                                        slider1?.slickGoTo(i)
                                                    }}
                                                className="header-tab">
                                                    <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12.75C21.25 7.64137 17.1086 3.5 12 3.5C6.89137 3.5 2.75 7.64137 2.75 12.75C2.75 17.8586 6.89137 22 12 22C17.1086 22 21.25 17.8586 21.25 12.75Z" stroke="#797979" stroke-width="1.5"></path><path d="M9 12.75L11 14.75L15 10.75" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                                                    <span className="tab-head">{item?.thead}</span>
                                                </div>   
                                            )} 
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="thumb-wrapper">
                                        {/* {news_data.map((item, idx) => ( */}
                                            <div
                                            // key={item.id}
                                            // className={currentSlide === idx ? "active": null}
                                            >
                                                    <div className="tab-zero tab-custom-content">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <Image className="report-img" src={img_thumb} alt="hector-ai" />
                                                                    <div className="report-content-wrapper hector-landing__reports--content-body-info">                                                                  
                                                                        <div className="hector-landing__features--tab-content-header--title">{reportTabData?.thead}</div>
                                                                        <div className="hector-landing__features--tab-content-header--description">{reportTabData?.description}</div>
                                                                        <div className="hector-landing__features--tab-content-header--action"><button className="btn btn-2 btn-solid mr-3 hector-landing-btn hector-landing-btn__color-primary" type="button"><span>Book A Demo</span><span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5938 11.9595L16.375 17.3375M5.59375 11.9595H20.5938H5.59375ZM20.5938 11.9595L16.375 7.07812L20.5938 11.9595Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                        {/* ))} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportSection;