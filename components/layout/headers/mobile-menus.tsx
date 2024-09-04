"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <>
      <nav className="navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close color-white btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {menu_data.map((menu, i) => (
                <React.Fragment key={i}>
                  {menu.has_dropdown && (
                    <li className="has-dropdown">
                      <Link href={menu.link}>{menu.title}</Link>
                      <ul
                        className="submenu"
                        style={{
                          display: navTitle === menu.title ? "block" : "none",
                        }}
                      >
                        {menu.sub_menus?.map((sub, i) => (
                          <li key={i}>
                            <Link href={sub.link}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                      <a
                        className={`mean-expand ${
                          navTitle === menu.title ? "mean-clicked" : ""
                        }`}
                        onClick={() => openMobileMenu(menu.title)}
                        style={{ fontSize: "18px", cursor: "pointer" }}
                      >
                        <i className="fal fa-plus"></i>
                      </a>
                    </li>
                  )}
                  {!menu.has_dropdown && (
                    <li>
                      <Link href={menu.link}>{menu.title}</Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

//  <nav className="mean-nav">
//   <ul>
//     {menu_data.map((menu, i) => (
//       <React.Fragment key={i}>
//         {menu.has_dropdown && (
//           <li className="has-dropdown">
//             <Link href={menu.link}>{menu.title}</Link>
//             <ul
//               className="submenu"
//               style={{
//                 display: navTitle === menu.title ? "block" : "none",
//               }}
//             >
//               {menu.sub_menus?.map((sub, i) => (
//                 <li key={i}>
//                   <Link href={sub.link}>{sub.title}</Link>
//                 </li>
//               ))}
//             </ul>
//             <a
//               className={`mean-expand ${
//                 navTitle === menu.title ? "mean-clicked" : ""
//               }`}
//               onClick={() => openMobileMenu(menu.title)}
//               style={{ fontSize: "18px", cursor: "pointer" }}
//             >
//               <i className="fal fa-plus"></i>
//             </a>
//           </li>
//         )}
//         {!menu.has_dropdown && (
//           <li>
//             <Link href={menu.link}>{menu.title}</Link>
//           </li>
//         )}
//       </React.Fragment>
//     ))}
//   </ul>
// </nav>

export default MobileMenus;
