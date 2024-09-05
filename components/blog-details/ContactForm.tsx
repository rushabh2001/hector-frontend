"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>();

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(
      (prev) => ({ ...prev, [e.target.name]: e.target.value } as FormData)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sessionStorage.setItem("data", JSON.stringify({ ...formData }));
    router.push("/book-demo");
  };
  return (
    <>
      <div className="sidebar-form-container gray-bg mb-40">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 px-0">
              <form className="sidebar-form" onSubmit={(e) => handleSubmit(e)}>
                <h3 className="widget-title">Get in Touch?</h3>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="contract-page-form">
                      <label htmlFor="first_name">
                        <i className="fal fa-user"></i>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="First Name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="contract-page-form">
                      <label htmlFor="last_name">
                        <i className="fal fa-user"></i>
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="contract-page-form">
                      <label htmlFor="email">
                        <i className="fal fa-envelope"></i>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => handleChange(e)}
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contract-btn">
                      <button className="btn color-white" type="submit">
                        Book a Demo
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
