

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
        description: "Get the each and every Targeting grouped into Types & subtypes of Targeting such as Keyword, Audience, Auto, Product & Contextual Targeting and also ASIN Exact, ASIN Expanded, Category, View Marketing, Purchase Marketing and more.",
    },
    {
        id: 2, 
        tab_id: "live-reporting-tab",
        data_bs_target:"reporting-tab-pane",
        active: "",
        thead: "Keyword Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Categorise & Sub Categorise your keywords into the Products you are targeting with our Targeting Categorisation feature to identify which category or Sub Category is working for you. Identify which Match Type worked or didn't work, Group your keywords in Brand, Generic & Competitor Keywords to find out what is working and what is not working.",
    },
    {
        id: 3, 
        tab_id: "data-variation-tab",
        data_bs_target:"variation-tab-pane",
        active: "",
        thead: "Search Term Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Identify potential Search Terms which you are not targeting but has given you orders. Move that potential Search Term in a live campaign instantly or create a new campaign with that search term.",
    },
    {
        id: 4, 
        tab_id: "unlimited-data-tab",
        data_bs_target:"unlimited-tab-pane",
        active: "",
        thead: "ASIN Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Review Performance for each and every ASIN across SP,SB & SD Campaign types and identify in how many campaigns and ad group they belong to and find out if they are working or not working across multiple campaigns or Ad Group",
    },
    {
        id: 5, 
        tab_id: "blend-your-tab",
        data_bs_target:"blend-tab-pane",
        active: "",
        thead: "Placement Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Instantly identify how each type of Placement working for you at each Campaign Level along with what Bidding Strategy is being used in each campaigns.",
    },
    {
        id: 6, 
        tab_id: "most-powerful-tab",
        data_bs_target:"powerful-tab-pane",
        active: "",
        thead: "Seller Sales Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Review Traffic, Orders, Revenue, Units Sold for each & every ASIN listed in Seller Central and create custom product Category & Sub Category and assign the ASINs accordingly. Find out city, & state level performance for each ASIN Category.",
    },
    {
        id: 7, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Vendor Central Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Review Traffic, Orders, Inventory, Sold Units, Revenue and more at each ASIN listed in Vendor Central. Assign the each ASIN to their respective Product Category & Sub Category.",
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
        thead: "Rapid Retail Analytics",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Now also measure your Seller & Vendor Central Data for every hour at near Realtime i.e. minus 90 minutes. Get Traffic, Inventory, Sales, Orders & Units Sold for every hour.",
    },
    {
        id: 10, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Top Search Term Reports",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Get the first 3 Clicked ASIN for top 10,000 Search Terms on Amazon on a daily basis and get the Click Share & Conversion Share for each Search Term",
    },
    {
        id: 11, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Search Query Performance Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Get the first 1000 Search Queries which matters to your business and it's total Queries, Impression, Click, Add to Cart & Order share for every week and month. Get the same Search Queries at each ASIN Level too.",
    },
    {
        id: 11, 
        tab_id: "intelligent-dynamic-tab",
        data_bs_target:"intelligent-tab-pane",
        active: "",
        thead: "Search Catalogue Performance Report",
        tab_one_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        icon_img: "../public/assets/img/hector/tab_1.7f885e86.png",
        description: "Group all your Seller Central ASINs in custom Category & Sub Categories and monitor performance such as Impression, Clicks, Add To Cart, Orders, Revenue, CR%, AOV for each ASIN for every week and every month.",
    },
]
export default report_data


                 
 
