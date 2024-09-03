import Image from "next/image";
import server_img from "../../public/assets/img/hector/amazon-Picture1.png";
interface hero_content_type {
    sub_title: string;
    title: string;
}
const hero_content: hero_content_type = {
    sub_title: "The Ultimate Platform for Amazon Ads Optimization",
    title: "Scale Your Business Profitably With Hector",
}
const {sub_title, title} = hero_content

const HeroSection = () => {
    return (
        <>
            <section className="hero-service-area position-relative">
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
                                <div className="hero-section-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                    <a href="#" className="btn btn-2 mx-0">Book a Demo</a>
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