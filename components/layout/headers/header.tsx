"use client"
import Link from 'next/link';  
import NavMenu from './nav-menu';
import { useState } from 'react';
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
                        <div className="col-xl-2 col-lg-2 col-md-5 col-xs-8 d-flex align-items-lg-center justify-content-xs-between">
                            <div className="logo">
                                <Link href="/"> 
                                    <Image src={Logo} alt="hectorai" /> 
                                </Link>
                            </div>
                            <div className="mobile-menu mean-container d-lg-none"> 
                                <div className="mean-bar">
                                <MobileMenus />
                                </div>
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
                            <div className="header-btn d-none d-md-block">
                                <a className="btn btn-2 btn-solid mr-3" href="https://hectorai.live/auth/signin"><i className="far fa-key"></i> Sign In</a>
                                <a className="btn btn-2 btn-solid" href="/book-demo"> Book a Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default HeaderOne;