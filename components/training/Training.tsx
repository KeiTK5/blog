import Link from "next/link";
import React from "react";
import Tem from "../tem/Tem";

function Training() {
    return (
        <div className="training">
            <div className="wrapper-train">
                <Tem title="PERFORMANCE TRAINING" color="white" backgroundColor="#222" borderBottom="#222" />
                <div className="box-train">
                    <div className="item-train">
                        <div className="img-train">
                            <img src="/images/train-1.jpg" alt="" />
                        </div>
                        <div className="content-train">
                            <div className="title-train">
                                <Link href="#">KTM Marchetti Signs with Larranaga and Zanotti for Next Season</Link>
                            </div>
                            <div className="author-box">
                                <div className="author">Armin Vans </div> - <div className="date-post"> August 7, 2019</div>
                            </div>
                            <div className="desc-train">
                                We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our
                                packs, we headed down to our homestay family's small dining...
                            </div>
                        </div>
                    </div>
                    <div className="item-train">
                        <div className="img-train">
                            <img src="/images/train-2.jpg" alt="" />
                        </div>
                        <div className="content-train">
                            <div className="title-train">
                                <Link href="#">Celebrating 25 Years Since Italy’s First Ever Touring Inclusion</Link>
                            </div>
                            <div className="author-box">
                                <div className="author">Armin Vans </div> - <div className="date-post"> August 7, 2019</div>
                            </div>
                            <div className="desc-train">
                                We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our
                                packs, we headed down to our homestay family’s small dining...
                            </div>
                        </div>
                    </div>
                    <div className="item-train">
                        <div className="img-train">
                            <img src="/images/train-3.jpg" alt="" />
                        </div>
                        <div className="content-train">
                            <div className="title-train">
                                <Link href="#">Rumors, Gossip and Unfounded Truths: Every Moto Release Story</Link>
                            </div>
                            <div className="author-box">
                                <div className="author">Armin Vans </div> - <div className="date-post"> August 7, 2019</div>
                            </div>
                            <div className="desc-train">
                                We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our
                                packs, we headed down to our homestay family’s small dining...
                            </div>
                        </div>
                    </div>
                    <div className="item-train">
                        <div className="img-train">
                            <img src="/images/train-4.jpg" alt="" />
                        </div>
                        <div className="content-train">
                            <div className="title-train">
                                <Link href="#">Are you Ready? Complete Recap of the Streer Rally Action Shootout</Link>
                            </div>
                            <div className="author-box">
                                <div className="author">Armin Vans </div> - <div className="date-post"> August 7, 2019</div>
                            </div>
                            <div className="desc-train">
                                We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our
                                packs, we headed down to our homestay family’s small dining...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Training;
