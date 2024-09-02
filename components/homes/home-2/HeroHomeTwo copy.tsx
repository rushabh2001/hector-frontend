import Image from "next/image";
import hosting_bg  from "../../../public/assets/img/hector/landing-hero.14095905.png"
import BookADemo from "../../common/BookADemoOld";


interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
    bold_text: string;
    price: number;
    offer: number;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/hector/background-pattern.svg",
    sub_title: "Grow your Business Profitably.",
    title: "The Most Powerful Platform for",
    bold_text: "Amazon & Flipkart Ads Optimisation",
    price: 64,
    offer: 30,
}
const {bg_img, sub_title, title, bold_text, price, offer} = hero_content


const HeroHomeTwo = () => {
    return (
        <>
            <section className="slider-area position-relative fix main-section-one">
                <div className="slider-ac">
                    <div className="single-slider d-flex pt-130 align-items-center slider-height">
                        <div className="container">
                            <div className="row"  style={{backgroundImage: `url(${bg_img})`}}>
                                <div className="col-xl-6">
                                    <div className="slider-text slider-text-2">
                                        <h2 className="wow fadeInUp animated" data-wow-delay="0.6s">{title}<br /><span>{bold_text}</span></h2>
                                        <p className="d-block wow fadeInUp animated" data-wow-delay="0.3s">{sub_title}</p>
                                        <BookADemo /> 
                                        {/* <div className="slider-text-offer wow fadeInUp animated" data-wow-delay="0.9s">
                                            <div className="row">
                                                <div className="col-xl-2 col-lg-2 col-md-3">
                                                    <div className="single-offer mb-30">
                                                       <span>As low as</span>
                                                        <h3>${price}/Yr</h3>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-3">
                                                    <div className="single-offer pl-65 mb-30">
                                                       <span>Get offer</span>
                                                        <h3>-{offer}%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-xl-6 d-none d-xl-block align-content-center">
                                   <div className="slider-bottom-imgs wow fadeInRight animated" data-wow-delay="1.3s">
                                      <Image src={hosting_bg} alt="hectorai" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroHomeTwo;