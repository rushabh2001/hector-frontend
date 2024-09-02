import Link from "next/link";
import priceing_data_two from "../../data/priceing-data-2";
import Image from "next/image";
import brand_3 from "../../../public/assets/img/hector/tab_1.7f885e86.png";

interface priceing_all_data_type {
    priceing_sidebar: string[];
    price_data: {
        id: number;
        cls: string;
        title: string;
        price: number;
        yeatly_price: number;
        text_btn: string;
        tab_one_img: string;
        price_list: string[];
    }[];
}

const priceing_all_data: priceing_all_data_type = {
    priceing_sidebar: [
         "Teams","Users","Bandwidth","Hosting","Speed","Storage","Email","Domain",
    ],
    price_data: [
        {
            id: 1, 
            cls: "",
            title: "Basic",
            price: 56,
            yeatly_price: 88,
            text_btn: "Create Account",
            tab_one_img: "../../../public/assets/img/hector/tab_1.7f885e86.png",
            price_list: [
                "10","120","60mbps","100GB","100MB","5TB","500","100",
            ]

        },
        {
            id: 2, 
            cls: "active",
            title: "Core",
            price: 99,
            yeatly_price: 120,
            text_btn: "Purchase Now",
            tab_one_img: "../../../public/assets/img/hector/tab_1.7f885e86.png",
            price_list: [
                "10","220","100mbps","150GB","140MB","512TB","800","300",
            ]

        },
        {
            id: 3, 
            cls: "",
            title: "Advanced",
            price: 289,
            yeatly_price: 320,
            text_btn: "Create Account",
            tab_one_img: "../../../public/assets/img/hector/tab_1.7f885e86.png",
            price_list: [
                "66","236","80mbps","500GB","400MB","30TB","900","1200",
            ]

        },
    ]
}
const {priceing_sidebar, price_data}  = priceing_all_data


function changeNextTab () {
    document.getElementsByClassName("")
}


const FeaturesTabs = ({style} : any) => {
    return (
        <>
            <div className={`price-area pt-110 ${style ? "pb-120" : "pb-90"}`}>
                <div className="container">
                    {/* <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2>Price & Plans</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-12">                          
                            <div className="tab-custom-container">
                                <a className="hector-landing__features--tab-list-nav prev-nav-btn"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M16 28.75C22.6274 28.75 28 23.3774 28 16.75C28 10.1226 22.6274 4.75 16 4.75C9.37258 4.75 4 10.1226 4 16.75C4 23.3774 9.37258 28.75 16 28.75Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path><path d="M18 12.25L13 16.75L18 21.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></a>
                                <ul className="nav price-tabs mb-5" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="live-reporting-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#reporting-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="reporting-tab-pane"
                                            aria-selected="true"
                                            tabIndex={-1}
                                        >Live Reporting <i className="fal fa-angle-left"></i>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="data-variation-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#variation-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="variation-tab-pane"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >Data Variation less than 1% <i className="fal fa-angle-left"></i> </button>
                                    </li> 
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="unlimited-data-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#unlimited-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="unlimited-tab-pane"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >Unlimited Data Storage <i className="fal fa-angle-left"></i> </button>
                                    </li> 
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="blend-your-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#blend-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="blend-tab-pane"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >Blend your Datapoints across multiple Amazon Reports <i className="fal fa-angle-left"></i> </button>
                                    </li> 
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="most-powerful-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#powerful-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="powerful-tab-pane"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >Most Powerful Search Bar <i className="fal fa-angle-left"></i> </button>
                                    </li> 
                                </ul>
                                <a className="hector-landing__features--tab-list-nav next-nav-btn">
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 28.75C22.6274 28.75 28 23.3774 28 16.75C28 10.1226 22.6274 4.75 16 4.75C9.37258 4.75 4 10.1226 4 16.75C4 23.3774 9.37258 28.75 16 28.75Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path><path d="M14.5 12.25L19.5 16.75L14.5 21.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </a>
                            </div>

                            {style ? 
                            <div className="tab-content" id="myTabContent">
                                {priceing_data_two.map((data, index) => 
                                <div key={index} className={`tab-pane fade ${data.active}`} id={data.data_bs_target} role="tabpanel" aria-labelledby={data.tab_id}>

                                  <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6"> 
                                            <Image src={brand_3} alt="hectorai" width={50} height={50} /></div>
                                        {/* <div className="col-md-6"> <Image src={data?.tab_one_img} alt="hectorai" width={50} height={50} /></div> */}
                                        <div className="col-md-6"></div>
                                    </div>
                                  </div>
                                </div>
                                
                                )} 
                         </div>


                            : 
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"> 
                                    <div className="row no-gutters">
                                        <div className="col-xl-3 col-lg-3 col-mg-4 d-none d-lg-block">
                                            <div className="price-sidebar mb-30">
                                                <ul>
                                                    {priceing_sidebar.map((item, i) => <li key={i}>{item}<i className="fal fa-plus"></i></li>)} 
                                                </ul>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"> 
                                <div className="row no-gutters">
                                        <div className="col-xl-3 col-lg-3 col-mg-4 d-none d-lg-block">
                                            <div className="price-sidebar mb-30">
                                                <ul>
                                                    {priceing_sidebar.map((item, i) => <li key={i}>{item}<i className="fal fa-plus"></i></li>)} 
                                                </ul>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                            }
                                                        


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturesTabs;