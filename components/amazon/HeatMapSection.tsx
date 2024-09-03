import Image from "next/image";
import server_img from "../../public/assets/img/hector/amazon-Picture2.png";
interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
    description: string;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    title: "Unlock Instant Amazon Insights with HectorGPT",
    sub_title: "Harness the power of cutting-edge AI to discover comprehensive Amazon insights.",
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
                                <p className="wow fadeInUp animated" data-wow-delay="0.6s">
                                    {sub_title}
                                </p>
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