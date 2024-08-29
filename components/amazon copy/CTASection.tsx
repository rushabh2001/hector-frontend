import Image from "next/image";
import server_img from "../../public/assets/img/hector/report-search-term.e077c286.png";
interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
    description: string;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    title: "Maximize Your ADs Efficiency",
    sub_title: "",
    description: "",
}
const {bg_img, sub_title, title, description} = hero_content

const CTASection = () => {
    return (
        <>
            <section className="cta-section pb-70 pt-70">
                    {/* <div className="single-slider slider-height" style={{backgroundImage: `url(${bg_img})`}}> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 align-items-center d-flex">
                            <div className="text-container column-text-right text-left">
                                <h2 className="cta-title wow fadeInUp animated" data-wow-delay="0.6s">
                                    {title}
                                </h2>
                         
                                <p className="cta-desc d-block wow fadeInUp animated" data-wow-delay="0.3s">Book your free demo today to get best offer!</p>
                             
                                {/* <div className="hero-section-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                  
                                    <a href="#" className="btn btn-border">Learn More</a>
                                </div>  */}
                            </div>
                        </div>
                        <div className="col-xl-2  align-items-center d-flex justify-content-end">
                            <a href="#" className="btn btn-white mx-0">Book a Demo</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTASection;