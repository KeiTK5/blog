import React, { useState } from "react";
import Item from "../item/Item";
import ItemSub from "../item/itemSub/ItemSub";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Lifestyle() {
    const [active, setActive] = useState(false);
    const openMenu = () => {
        setActive(!active);
    };
    return (
        <div className="life-style">
            <div className="wrapper-life-style">
                <div className="box-nav">
                    <Tem title="LIFESTYLE NEWS" backgroundColor="#3a863d" color="white" borderBottom="#3a863d" />
                    <div className="nav-life-mobile" onClick={openMenu}>
                        <i className="bx bx-menu"></i>
                    </div>
                    <div className={`nav-life ${active ? "active" : ""}`}>
                        <div className="item-life-text">
                            <a href="#" className="text-life">
                                All
                            </a>
                        </div>
                        <div className="item-life-text">
                            <a href="#" className="text-life">
                                Travel
                            </a>
                        </div>
                        <div className="item-life-text">
                            <a href="#" className="text-life">
                                Recipes
                            </a>
                        </div>
                        <div className="item-life-text">
                            <a href="#" className="text-life">
                                Health & Fitness
                            </a>
                        </div>
                        <div className="item-life-text">
                            <a href="#" className="text-life">
                                Music
                            </a>
                        </div>
                    </div>
                </div>
                <div className="box-life">
                    <div className="item-life">
                        <Item image="life-5" title="Now Is the Time to Think About Your Small-Business Success" />
                        <div className="item-sub-life">
                            <ItemSub image="life-1" content="Best Things You Can Do on a Solo Mountain Climb" />
                            <ItemSub image="life-2" content="How To Use Basic Design Principles To Decorate Your Home" />
                        </div>
                    </div>
                    <div className="item-life">
                        <Item image="life-6" title="Radio Air Time Marketing: A New Strategy for the Economy" />
                        <div className="item-sub-life">
                            <ItemSub image="life-3" content="Creative Decorating with Houseplants, from Floor to Ceiling" />
                            <ItemSub image="life-4" content="How to Burn Calories with Pleasant Activities" />
                        </div>
                    </div>
                </div>
                <Button />
            </div>
        </div>
    );
}

export default Lifestyle;
