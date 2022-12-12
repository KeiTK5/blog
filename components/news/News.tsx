import React from "react";
import Tem from "../tem/Tem";
import Item from "../item/Item";
import ItemSub from "../item/itemSub/ItemSub";
import Button from "../navigation/Button";
function News() {
    return (
        <div className="news">
            <div className="wrapper-news">
                <div className="box-nav">
                    <Tem title="DON'T MISS" backgroundColor="#f9c100" color="black" borderBottom="#f9c100" />
                    <div className="nav-news">
                        <div className="item-news">
                            <a href="#" className="text-news">
                                All
                            </a>
                        </div>
                        <div className="item-news">
                            <a href="#" className="text-news">
                                Style Hunter
                            </a>
                        </div>
                        <div className="item-news">
                            <a href="#" className="text-news">
                                Vogue
                            </a>
                        </div>
                        <div className="item-news">
                            <a href="#" className="text-news">
                                Health & Fitness
                            </a>
                        </div>
                        <div className="item-news">
                            <a href="#" className="text-news">
                                Travel
                            </a>
                        </div>
                        <div className="item-news">
                            <a href="#" className="text-news">
                                Gadgets
                            </a>
                        </div>
                        <div className="item-news">
                            <a href="#" className="text-news">
                                More <i className="bx bx-chevron-down"></i>
                            </a>
                            <div className="menu-sub-news">
                                <div className="item-sub-news">Racing</div>
                                <div className="item-sub-news">Reviews</div>
                                <div className="item-sub-news">Mobile Phone</div>
                                <div className="item-sub-news">Photography</div>
                                <div className="item-sub-news">Make It Modern</div>
                                <div className="item-sub-news">Decorating</div>
                                <div className="item-sub-news">Recipes</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-news">
                    <div className="box-item-news">
                        <Item image="news-1" title="Interior Designer and Maude Interiors by Yvonne Designs" />
                    </div>
                    <div className="box-item-news">
                        <ItemSub image="news-2" content="Have a look around this bold and colourful 1930s semi in London" />
                        <ItemSub image="news-3" content="Outdoor Kitchen Decorating: Furnish and Accessorize with Flair" />
                        <ItemSub image="news-4" content="Interior Design Tips: Decorating to Celebrate the Great Outdoors" />
                        <ItemSub image="news-5" content="Citroen Could Revive the Third Car for Loeb/Breen Winning Couple" />
                    </div>
                </div>
                <Button />
            </div>
        </div>
    );
}

export default News;
