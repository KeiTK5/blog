import React from "react";
import TabBar from "../tabBar/TabBar";
import Link from "next/link";

interface Props {
    openSearch: any;
    openMenu: any;
}

function Header({ openSearch, openMenu }: Props) {
    return (
        <>
            <div className="header box-shadow">
                <div className="max-width">
                    <div className="wrapper-logo">
                        <Link href="/">
                            <div className="logo">
                                <img src="/images/logo.png" alt="Picture of the author" />
                            </div>
                        </Link>
                        <div className="newspaper">
                            <img src="/images/newspaper.jpg" alt="Picture of the author" />
                        </div>
                    </div>
                    <TabBar />
                </div>
            </div>
            <div className="header-mobile">
                <div className="max-width">
                    <div className="wrapper-header">
                        <div className="wrapper-menu" onClick={openMenu}>
                            <i className="bx bx-menu" />
                        </div>
                        <Link href="/">
                            <div className="logo">
                                <img src="/images/logo-mobile.png" alt="Picture of the author" />
                            </div>
                        </Link>
                        <div className="wrapper-search" onClick={openSearch}>
                            <i className="bx bx-search" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
