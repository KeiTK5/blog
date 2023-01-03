import React, { useState } from "react";
import Link from "next/link";
function TabBar() {
    const [search, setSearch] = useState(false);

    const handleSearch = () => {
        setSearch(!search);
    };

    return (
        <div className="tab-bar">
            <div className="tab">
                <div className="tab-item">
                    <a href="#" className="item active">
                        new
                    </a>
                </div>
                <div className="tab-item ">
                    <Link href="/category/a" className="item">
                        fashion <i className="bx bx-chevron-down"></i>
                    </Link>
                    <ul className="menu">
                        <div className="menu-box">
                            <div className="menu-item active">All</div>
                            <div className="menu-item">New Look</div>
                            <div className="menu-item">Street Fashion</div>
                            <div className="menu-item">Style Hunter</div>
                            <div className="menu-item">Vogue</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                    </ul>
                </div>
                <div className="tab-item">
                    <a href="#" className="item">
                        gadgets <i className="bx bx-chevron-down"></i>
                    </a>
                    <ul className="menu">
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                        <div className="menu-card">
                            <div className="menu-img">
                                <img src="/images/article-1.jpg" alt="" />
                                <div className="tem">Vogue</div>
                            </div>
                            <div className="menu-title">Fashion Outfit Ideas From the Biggest Instagram Influencers</div>
                            <div className="menu-date">August 7, 2019</div>
                        </div>
                    </ul>
                </div>
                <div className="tab-item ">
                    <Link href="/life-style" className="item">
                        lifestyle
                    </Link>
                </div>
                <div className="tab-item ">
                    <Link href="/video" className="item">
                        video
                    </Link>
                </div>
                <div className="tab-item features">
                    <a href="#" className="item">
                        features <i className="bx bx-chevron-down"></i>
                    </a>
                    <ul className="menu-features">
                        <div className="item-fea">Premium Features</div>
                        <div className="item-fea">Multipurpose Elements</div>
                        <div className="item-fea">Premium Plugin</div>
                        <div className="item-fea">Smart Lists</div>
                        <div className="item-fea">Reviews</div>
                    </ul>
                </div>
            </div>
            <div className="tab-search">
                <div className="search" onClick={handleSearch}>
                    <i className="bx bx-search"></i>
                </div>
                <div className={`box-search ${search ? "active" : ""}`}>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    );
}

export default TabBar;
