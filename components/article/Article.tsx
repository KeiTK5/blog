import React from "react";
import { useWidthContext } from "../../pages/home/Home";
import Item from "../item/Item";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Article() {
    const width = useWidthContext();

    const article = [
        {
            id: 1,
            image: "article-1",
            title: "Another Big Apartment Project Slated for Broad Ripple Company",
        },
        {
            id: 2,
            image: "article-2",
            title: "Ambrose Seeks Offers on Downtown Building for Apartments",
        },
        {
            id: 3,
            image: "article-3",
            title: "Interior Designer and Maude Interiors by Yvonne Designs",
        },
        {
            id: 4,
            image: "article-4",
            title: "Scandinavian Boho Three-bed Decorated with Neutral Tones",
        },
        {
            id: 5,
            image: "article-5",
            title: "Patricia Urquiola Coats Transparent Glas Tables for Livings",
        },
        {
            id: 6,
            image: "article-6",
            title: "Taina Blue Retreat is a Converted Tower on the Greek Coast",
        },
        {
            id: 7,
            image: "article-7",
            title: "Modern Monochrome Home with Calm and Cosy Terrace and Steps",
        },
        {
            id: 8,
            image: "article-8",
            title: "Luxurious Four-Bedroom House with Roman Stone Bath House",
        },
    ];
    const sliceData = (width: number) => {
        if (width < 768) {
            return article?.slice(0, 4);
        } else {
            return article;
        }
    };
    return (
        <div className="article">
            <div className="wrapper-article">
                <Tem title="LATEST ARTICLES" backgroundColor="#222" color="white" borderBottom="#222" />
                <div className="box-article">
                    {sliceData(width)?.map((item) => (
                        <Item key={item.id} image={item.image} title={item.title} />
                    ))}
                </div>
                <Button />
            </div>
        </div>
    );
}

export default Article;
