import Image from "next/image"; 
import services_data_type from "../types/service-types";
// service images 
import service_img_1 from "../../public/assets/img/hector/amazon-marketing-cloud.png";
import service_img_2 from "../../public/assets/img/hector/rapid-retail-analytics.png";
import service_img_3 from "../../public/assets/img/hector/amazon-marketing-stream.png";
// service data 
 const services_data: services_data_type[] = [
    {
        id: 1,
        img: service_img_1,
        title: "Amazon Marketing Cloud",
        sm_des: "Leverage the power of AMC to reach your target shoppers",
    },
    {
        id: 2,
        img: service_img_2,
        title: "Rapid Retail Analytics",
        sm_des: "Get hourly vendor & seller central sales data to make data-backed decisions",
    },
    {
        id: 3,
        img: service_img_3,
        title: "Amazon Marketing Stream",
        sm_des: "Get hourly insights into various advertising metrics to optimize your ads effectively",
    },
 ]

 interface service_content_type {
    title: string;
    sub_title: string;
}
 const service_content: service_content_type = {
    title: "Leverage cutting-edge technology to achieve scalable profitability",
    sub_title: "",
 }
 const {title, sub_title} = service_content

 
const IconSectionThree = () => { 
    return (
        <>
            <section className="icon-service-section services-area pt-115 pb-95">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                            <div className="section-title mb-30 text-center">
                                <h2>{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.img} alt="hector-ai" />
                                    </div>
                                    <div className="services-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.sm_des}</p>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default IconSectionThree;