"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../utils/utils";
import { Blog } from "../types";

interface BlogListProps {
  blogList: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogList }) => {
  return (
    <div className="container">
      <div className="row">
        {blogList?.map((blog) => (
          <div key={blog.blog_id} className="col-xl-6 col-lg-6 col-md-6">
            <div
              className="latest-feed mb-45 wow fadeInUp  animated"
              data-wow-delay="0.3s"
            >
              <div className="news-feed-img">
                <Link href={`/blog/${blog.slug}`} scroll={false}>
                  <Image
                    src={blog.feature_image}
                    alt={blog.alt_text}
                    width={500}
                    height={250}
                  />
                </Link>
              </div>
              <div className="news-feed-info">
                <div className="news-feed-mata">
                  <ul>
                    {/* <li><Image src={item.avatar} alt="hector-ai" /> <span><a href="#">{item.name}</a></span></li> */}
                    <li>
                      <span>
                        <i className="fas fa-calendar-week"></i>{" "}
                        {formatDate(blog.date, "MMMM DD, YYYY")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="news-feed-titles">
                  <h4>
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h4>
                  <p>{blog.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
