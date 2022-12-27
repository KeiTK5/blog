import React from "react";

interface Props {
    image?: string;
    content: string;
}
function ItemSub({ image, content }: Props) {
    return (
        <div className="item-thump">
            {image && (
                <div className="img">
                    <img src={`/images/${image}.jpg`} alt="" />
                </div>
            )}
            <div className="box-title">
                <div className="title">
                    <a href="#">{content}</a>
                </div>
                <div className="author">
                    <div className="post-date"> August 7, 2019</div>
                </div>
            </div>
        </div>
    );
}

export default ItemSub;
