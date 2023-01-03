import React, { useContext } from "react";
import ItemMain from "../item/itemMain/ItemMain";

interface Item {
    id: number;
    title: string;
    image: string;
    tag: string;
    position?: string;
}
function Trending() {
    const item: Item[] = [
        {
            id: 1,
            title: "WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City",
            image: "trending-1",
            tag: "Fashion",
            position: "main",
        },
        {
            id: 2,
            title: "Game Changing Virtual Reality Console Hits the Market",
            image: "trending-2",
            tag: "Gadgets",
            position: "sub",
        },
        {
            id: 3,
            title: "Discover the Most Magical Sunset in Santorini",
            image: "trending-3",
            tag: "Travel",
            position: "sub",
        },
        {
            id: 4,
            title: "Computer Filters Noise to Make You a Better Listener",
            image: "trending-4",
            tag: "Reviews",
            position: "sub",
        },
    ];

    return (
        <div className="trending">
            <div className="wrapper-trend">
                <div className="box-trend">
                    {item?.map(
                        (item) =>
                            item?.position === "main" && (
                                <div className="item-trend" key={item.id}>
                                    <ItemMain item={item} />
                                </div>
                            )
                    )}
                </div>
                <div className="box-trend trending-grid">
                    {item?.map(
                        (item) =>
                            item?.position === "sub" && (
                                <div className="item-trend-small" key={item.id}>
                                    <ItemMain item={item} />
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Trending;
