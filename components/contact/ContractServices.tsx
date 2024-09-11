import Link from "next/link";
// contact content data type
interface contact_service_data_type {
    id: number;
    icon: string;
    title: string;
    info: JSX.Element;
    action: string;
    link: string;
}
// contact content 
const contact_service_data: contact_service_data_type[] = [
    {
        id: 1,
        icon: "fal fa-map-marker-alt",
        title: "Office Location",
        info: <>B30/1701, Eden Woods CHS Ltd., Shastri Ngr, Nr. Lokhandwala,Andheri ( W ), Mumbai, Mumbai City, Maharashtra, India, 400053</>, 
        action: "Find Us On Map",
        link: "https://maps.app.goo.gl/NSxgedyDmnboGqZx6"
    },
    {
        id: 2,
        icon: "fal fa-envelope",
        title: "Email Address",
        info: <>support@hectorai.live</>, 
        action: "Mail Us",
        link: "mailto:support@hectorai.live"
    },
]

const ContractServices = () => {
    return (
        <>
            <section className="contract-services-area pb-90 pt-90">
                <div className="container">
                    <div className="row">
                        {contact_service_data.map((item, i) =>   
                            <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                                <div className="contract-services-box text-center mb-30">
                                    <div className="mb-35">
                                     <Link href="#"><i className={item.icon}></i></Link>
                                    </div>
                                    <div className="contract-services-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                        <span><Link href={item.link} target="_blank">{item.action}</Link></span>
                                    </div>
                                </div>
                            </div>  
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContractServices;