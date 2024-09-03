"use client";
import Link from "next/link";
import BookADemoForm from "../forms/BookADemoForm";
import { useState } from "react";

const FormArea = () => {
  const [demoRequested, setDemoRequested] = useState(false);
  return (
    <>
      <div className="pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* <div className="d-flex justify-content-center">
                                <Image className="mb-30 text-center" src={Logo} alt="hectorai" /> 
                            </div> */}
              <div className="basic-login book-demo-area">
                {demoRequested ? (
                  <>
                    <h3 className="text-center mb-20">
                      Thank you for requesting a demo!
                    </h3>
                    <h4 className="text-center">
                      We're excited to demonstrate how Hector can help scale
                      your business to new heights
                    </h4>
                    <p className="text-center">
                      Please use the following link to schedule a time that
                      works best for you.
                    </p>
                    <button className="calendly-button">
                      <Link
                        href="https://calendly.com/mohak-3yi/30min"
                        target="_blank"
                      >
                        https://calendly.com/mohak-3yi/30min
                      </Link>
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="text-center mb-20">Book A Demo</h3>
                    <BookADemoForm setDemoRequested={setDemoRequested} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormArea;
