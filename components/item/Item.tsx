import React from "react";
import Author from "../author/Author";
import Link from "next/link";

interface Props {
    image: string;
    title: string;
    tag?: string;
}
function Item({ image, title, tag }: Props) {
    return (
        <div className="item">
            <div className="img">
                <img src={`/images/${image}.jpg`} alt="" />
                <div className="temp">{tag}</div>
                <div className="box-icon-play">
                    <i className="bx bx-play" />
                </div>
            </div>
            <div className="title">
                <Link href="/new-magazine">{title}</Link>
            </div>
            <Author />
            <div className="description">
                We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed
                down to...
            </div>
        </div>
    );
}

export default Item;
