import { StaticImageData } from "next/image";
import feature_img_1 from "../../public/assets/img/icon/core.png";
import feature_img_2 from "../../public/assets/img/icon/core1.png";
import feature_img_3 from "../../public/assets/img/icon/core2.png";
import feature_img_4 from "../../public/assets/img/icon/core4.png";
import feature_img_5 from "../../public/assets/img/icon/core5.png";
import feature_img_6 from "../../public/assets/img/icon/core6.png";

import feature_img_1_1 from "../../public/assets/img/icon/cf1.png";
import feature_img_1_2 from "../../public/assets/img/icon/cf2.png";
import feature_img_1_3 from "../../public/assets/img/icon/cf3.png";
import feature_img_1_4 from "../../public/assets/img/icon/cf4.png";
import feature_img_1_5 from "../../public/assets/img/icon/cf5.png";
import feature_img_1_6 from "../../public/assets/img/icon/cf6.png";


interface countries_type {
    flag: string;
    country: string;
    label: string;
}

const countries: countries_type[] = [
    {flag: "https://flagcdn.com/br.svg", country: "Brazil", label: "Brazil"},
    {flag: "https://flagcdn.com/ca.svg", country: "Canada", label: "Canada"},
    {flag: "https://flagcdn.com/mx.svg", country: "Mexico", label: "Mexico"},
    {flag: "https://flagcdn.com/us.svg", country: "US", label: "US"},
    {flag: "https://flagcdn.com/ae.svg", country: "United Arab Emirates", label: "Emirates"},
    {flag: "https://flagcdn.com/de.svg", country: "Germany", label: "Germany"},
    {flag: "https://flagcdn.com/eg.svg", country: "Egypt", label: "Egypt"},
    {flag: "https://flagcdn.com/es.svg", country: "Spain", label: "Spain"},
    {flag: "https://flagcdn.com/fr.svg", country: "France", label: "France"},
    {flag: "https://flagcdn.com/be.svg", country: "Belguim", label: "Belguim"},
    {flag: "https://flagpedia.net/data/flags/w1160/gb.webp", country: "UK", label: "UK"},
    {flag: "https://flagcdn.com/in.svg", country: "India", label: "India"},
    {flag: "https://flagcdn.com/it.svg", country: "Italy", label: "Italy"},
    {flag: "https://flagcdn.com/nl.svg", country: "Netherlands", label: "Netherlands"},
    {flag: "https://flagcdn.com/pl.svg", country: "Poland", label: "Poland"},
    {flag: "https://flagcdn.com/sa.svg", country: "Saudi Arabia", label:  "Arabia"},
    {flag: "https://flagcdn.com/se.svg", country: "Sweden", label: "Sweden"},
    {flag: "https://flagcdn.com/tr.svg", country: "Turkey", label: "Turkey"},
    {flag: "https://flagcdn.com/sg.svg", country: "Singapore", label: "Singapore"},
    {flag: "https://flagcdn.com/au.svg", country: "Australia", label: "Australia"},
    {flag: "https://flagcdn.com/jp.svg", country: "Japan", label: "Japan"},
]

export default countries