interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Services",
    link: "/amazon-ad-reporting",
    has_dropdown: true,
    sub_menus: [
     { link: "/amazon-ad-reporting", title: "Amazon ADs Reporting" },
     { link: "/flipkart-ad-reporting", title: "Flipkart ADs Reporting" },
     { link: "#", title: "Myntra ADs Reporting" },
   ],
  },

  {
    id: 3,
    title: "Blogs",
    link: "/blog",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Contact Us",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
