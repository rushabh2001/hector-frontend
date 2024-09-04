"use client";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareIconList = ({
  title,
  excerpt,
}: {
  title: string;
  excerpt: string;
}) => {
  const url = window.location.href;
  return (
    <>
      <FacebookShareButton url={url}>
        <i className="fab fa-facebook-f"></i>
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <i className="fab fa-twitter"></i>
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} summary={excerpt}>
        <i className="fab fa-linkedin-in"></i>
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title}>
        <i className="fab fa-brands fa-whatsapp"></i>
      </WhatsappShareButton>
    </>
  );
};

export default ShareIconList;
