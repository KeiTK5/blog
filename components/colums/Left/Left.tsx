import React from "react";
import News from "../../news/News";
import Lifestyle from "../../lifestyle/Lifestyle";
import House from "../../house/House";
import Training from "../../training/Training";
import Article from "../../article/Article";
function Left() {
    return (
        <div className="columns-left">
            <News />
            <Lifestyle />
            <House />
            <Training />
            <Article />
        </div>
    );
}

export default Left;
