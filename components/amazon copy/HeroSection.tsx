import Image from "next/image";
import server_img from "../../public/assets/img/hector/Data_trends_re_2cdy.png";
interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    sub_title: "The Ultimate Platform for Amazon Ads Optimization",
    title: "Scale Your Business Profitably With Hector",
}
const {bg_img, sub_title, title} = hero_content

const HeroSection = () => {
    return (
        <>
            <section className="hero-service-area position-relative">
                    {/* <div className="single-slider slider-height" style={{backgroundImage: `url(${bg_img})`}}> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 align-items-center d-flex">
                            <div className="hero-text-container text-left">
                                <h2 className="title wow fadeInUp animated" data-wow-delay="0.6s">
                                    {title}
                                </h2>
                                <p className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                    {sub_title}
                                </p>
                                {/* <p className="hero-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                                <div className="hero-section-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                    <a href="#" className="btn btn-2 mx-0">Book a Demo</a>
                                    {/* <a href="#" className="btn btn-border">Learn More</a> */}
                                </div> 
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="service-image-container wow fadeInUp animated" data-wow-delay="1.3s">
                                <Image src={server_img}  alt="amazon-service" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;