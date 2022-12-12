import React from "react";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Holiday() {
    return (
        <div className="holiday">
            <div className="wrapper-holiday">
                <Tem title="HOLIDAY RECIPES" backgroundColor="#8954c1" color="white" borderBottom="#8954c1" />
                <div className="box-holiday">
                    <div className="item-holiday">
                        <div className="title-train">
                            <a href="#">Everyone Should Travel for Their Favorite Foods</a>
                        </div>
                        <div className="author-box">
                            <div className="author">Armin Vans </div> - <div className="date-post"> August 7, 2019</div>
                        </div>
                        <div className="img-train">
                            <img src="/images/recipes-1.jpg" alt="" />
                            <div className="temp">Recipes</div>
                        </div>
                        <div className="desc-train">
                            We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our
                            packs, we headed down to our homestay family’s small dining...
                        </div>
                    </div>
                    <div className="item-holiday">
                        <div className="title-train">
                            <a href="#">Everyone Should Travel for Their Favorite Foods</a>
                        </div>
                        <div className="author-box">
                            <div className="author">Armin Vans </div> - <div className="date-post"> August 7, 2019</div>
                        </div>
                        <div className="img-train">
                            <img src="/images/recipes-1.jpg" alt="" />
                            <div className="temp">Recipes</div>
                        </div>
                        <div className="desc-train">
                            We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our
                            packs, we headed down to our homestay family’s small dining...
                        </div>
                    </div>
                </div>
                <Button />
            </div>
        </div>
    );
}

export default Holiday;
