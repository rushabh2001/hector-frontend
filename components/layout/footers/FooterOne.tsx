"use client";
import Link from "next/link";
import SocialLinks from "../../common/social-links";
import Image from "next/image";
import footer_logo from "../../../public/assets/img/hector/hector-logo-white.svg";
import { useState } from "react";

interface footer_links_type {
  id: number;
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}

// footer content type
interface footer_content_type {
  sub_title: string;
  title: string;
  info_us: string;
  address: string;
  mail: string;
  website: string;
  footer_info: string;
}
// footer content here
const footer_content: footer_content_type = {
  sub_title: "Get onboard easily with our tool",
  title: "Unleash your business potential with Hector",
  info_us: "The Most Powerful Platform for Amazon & Flipkart Ads Optimisation",
  address:
    "B30/1701, Eden Woods CHS Ltd., Shastri Ngr, Nr. Lokhandwala,Andheri ( W ), Mumbai, Mumbai City, Maharashtra, India, 400053",
  mail: "support@hectorai.live",
  website: "https://hectorai.live/",
  footer_info: "Copyright © 2024 HectorAI. All rights reserved.",
};

const { sub_title, title, info_us, address, mail, website, footer_info } =
  footer_content;

const FooterOne = () => {
  const [footerLinks, setFooterLinks] = useState<footer_links_type[]>([
    {
      id: 1,
      title: "Quick Links",
      links: [
        { title: "Home", link: "/" },
        { title: "Blogs", link: "/blog" },
        { title: "Amazon ADs Reporting", link: "/amazon-ads-reporting" },
        { title: "Terms and Conditions", link: "/terms" },
      ],
    },
    {
      id: 2,
      title: "Latest Blogs",
      links: [],
    },
  ]);
  return (
    <>
      <footer>
        <section
          className="footer-area pt-80 pb-50 bg-footer"
          style={{
            backgroundImage: `url(/assets/img/hector/footer-bg-theme.jpg)`,
          }}
        >
          <div className="container">
            <div className="row d-flex justify-content-start justify-content-md-between align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="footer-sing-up mb-30">
                  <h5>{sub_title}</h5>
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="col-xl-3 col-md-5 col-lg-3">
                <div className="footer-left-info mb-30"></div>
              </div>
              <div className="col-xl-3 col-md-7 col-lg-3">
                <div className="footer-btn mb-30">
                  <Link href="/book-demo" className="btn btn-grad">
                    Book A Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-border"></div>
            <div className="row d-flex justify-content-between">
              <div className="col-xl-4 col-lg-4 mb-30">
                <div className="footer-bottom-area">
                  <div className="widgets">
                    <div className="footer-logo">
                      <Image src={footer_logo} alt="hector-ai" />
                    </div>
                    <p>{info_us}</p>
                    <ul className="adress">
                      <li>
                        <i className="fa fa-map-marker-alt"></i>{" "}
                        <span>{address}</span>
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i> <span>{mail}</span>
                      </li>
                      <li>
                        <i className="fa fa-globe"> </i> <span>{website}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-social text-center">
                  <SocialLinks />
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="footer-right-box pl-70">
                  <div className="row">
                    {footerLinks.map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                        <div className="wigets mb-30">
                          <div className="widgets-titles">
                            <h4>{item.title}</h4>
                          </div>
                          <div className="wegets-body">
                            <ul>
                              {item.links.map((link, index) => (
                                <li key={index}>
                                  <Link href={link.link}>{link.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <div className="footer-text">
                      <p>{footer_info}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default FooterOne;
