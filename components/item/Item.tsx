import React from "react";

interface Props {
    image: string;
    title: string;
}
function Item({ image, title }: Props) {
    return (
        <div className="item">
            <div className="img">
                <img src={`/images/${image}.jpg`} alt="" />
                <div className="temp">Interiors</div>
            </div>
            <div className="title">
                <a href="#">{title}</a>
            </div>
            <div className="author-box">
                <div className="author">Armin Vans </div> - <div className="post-date"> August 7, 2019</div>
            </div>
            <div className="description">
                We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed
                down to...
            </div>
        </div>
    );
}

export default Item;
