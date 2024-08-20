import Link from "next/link";

const AboutUs = () => {
    return (
        <>
            <section className="news-feed-area pb-115">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <p className="hector-landing__about-us">
                                <span className="hector-landing__about-us--title">ABOUT US</span>
                                <span className="hector-landing__about-us--description">
                                    Hector offers the definitive Unified Dashboard for the modern Amazon advertiser. Equip yourself and your team with detailed insights to optimize advertising expenditures through data-driven decisions.<br />Hector enables evaluation of ASIN-level contributions from Seller Central, Vendor Central, and Amazon Ad Console, all within a single interface, allowing you to accurately determine your organic share.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;