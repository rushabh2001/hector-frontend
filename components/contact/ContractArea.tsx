import ContactForm from "../forms/ContactForm";

const ContractArea = () => {
    return (
        <>
            <section className="Contract-area gray-bg pt-115 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70">
                                <h2>Get In Touch</h2>
                                <p>
                                    Grow your E-commerce business with business insights that help you deliver.
                                    Connect with us to speak to our specialists and understand how Hector
                                    can help you get higher conversion rates with a lower ACOS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />                  
                
                </div>
            </section>
        </>
    );
};

export default ContractArea;