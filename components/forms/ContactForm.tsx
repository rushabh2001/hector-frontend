"use client"

import PhoneNumberInput from "./components/PhoneNumberInput";

const ContactForm = () => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contract-page-form">
                        <label htmlFor="text"><i className="fal fa-user"></i></label>

                        <input
                            type="text"
                            name="name"
                            id="text"
                            placeholder="Enter your name here"
                        />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contract-page-form phone_icon">
                        <label htmlFor="text"><i className="far fa-phone"></i></label>

                        {/* <div
                            className={`demo-form-input contact-field-container`}>
                            <PhoneNumberInput name="contact_number" />
                        </div>
                            {errors.contact_number && (
                            <div className="text-danger mt-1 text-sm">
                                {(errors.contact_number as FieldError).message}
                            </div>  )} */}
                        
                        <input
                            type="text"
                            name="number"
                            placeholder="Enter your number here"
                        />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contract-page-form">
                        <label htmlFor="text"><i className="fal fa-envelope"></i></label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email here"
                        />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contract-page-form">
                        <label htmlFor="text"><i className="far fa-edit"></i></label>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter your subject here"
                        />
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="contract-page-form">
                        <label htmlFor="text"><i className="far fa-pen"></i></label>

                        <textarea
                            name="message"
                            cols={30}
                            rows={10}
                            placeholder="Enter your message here"
                        ></textarea>
                        </div>

                        <div className="contract-btn text-center">
                        <button className="btn" type="submit"> Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;