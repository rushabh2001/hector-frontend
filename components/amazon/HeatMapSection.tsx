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
    title: "Easy AD Scheduling",
    sub_title: "",
    description: "",
}
const {bg_img, sub_title, title, description} = hero_content

const HeatMapSection = () => {
    return (
        <>
            <section className="service-area service-area-1 position-relative pb-70 pt-70">
                    {/* <div className="single-slider slider-height" style={{backgroundImage: `url(${bg_img})`}}> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 align-items-center d-flex">
                            <div className="text-container column-text-right text-left">
                                <h2 className="title wow fadeInUp animated" data-wow-delay="0.6s">
                                    {title}
                                </h2>
                                <h4 className="wow fadeInUp animated" data-wow-delay="0.6s">
                                    {sub_title}
                                </h4>
                                <p className="d-block wow fadeInUp animated" data-wow-delay="0.3s">Create data-driven day parting schedules and access a comprehensive schedule performance dashboard.</p>
                                <p className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                    No more downloading, uploading and making pivots to understand your amazon Advertising performance. Get all your reports datapoint blended together on One Unified Hector Dashboard.
                                </p>
                                {/* <div className="hero-section-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                    <a href="#" className="btn btn-2 mx-0">Book a Demo</a>
                                    <a href="#" className="btn btn-border">Learn More</a>
                                </div>  */}
                            </div>
                        </div>
                        <div className="col-xl-6 align-items-center d-flex">
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

export default HeatMapSection;