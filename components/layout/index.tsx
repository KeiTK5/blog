import React, { useContext, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";

interface Props {
    children: React.ReactNode;
}

interface ScaleOn {
    height: string;
    overflow: string;
}

interface ScaleOff {
    overflowX: "hidden";
}

function LayoutComponent({ children }: Props) {
    const [scale, setScale] = useState<Boolean>(false);
    const [search, setSearch] = useState<Boolean>(false);
    const [menu, setMenu] = useState<Boolean>(false);

    const openSearch = () => {
        setScale(!scale);
        setSearch(!search);
    };

    const openMenu = () => {
        setScale(!scale);
        setMenu(!menu);
    };

    const overflowScroll = () => {
        if (scale) {
            const obj: ScaleOn = {
                height: "100vh",
                overflow: "hidden",
            };
            return obj;
        } else {
            const obj: ScaleOff = {
                overflowX: "hidden",
            };
            return obj;
        }
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
            </Head>
            <div className="container" style={overflowScroll()}>
                <div className={`wrapper-container${scale ? " scale" : ""}`}>
                    <Header openSearch={openSearch} openMenu={openMenu} />
                    <div className="max-width">{children}</div>
                    <Footer />
                </div>

                <div className={`menu-mobile-search${scale && search ? " active" : ""}`}>
                    <div className="icon-x" onClick={openSearch}>
                        <i className="bx bx-x"></i>
                    </div>
                    <div className="box-search-mobile">
                        <div className="title-search-mobile">
                            <span>Search</span>
                        </div>
                        <div className="input-search-mobile">
                            <input type="text" className="input-mobile" id="input-mobile" />
                        </div>
                    </div>
                </div>

                <div className={`menu-mobile-menu${scale && menu ? " active" : ""}`}>
                    <div className="icon-x" onClick={openMenu}>
                        <i className="bx bx-x"></i>
                    </div>
                    <div className="box-menu-mobile">
                        <div className="title-menu-mobile">
                            <span>Sign In</span>
                        </div>
                        <div className="nav-menu-mobile">
                            <div className="item-menu-mobile">Blog</div>
                            <div className="item-menu-mobile">Forum</div>
                            <div className="item-menu-mobile">Buy now!</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutComponent;
