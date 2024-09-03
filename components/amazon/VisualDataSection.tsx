import Image from "next/image";
import server_img from "../../public/assets/img/hector/tab_1.7f885e86.png";
interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
    description: string;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    title: "Dashboard Insights",
    sub_title: "",
    description: "Get a complete visualization of seller / Vendor & Ad / Organic performance. Visualization of performance metrics based on seller & vendor sales, order, traffic & AOV.",
}
const {bg_img, sub_title, title, description} = hero_content

const VisualDataSection = () => {
    return (
        <>
            <section className="service-area service-area-2 position-relative pb-70 pt-70">
                    {/* <div className="single-slider slider-height" style={{backgroundImage: `url(${bg_img})`}}> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 align-items-center d-flex">
                            <div className="service-image-container wow fadeInUp animated" data-wow-delay="1.3s">
                                <Image src={server_img}  alt="amazon-service" />
                            </div>
                        </div>
                        <div className="col-xl-6 align-items-center d-flex">
                            <div className="text-container column-text-left text-left">
                                <h2 className="title wow fadeInUp animated" data-wow-delay="0.6s">
                                    {title}
                                </h2>
                                <h4 className="wow fadeInUp animated" data-wow-delay="0.6s">
                                    {sub_title}
                                </h4>
                                <p className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                    {description}
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default VisualDataSection;