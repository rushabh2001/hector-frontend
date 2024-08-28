
const ContactForm = () => {
    return (
        <>
            <div className="sidebar-form-container gray-bg mb-40">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12 px-0">
                   
                     <form className="sidebar-form">
                        <h3 className="widget-title">Get in Touch?</h3>
                     {/* <form onSubmit={(e) => e.preventDefault()}> */}
                        <div className="row">
                           <div className="col-xl-12 col-lg-12 col-md-12">
                                 <div className="contract-page-form">
                                 <label htmlFor="text"><i className="fal fa-user"></i></label>

                                 <input
                                    type="text"
                                    name="name"
                                    id="text"
                                    placeholder="Name"
                                 />
                                 </div>
                           </div>

                           <div className="col-xl-12 col-lg-12 col-md-12">
                                 <div className="contract-page-form phone_icon">
                                 <label htmlFor="text"><i className="far fa-phone"></i></label>

                                 <input
                                    type="text"
                                    name="number"
                                    placeholder="Contact Number"
                                 />
                                 </div>
                           </div>

                           <div className="col-xl-12 col-lg-12 col-md-12">
                                 <div className="contract-page-form">
                                 <label htmlFor="text"><i className="fal fa-envelope"></i></label>

                                 <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                 />
                                 </div>
                           </div>

                           {/* <div className="col-xl-6 col-lg-6 col-md-6">
                                 <div className="contract-page-form">
                                 <label htmlFor="text"><i className="far fa-edit"></i></label>

                                 <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                 />
                                 </div>
                           </div> */}

                           <div className="col-xl-12">
                                 {/* <div className="contract-page-form">
                                 <label htmlFor="text"><i className="far fa-pen"></i></label>

                                 <textarea
                                    name="message"
                                    cols={30}
                                    rows={10}
                                    placeholder="Message"
                                 ></textarea>
                              </div> */}

                              <div className="contract-btn">
                                 <button className="btn color-white" type="submit"> Book a Demo</button>
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