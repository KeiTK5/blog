import React from "react";
import ItemSub from "../item/itemSub/ItemSub";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Popular() {
    return (
        <>
            <div className="popular">
                <div className="wrapper-popular">
                    <Tem title="MOST POPULAR" backgroundColor="#222" borderBottom="#222" color="white" />
                    <div className="box-popular">
                        <ItemSub content="Study 2020: Fake Engagement is Only Half the Problem" image="popular-1" />
                        <ItemSub content="What Do I Need to Make It in the World of Business?" image="popular-2" />
                        <ItemSub content="Ecommerce Brands Tend to Create Strong Communities" image="popular-3" />
                        <ItemSub content="Study 2020: Fake Engagement is Only Half the Problem" image="popular-1" />
                        <ItemSub content="What Do I Need to Make It in the World of Business?" image="popular-2" />
                        <ItemSub content="Ecommerce Brands Tend to Create Strong Communities" image="popular-3" />
                    </div>
                    <Button />
                </div>
            </div>
            <div className="comment">
                <div className="wrapper-comment">
                    <Tem title="RECENT COMMENTS" backgroundColor="#222" borderBottom="#222" color="white" />
                    <div className="box-comment">
                        <div className="comment">
                            <div className="cmt">
                                <span>Mary Dill on </span>
                                <a href="#">Another Big Apartment Project Slated for Broad Ripple Company</a>
                            </div>
                            <div className="cmt">
                                <span>Georgia Summer on </span>
                                <a href="#">Patricia Urquiola Coats Transparent Glas Tables for Livings</a>
                            </div>
                            <div className="cmt">
                                <span>Michael Brain on </span>
                                <a href="#">Top Fashion Trends to Look for in Every Important Collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popular;
