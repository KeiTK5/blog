import React from "react";
import Item from "../item/Item";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Article() {
    return (
        <div className="article">
            <div className="wrapper-article">
                <Tem title="LATEST ARTICLES" backgroundColor="#222" color="white" borderBottom="#222" />
                <div className="box-article">
                    <div className="item-article">
                        <Item image="article-1" title="Another Big Apartment Project Slated for Broad Ripple Company" />
                        <Item image="article-2" title="Ambrose Seeks Offers on Downtown Building for Apartments" />
                        <Item image="article-3" title="Interior Designer and Maude Interiors by Yvonne Designs" />
                        <Item image="article-4" title="Scandinavian Boho Three-bed Decorated with Neutral Tones" />
                    </div>
                    <div className="item-article">
                        <Item image="article-5" title="Patricia Urquiola Coats Transparent Glas Tables for Livings" />
                        <Item image="article-6" title="Taina Blue Retreat is a Converted Tower on the Greek Coast" />
                        <Item image="article-7" title="Modern Monochrome Home with Calm and Cosy Terrace and Steps" />
                        <Item image="article-8" title="Luxurious Four-Bedroom House with Roman Stone Bath House" />
                    </div>
                </div>
                <Button />
            </div>
        </div>
    );
}

export default Article;
