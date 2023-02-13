import Link from "next/link";
import React from "react";
import Author from "../../author/Author";

interface Item {
    id: number;
    title: string;
    image: string;
    tag: string;
    position?: string;
}

interface Props {
    item: Item;
}

export default function ItemMain({ item }: Props) {
    return (
        <div className="item-main">
            <img src={`/images/${item.image}.jpg`} alt="" />
            <div className="box-content">
                <div className="item-tem">{item.tag}</div>
                <Link href="/new-magazine" className="item-title">
                    {item.title}
                </Link>
                <Author />
            </div>
            <div className="box-icon-play">
                <i className="bx bx-play" />
            </div>
        </div>
    );
}
