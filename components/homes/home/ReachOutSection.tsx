import Image from "next/image";
import server_img from "../../../public/assets/img/hector/landing-support.d36a2043.png";
interface reach_out_type {
    bg_img: string;
    sub_title: string;
    title: string;
}
const reach_out: reach_out_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    sub_title: "Inclued Every Isometric Illustrations",
    title: "Domain & Hosting In One Platform",
}
const {bg_img, sub_title, title} = reach_out

const ReachOutSection = () => {
    return (
        <>
            <section className="reach-out-section position-relative hector-landing__support">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="react-out-text-wrapper">
                                <div className="hector-landing__support--content">
                                    <h6 className="hector-landing__support--title">SUPPORT IN SOFTWARE</h6>
                                    <h4 className="hector-landing__support--subtitle">24/7 support.</h4>
                                    <ul className="hector-landing__support--list">
                                        <li className="hector-landing__support--list-item"><span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12.75C21.25 7.64137 17.1086 3.5 12 3.5C6.89137 3.5 2.75 7.64137 2.75 12.75C2.75 17.8586 6.89137 22 12 22C17.1086 22 21.25 17.8586 21.25 12.75Z" stroke="#5932ea" stroke-width="1.5"></path><path d="M9 12.75L11 14.75L15 10.75" stroke="#5932ea" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span className="hector-landing__support--list-item-title">Email Support</span></li>
                                        <li className="hector-landing__support--list-item"><span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12.75C21.25 7.64137 17.1086 3.5 12 3.5C6.89137 3.5 2.75 7.64137 2.75 12.75C2.75 17.8586 6.89137 22 12 22C17.1086 22 21.25 17.8586 21.25 12.75Z" stroke="#5932ea" stroke-width="1.5"></path><path d="M9 12.75L11 14.75L15 10.75" stroke="#5932ea" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span className="hector-landing__support--list-item-title">Live Chat</span></li>
                                        <li className="hector-landing__support--list-item"><span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12.75C21.25 7.64137 17.1086 3.5 12 3.5C6.89137 3.5 2.75 7.64137 2.75 12.75C2.75 17.8586 6.89137 22 12 22C17.1086 22 21.25 17.8586 21.25 12.75Z" stroke="#5932ea" stroke-width="1.5"></path><path d="M9 12.75L11 14.75L15 10.75" stroke="#5932ea" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span className="hector-landing__support--list-item-title">Frequent Webinars</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="support-bottom-img wow fadeInUp animated" data-wow-delay="1.3s">
                                <Image src={server_img}  alt="hector" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReachOutSection;