import news_thumb_1 from "../../public/assets/img/hector/1705056274457.jpeg";
import news_thumb_2 from "../../public/assets/img/hector/1705056274457.jpeg";
import news_thumb_3 from "../../public/assets/img/hector/1705056274457.jpeg";

import avatar_1 from "../../public/assets/img/blog/lat.png";
import avatar_2 from "../../public/assets/img/blog/let.png";
import avatar_3 from "../../public/assets/img/blog/let1.png";
import { StaticImageData } from "next/image";


interface news_data_type {
    id: number;
    news_thumb: StaticImageData;
    avatar: StaticImageData;
    name: string;
    date: string;
    title: string;
    news_blog: string;
}


const news_data: news_data_type[] = [
    {
        id: 1,
        news_thumb: news_thumb_1,
        avatar: avatar_1,
        name: "Tirth Mehta",
        date: "13 Aug 2023",
    
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        news_blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        news_thumb: news_thumb_2,
        avatar: avatar_2,
        name: "Salim Rana",
        date: "26 Jul 2024",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        news_blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        news_thumb: news_thumb_3,
        avatar: avatar_3,
        name: "Ankush Patel",
     
        date: "23 Mar 2024",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        news_blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]
export default news_data