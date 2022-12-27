import React from "react";

export default function SocialShare() {
    return (
        <div className="box-share-social">
            <div className="box-share">
                <i className="bx bxs-share-alt"></i>
                <span className="wall">|</span>
                <span className="share">Share</span>
            </div>
            <div className="box-social-magazine">
                <span className="icon-magazine">
                    <i className="bx bxl-meta"></i>
                </span>
                <span className="icon-magazine">
                    <i className="bx bxl-twitter"></i>
                </span>
                <span className="icon-magazine">
                    <i className="bx bxl-pinterest-alt"></i>
                </span>
                <span className="icon-magazine">
                    <i className="bx bxl-whatsapp"></i>
                </span>
            </div>
        </div>
    );
}
