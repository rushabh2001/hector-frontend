"use client"
import Link from 'next/link';  
import NavMenu from './nav-menu';
import { useState } from 'react';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
import Logo from "../../../public/assets/img/hector/hector-logo.svg";
import Logo_dark from "../../../public/assets/img/hector/hector-logo-white.svg";
import Image from 'next/image';
import useSticky from "../../hooks/use-sticky";

interface IHeaderProps{
    name?:string;
}

const HeaderOne = ({name}:IHeaderProps) => { 
    const [sidebarOppen, setSidebarOppen] = useState(false)
    const [searchOppen, setSearchOppen] = useState(false)
    const { sticky } = useSticky();
    return (
        <>
            <header className={`${sticky && "sticky-header"}`}>
            <div className={`header-area header-transparent header-space pt-45 pb-45`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-5 d-flex align-items-lg-center">
                            <div className="logo">
                                <Link href="/"> 
                                {/* {name == "home" ?  */}
                                    <Image src={Logo} alt="hectorai" /> 
                                {/* :
                                    <Image src={Logo_dark} alt="hectorai" /> 
                                } */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 d-none d-lg-block">
                            <div className="main-menu text-right">
                                <nav id="mobile-menu">
                                    <NavMenu />
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-7 d-flex  align-items-center justify-content-xl-end">
                            {/* <div className="bar d-none d-xl-block">
                                <button className="info-bar" onClick={() => setSidebarOppen(true)}><i className="far fa-bars"></i></button>
                            </div>
                            <div className="search d-none d-xl-block">
                                <button className={`nav-search search-trigger ${searchOppen && "open"}`}><i className="far fa-search" onClick={() => setSearchOppen(true)}></i></button>
                            </div> */}
                            {searchOppen && 
                                <div className={`search-wrap ${searchOppen && "d-block"}`}>
                                    <div className="search-inner">
                                        <i className={`fas fa-times search-close ${searchOppen && "open"}`} onClick={() => setSearchOppen(false)} id="search-close"></i>
                                        <div className="search-cell">
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <div className="search-field-holder">
                                                    <input type="search" className="main-search-input" placeholder="Search Your Keyword..." />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> 
                            }                            
                            <div className="header-btn d-none d-md-block">
                                <a className="btn btn-2 btn-solid mr-3" href="/login"><i className="far fa-key"></i> Sign In</a>
                                <a className="btn btn-2 btn-solid" href="#"> Book a Demo</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu mean-container d-lg-none"> 
                                <div className="mean-bar">
                                <MobileMenus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <SlideBar sidebarOppen={sidebarOppen} setSidebarOppen={setSidebarOppen} />
        </>
    );
};

export default HeaderOne;