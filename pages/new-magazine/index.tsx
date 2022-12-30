import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "../../components/breadcrumb";
import Item from "../../components/item/Item";
import Button from "../../components/navigation/Button";
import Popular from "../../components/popular/Popular";
import SocialShare from "../../components/social-share";
import Tag from "../../components/tag";
import Tem from "../../components/tem/Tem";

const tag = [
    {
        id: 1,
        title: "Fashion",
        color: "white",
        background: "#dd3333",
        border: "#ddd",
    },
];

function index() {
    return (
        <div className="new-magazine">
            <div className="container-magazine max-width">
                <div className="content-magazine">
                    <div className="header-content-magazine">
                        <Breadcrumb />
                        <Tag tag={tag} />
                        <div className="box-title-magazine">
                            <div className="main-title-magazine">WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City</div>
                            <div className="box-author-magazine">
                                <span className="author-magazine">
                                    <div className="avatar-author-magazine">
                                        <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg" alt="" />
                                    </div>
                                    <div className="name-author-magazine">
                                        By <span className="author-name">Armin Vans</span>
                                    </div>
                                    <div className="date-release-magazine">August 7, 2019</div>
                                </span>
                                <div className="views-magazine">
                                    <span className="view">
                                        <i className="bx bxs-quote-alt-right"></i>
                                        <span className="amount">40612</span>
                                    </span>
                                    <span className="mess">
                                        <i className="bx bxs-chat"></i>
                                        <span className="amount">1</span>
                                    </span>
                                </div>
                            </div>
                            <SocialShare />
                        </div>
                    </div>

                    <div className="body-content-magazine">
                        <div className="image-magazine">
                            <img src="/images/trending-1.jpg" alt="" />
                        </div>

                        <div className="box-single-magazine">
                            <div className="single-content">
                                We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family's small dining room for breakfast.
                            </div>
                            <div className="single-content strong">Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a beautiful picture.</div>
                            <div className="single-content">We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed scrambled eggs, toast, mekitsi, local jam and peppermint tea.</div>
                        </div>

                        <div className="image-magazine">
                            <img src="/images/magazine-1.jpg" alt="" />
                            <p className="des-image-magazine">Adderall and flirting with bulimia in an attempt to whittle herself</p>
                        </div>

                        <div className="box-single-magazine">
                            <div className="single-content">
                                We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I'm not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn't venture
                                far from the main church, but I didn't feel overwhelmed by tourists in the monastery.
                            </div>
                            <div className="sub-image-magazine">
                                <img src="/images/magazine-2.jpg" alt="" />
                                <p className="des-image-magazine">City Guide for Vienna</p>
                            </div>
                            <div className="single-content">Headed over Lions Bridge and made our way to the Sofia Synagogue, then sheltered in the Central Market Hall until the recurrent (but short-lived) mid-afternoon rain passed.</div>
                            <div className="single-content">Feeling refreshed after an espresso, we walked a short distance to the small but welcoming Banya Bashi Mosque, then descended into the ancient Serdica complex.</div>
                            <div className="single-content">We were exhausted after a long day of travel, so we headed back to the hotel and crashed.</div>
                            <div className="single-content">
                                I had low expectations about Sofia as a city, but after the walking tour I absolutely loved the place. This was an easy city to navigate, and it was a beautiful city – despite its ugly, staunch and stolid
                                communist-built surrounds. Sofia has a very average facade as you enter the city, but once you lose yourself in the old town area, everything changes.
                            </div>
                            <div className="blockquote">
                                <p>IF YOU HAVE IT, YOU CAN MAKE ANYTHING LOOK GOOD</p>
                            </div>

                            <div className="single-content">
                                Clothes can transform your mood and confidence. Fashion moves so quickly that, unless you have a strong point of view, you can lose integrity. I like to be real. I don't like things to be staged or fussy. I think I'd
                                go mad if I didn't have a place to escape to. You have to stay true to your heritage, that's what your brand is about.
                            </div>
                        </div>
                    </div>

                    <SocialShare />

                    <div className="box-navigation-magazine">
                        <div className="item-navigation-magazine">
                            <div className="article-navigation">Previous article</div>
                            <div className="article-navigation">Next article</div>
                        </div>
                        <div className="item-navigation-magazine">
                            <div className="content-article-magazine">Now Is the Time to Think About Your Small-Business Success</div>
                            <div className="content-article-magazine">Expert Advice: The Best Retro Chic Fashion for All Ages</div>
                        </div>
                    </div>

                    <div className="author-card-magazine">
                        <div className="avatar-author-card">
                            <img src="/images/avatar-magazine.jpg" alt="" />
                        </div>
                        <div className="info-author-card">
                            <div className="name-author-card">Armin Vans</div>
                            <div className="link-author-card">http://www.tagdiv.com</div>
                            <div className="des-author-card">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ac vehicula leo. Donec urna lacus gravida ac vulputate sagittis tristique vitae lectus. Nullam rhoncus tortor at dignissim vehicula.
                            </div>
                            <div className="social-author-card">
                                <span className="item-social-card">
                                    <i className="bx bxl-meta"></i>
                                </span>
                                <span className="item-social-card">
                                    <i className="bx bxl-instagram"></i>
                                </span>
                                <span className="item-social-card">
                                    <i className="bx bxl-twitter"></i>
                                </span>
                                <span className="item-social-card">
                                    <i className="bx bxl-youtube"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="box-related-article">
                        <Tem backgroundColor="black" color="white" title="Related Articles" borderBottom="black" />
                        <div className="box-item-related">
                            <Item image="related-article-1" title="Shop The Best Street Style From Paris Fashion Week Shows" />
                            <Item image="related-article-2" title="Expert Advice: The Best Retro Chic Fashion for All Ages" />
                        </div>
                        <Button />
                    </div>

                    <div className="box-comment-article">
                        <Tem backgroundColor="black" color="white" title="Comment" borderBottom="black" />
                        <div className="box-user-comment">
                            <div className="avatar-user-comment">
                                <img src="/images/avatar-magazine.jpg" alt="" />
                            </div>
                            <div className="des-user-comment">
                                <div className="header-user-comment">
                                    <span className="name-user-comment">Armin Vans</span>
                                    <span className="date-user-comment">August 14, 2019 At 5:47 am</span>
                                </div>
                                <div className="body-user-comment">Every outfit is carefully chosen by our designated fashion expert. Check them out!</div>
                            </div>
                        </div>
                        <div className="close-comment">Comments are closed.</div>
                    </div>
                </div>
                <div className="columns-right">
                    <Popular />
                </div>
            </div>
        </div>
    );
}

export default index;
