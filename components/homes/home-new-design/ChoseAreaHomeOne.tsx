"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
// chose images
import chose_icon_1 from "../../../public/assets/img/hector/voting_nvu7.png" ;
import chose_icon_2 from "../../../public/assets/img/hector/Checking_boxes_re_9h8m.png" ;
import chose_icon_3 from "../../../public/assets/img/hector/Data_trends_re_2cdy.png" ;
// chose data type
interface chose_data_type {
    id: number;
    active: string;
    sirial_no: string;
    icon: StaticImageData;
    title: string;
    info: string;
}
// chose data
const chose_data:chose_data_type[] = [
    {
        id: 1,
        active: "",
        sirial_no: "01",
        icon: chose_icon_1,
        title: "On Boarding Process",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        active: "active",
        sirial_no: "02",
        icon: chose_icon_2,
        title: "Data Gethering",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        active: "",
        sirial_no: "03",
        icon: chose_icon_3,
        title: "Analytics",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]
const ChoseAreaHomeOne = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
      setActiveIndex(index);
    };

    return (
        <>
            <section className="chose-area pt-115 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 ">
                            <div className="section-title text-center mb-70">
                                <h2>Streamline Your <span className="colored-text">Workflow</span> and Drive Impact</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row chose-row wow fadeInUp animated" data-wow-delay="0.3s">
                        {chose_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className={`chose-box text-center ${activeIndex === i ? 'active' : ''} mb-30`} onMouseEnter={() => handleMouseEnter(i)}>
                                    <Image src={item.icon} alt="hector-ai" />
                                    <div className="chose-content">
                                        <span>{item.sirial_no}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
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

export default ChoseAreaHomeOne;