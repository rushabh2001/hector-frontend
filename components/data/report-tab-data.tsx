

export interface report_tab_type {
    id: number;
    active: string,
    tab_id: string,
    data_bs_target: string,
    thead: string;
    tab_one_img: string;
    icon_img: string;
    description: string;
}[]

const report_data: report_tab_type[] = [
    {
        id: 1, 
        tab_id: "live-reporting-tab",
        data_bs_target:"reporting-tab-pane",
        active: "show active",
        thead: "Targeting Reports",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Get the first 1000 Search Queries which matters to your business and it's total Queries, Impression, Click, Add to Cart & Order share for every week and month. Get the same Search Queries at each ASIN Level too.",
    },
    {
        id: 2, 
        tab_id: "live-reporting-tab",
        data_bs_target:"reporting-tab-pane",
        active: "",
        thead: "Keyword Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 3, 
        tab_id: "data-variation-tab",
        data_bs_target:"variation-tab-pane",
        active: "",
        thead: "Search Term Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 4, 
        tab_id: "unlimited-data-tab",
        data_bs_target:"unlimited-tab-pane",
        active: "",
        thead: "ASIN Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 5, 
        tab_id: "blend-your-tab",
        data_bs_target:"blend-tab-pane",
        active: "",
        thead: "Placement Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 6, 
        tab_id: "most-powerful-tab",
        data_bs_target:"powerful-tab-pane",
        active: "",
        thead: "Seller Sales Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 7, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Vendor Central Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 8, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Amazon Marketing Stream Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Now measure your Advertising Performance for every hour of the day at every campaigns level, Ad Group Level, Targeting Level, Placement Level and Bidding Strategy level. Identify lowest CPC & Highest CR% every hour for every day of the week.",
    },
    {
        id: 9, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Top Search Term Reports",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Get the first 3 Clicked ASIN for top 10,000 Search Terms on Amazon on a daily basis and get the Click Share & Conversion Share for each Search Term",
    },
    {
        id: 10, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Search Query Performance Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Get the first 1000 Search Queries which matters to your business and it's total Queries, Impression, Click, Add to Cart & Order share for every week and month. Get the same Search Queries at each ASIN Level too.",
    },
]
export default report_data


                 
 
