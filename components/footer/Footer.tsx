import Link from "next/link";
import React from "react";
import ItemSub from "../item/itemSub/ItemSub";

function Footer() {
    return (
        <div className="footer">
            <div className="wrapper-footer">
                <div className="max-width">
                    <div className="box-footer-main">
                        <div className="item-footer">
                            <div className="item-footer__title">EDITOR PICKS</div>
                            <div className="item-footer__content">
                                <ItemSub content="Modern Monochrome Home with Calm and Cosy Terrace and Steps" image="article-3" />
                                <ItemSub content="How To Use Basic Design Principles To Decorate Your Home" image="article-7" />
                                <ItemSub content="Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island" image="article-8" />
                            </div>
                        </div>
                        <div className="item-footer">
                            <div className="item-footer__title">POPULAR POSTS</div>
                            <div className="item-footer__content">
                                <ItemSub content="Discover the Most Magical Sunset in Santorini" image="trending-3" />
                                <ItemSub content="Game Changing Virtual Reality Console Hits the Market" image="trending-2" />
                                <ItemSub content="Computer Filters Noise to Make You a Better Listener" image="trending-4" />
                            </div>
                        </div>
                        <div className="item-footer">
                            <div className="item-footer__title">POPULAR CATEGORY</div>
                            <div className="item-footer__content">
                                <div className="item-footer__category">
                                    <div className="item-footer__category-title">Racing</div>
                                    <div className="item-footer__category-amount">20</div>
                                </div>
                                <div className="item-footer__category">
                                    <div className="item-footer__category-title">Street Fashion</div>
                                    <div className="item-footer__category-amount">18</div>
                                </div>
                                <div className="item-footer__category">
                                    <div className="item-footer__category-title">New Look</div>
                                    <div className="item-footer__category-amount">15</div>
                                </div>
                                <div className="item-footer__category">
                                    <div className="item-footer__category-title">Style Hunter</div>
                                    <div className="item-footer__category-amount">16</div>
                                </div>
                                <div className="item-footer__category">
                                    <div className="item-footer__category-title">Vogue</div>
                                    <div className="item-footer__category-amount">19</div>
                                </div>
                                <div className="item-footer__category">
                                    <div className="item-footer__category-title">Gadgets</div>
                                    <div className="item-footer__category-amount">17</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-footer-info">
                        <div className="logo-footer">
                            <img src="/images/logo-footer.png" alt="" />
                        </div>
                        <div className="item-footer__about">
                            <div className="item-footer__title">ABOUT US</div>
                            <div className="item-footer__about-des">
                                Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos
                                straight from the entertainment industry.
                            </div>
                            <div className="item-footer__about-contact">
                                Contact us: <span>contact@yoursite.com</span>
                            </div>
                        </div>
                        <div className="item-footer__follow">
                            <div className="item-footer__title">FOLLOW US</div>
                            <div className="item-footer__social">
                                <div className="item-social">
                                    <i className="bx bxl-meta" />
                                </div>
                                <div className="item-social">
                                    <i className="bx bxl-instagram" />
                                </div>
                                <div className="item-social">
                                    <i className="bx bxl-vk" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-footer-copy">
                        <div className="copyright">© Newspaper WordPress Theme by TagDiv</div>
                        <div className="menu-copy">
                            <Link href="#">Disclaimer</Link>
                            <Link href="#">Privacy</Link>
                            <Link href="#">Advertisement</Link>
                            <Link href="#">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
