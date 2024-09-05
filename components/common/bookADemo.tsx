"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookADemo = ({ style }: any) => {
  const [email, setEmail] = useState<string>();

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sessionStorage.setItem("data", JSON.stringify({ email }));
    router.push("/book-demo");
  };

  return (
    <>
      <section
        className={`${style && "domain-search-section"} book-a-demo-section`}
      >
        <div className={`${style && "domain-box"} container px-0`}>
          <div className="row">
            <div className="col-xl-12 col-xs-8">
              <div
                className="newsletter-field wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="position-relative">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="hector-landing__contact-form__actions">
                      <button
                        type="submit"
                        className="btn btn-2 btn-solid hector-landing-btn__color-primary"
                      >
                        BOOK A DEMO
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookADemo;
