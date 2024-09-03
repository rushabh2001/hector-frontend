"use client";
import { BlogFAQ } from "../types";

interface FAQBlogProps {
  faqList: BlogFAQ[];
}

const FAQBlog: React.FC<FAQBlogProps> = ({ faqList }) => {
  return (
    <>
      <section className="faq-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="faq-wrapper mb-30">
                <div className="section-title mb-30">
                  <h3 className="faq-title">Frequently Asked Question</h3>
                </div>
                <div className="faq-box">
                  <div className="accordion" id="accordionExample">
                    {faqList?.map((faq, index) => (
                      <div key={faq.faq_id} className="accordion-items">
                        <h2
                          className="accordion-header"
                          id={`heading${faq.faq_id}`}
                        >
                          <button
                            className={`accordion-button ${
                              index !== 0 && "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq.faq_id}`}
                            aria-expanded={index === 0 && "true"}
                            aria-controls={`collapse${faq.faq_id}`}
                          >
                            {faq.faq_que}
                          </button>
                        </h2>
                        <div
                          id={`collapse${faq.faq_id}`}
                          className={`accordion-collapse collapse ${
                            index === 0 && "show"
                          }`}
                          aria-labelledby={`heading${faq.faq_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-content faq_content">
                            <p>{faq.faq_ans}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default FAQBlog;
