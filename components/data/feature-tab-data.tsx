

interface feature_tab_type {
    id: number;
    active: string,
    tab_id: string,
    data_bs_target: string,
    thead: string;
    tab_one_img: string;
    icon_img: string;
    description: string;
}[]

const feature_data: feature_tab_type[] = [
    {
        id: 1, 
        tab_id: "live-reporting-tab",
        data_bs_target:"reporting-tab-pane",
        active: "show active",
        thead: "Unified Dashboard",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 2, 
        tab_id: "live-reporting-tab",
        data_bs_target:"reporting-tab-pane",
        active: "show active",
        thead: "Live Reporting",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 3, 
        tab_id: "data-variation-tab",
        data_bs_target:"variation-tab-pane",
        active: "",
        thead: "Data Variation less than 1%",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 4, 
        tab_id: "unlimited-data-tab",
        data_bs_target:"unlimited-tab-pane",
        active: "",
        thead: "Unlimited Data Storage",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 5, 
        tab_id: "blend-your-tab",
        data_bs_target:"blend-tab-pane",
        active: "",
        thead: "Blend your Datapoints across multiple Amazon Reports",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 6, 
        tab_id: "most-powerful-tab",
        data_bs_target:"powerful-tab-pane",
        active: "",
        thead: "Most Powerful Search Bar",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 7, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Intelligent Dynamic Rules",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 8, 
        tab_id: "compare-tab",
        data_bs_target:"compare-tab-pane",
        active: "",
        thead: "Compare like never before",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 9, 
        tab_id: "performance-tab",
        data_bs_target:"performance-tab-pane",
        active: "",
        thead: "Performance at Product Category & Sub-Category Level",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 10, 
        tab_id: "granular-tab",
        data_bs_target:"granular-tab-pane",
        active: "",
        thead: "The Most Granular Breakdown of Advertising Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
    {
        id: 11, 
        tab_id: "take-action-tab",
        data_bs_target:"take-action-tab-pane",
        active: "",
        thead: "Take Action that changes live on Amazon Ad Account",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Stop seeing Advertising Data stacked together rather see your Performance at a custom Product Category & Sub Category level, so that you can decide the budget allocation based on which product category or sub category is working for you. Find out which Category or Sub Category is giving you high or low ROAS",
    },
]
export default feature_data


                 
 
