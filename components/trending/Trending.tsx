import React, { useContext } from "react";
import Link from "next/link";
function Trending() {
    return (
        <div className="trending">
            <div className="wrapper-trend">
                <div className="box-trend">
                    <div className="item-trend">
                        <Link href="/">
                            <img src="/images/trending-1.jpg" alt="" />
                            <div className="box-content">
                                <div className="item-tem">fashion</div>
                                <div className="item-title">WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City</div>
                                <div className="item-sign">
                                    <div className="item-author">Armin Vans - </div>
                                    <div className="item-post-date">August 7, 2019</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="box-trend trending-grid">
                    <div className="item-trend-small">
                        <Link href="/">
                            <img src="/images/trending-2.jpg" alt="" />
                            <div className="box-content">
                                <div className="item-tem">gadgets</div>
                                <div className="item-title">Game Changing Virtual Reality Console Hits the Market</div>
                            </div>
                        </Link>
                    </div>
                    <div className="item-trend-small">
                        <Link href="/">
                            <img src="/images/trending-3.jpg" alt="" />
                            <div className="box-content">
                                <div className="item-tem">travel</div>
                                <div className="item-title">Discover the Most Magical Sunset in Santorini</div>
                            </div>
                        </Link>
                    </div>
                    <div className="item-trend-small">
                        <Link href="/">
                            <img src="/images/trending-4.jpg" alt="" />
                            <div className="box-content">
                                <div className="item-tem">reviews</div>
                                <div className="item-title">Computer Filters Noise to Make You a Better Listener</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trending;
