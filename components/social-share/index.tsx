import React from "react";

export default function SocialShare() {
    return (
        <div className="box-share-social">
            <div className="box-share">
                <i className="bx bxs-share-alt" />
                <span className="wall">|</span>
                <span className="share">Share</span>
            </div>
            <div className="box-social-magazine">
                <span className="icon-magazine">
                    <i className="bx bxl-meta" />
                </span>
                <span className="icon-magazine">
                    <i className="bx bxl-twitter" />
                </span>
                <span className="icon-magazine">
                    <i className="bx bxl-pinterest-alt" />
                </span>
                <span className="icon-magazine">
                    <i className="bx bxl-whatsapp" />
                </span>
            </div>
        </div>
    );
}
