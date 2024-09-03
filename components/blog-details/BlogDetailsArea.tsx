"use client";
import Link from "next/link";
import { BlogDetails } from "../types";
import { formatDate } from "../utils/utils";

// components
import PostComments from "../forms/PostComments";
import CommentsBox from "./CommentsBox";
import ContactForm from "./ContactForm";
import FAQBlog from "./FAQBlog";
import RelatedNews from "./RelatedNews";
import ShareIconList from "./ShareIconList";

interface BlogDetailsAreaProps {
  blogDetails: BlogDetails;
}

const BlogDetailsArea: React.FC<BlogDetailsAreaProps> = ({ blogDetails }) => {
  return (
    <>
      <section className="blog-area gray-bg pt-120 pb-80">
        <div className="container mt-10">
          <div className="row">
            <div className="col-lg-8">
              <article className="postbox post format-image">
                <div className="post-title-box">
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <span>Blogs</span>
                      </Link>
                    </li>
                    <li>
                      <span className="active-page">{blogDetails?.title}</span>
                    </li>
                  </ul>
                  <ul className="post-tags">
                    {blogDetails?.tags?.map((tag) => (
                      <li key={tag.tag_id}>
                        <Link href={`/blog?tag=${tag.slug}`}>
                          {tag.tag_name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="blog-title">{blogDetails?.title}</h3>
                </div>
                <div className="postbox__thumb">
                  <img
                    src={blogDetails?.feature_image}
                    alt={blogDetails?.alt_text}
                  />
                </div>
                <div className="postbox__text potsbox_single">
                  <div className="post-meta mb-15">
                    <span>
                      <i className="far fa-calendar-check"></i>{" "}
                      {formatDate(blogDetails?.date, "MMMM DD, YYYY")}
                    </span>
                    <span>
                      <i className="far fa-user"></i> {blogDetails?.author}
                    </span>
                    <span>
                      <Link href="#">
                        <i className="far fa-comments"></i>{" "}
                        {blogDetails?.comment_count}{" "}
                        {blogDetails?.comment_count === 1
                          ? "Comment"
                          : "Comments"}
                      </Link>
                    </span>
                  </div>

                  <div className="post-text mb-20">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blogDetails?.content || "",
                      }}
                    />
                  </div>
                  {!!blogDetails?.blog_faqs.length && (
                    <>
                      <div className="navigation-border pt-50 mt-40" />
                      <FAQBlog faqList={blogDetails?.blog_faqs} />
                      <div className="navigation-border pt-50 mt-40" />
                    </>
                  )}

                  <div className="row mt-50">
                    <div className="col-xl-8 col-lg-8 col-md-8 mb-15 d-flex align-items-center">
                      <Link href="/blog" className="back-blogs-btn">
                        <i className="far fa-arrow-left"></i>Back to Blogs
                      </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                      <div className="blog-share-icon text-left text-md-right">
                        <span>Share: </span>
                        <ShareIconList
                          title={blogDetails?.title}
                          excerpt={blogDetails?.excerpt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <RelatedNews />
                {!!blogDetails?.comments.length && (
                  <CommentsBox
                    comments={blogDetails?.comments}
                    count={blogDetails?.comment_count}
                  />
                )}

                <div className="post-comments-form">
                  <div className="post-comments-title">
                    <h2>Post Comments</h2>
                  </div>
                  <PostComments blog_id={blogDetails?.blog_id} />
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-sticky">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;
