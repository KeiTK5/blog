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
                    <Link href="#" className="item active">
                        new
                    </Link>
                </div>
                <div className="tab-item ">
                    <Link href="/category/a" className="item">
                        fashion <i className="bx bx-chevron-down" />
                    </Link>
                    <ul className="menu">
                        <div className="menu-box">
                            <Link href="/category/a" className="menu-item active">
                                All
                            </Link>
                            <Link href="/category/a" className="menu-item">
                                New Look
                            </Link>
                            <Link href="/category/a" className="menu-item">
                                Street Fashion
                            </Link>
                            <Link href="/category/a" className="menu-item">
                                Style Hunter
                            </Link>
                            <Link href="/category/a" className="menu-item">
                                Vogue
                            </Link>
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
                    <Link href="#" className="item">
                        gadgets <i className="bx bx-chevron-down" />
                    </Link>
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
                    <Link href="#" className="item">
                        features <i className="bx bx-chevron-down" />
                    </Link>
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
                    <i className="bx bx-search" />
                </div>
                <div className={`box-search ${search ? "active" : ""}`}>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    );
}

export default TabBar;
