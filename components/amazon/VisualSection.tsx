import Image from "next/image";
import server_img from "../../public/assets/img/hector/amazon-Picture4.png";
interface hero_content_type {
    sub_title: string;
    title: string;
}
const hero_content: hero_content_type = {
    sub_title: "Visualization of performance metrics based on seller & vendor sales, order, traffic & AOV",
    title: "Get a complete visualization of seller / Vendor & Ad / Organic performance",
}
const {sub_title, title} = hero_content

const VisualSection = () => {
    return (
        <>
            <section className="service-area  hero-service-area position-relative">
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
                                {/* <div className="hero-section-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                    <a href="/book-demo" className="btn btn-2 mx-0">Book a Demo</a>
                                </div>  */}
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

export default VisualSection;