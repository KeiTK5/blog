import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import Item from "../../components/item/Item";
import ItemMain from "../../components/item/itemMain/ItemMain";
import MustRead from "../../components/must-read";
import TitleCategory from "../../components/title-category";

export default function index() {
    const item = [
        {
            id: 1,
            title: "After Effects Guru: Tracking and Stabilizing Footage",
            image: "video-1",
            tag: "video",
        },
        {
            id: 2,
            title: "What Happens When Your Carryon is Over the Limit",
            image: "video-2",
            tag: "video",
        },
    ];

    return (
        <div className="video">
            <div className="container-video max-width">
                <div className="content-video">
                    <div className="header-content-video">
                        <Breadcrumb />
                        <TitleCategory color="black" title="Video" />
                        <div className="des-category">Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.</div>
                    </div>
                    <div className="body-content-video">
                        <div className="wrapper-video-intro">
                            {item?.map((item) => (
                                <ItemMain key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="wrapper-row">
                            <div className="columns-left">
                                <Item title="Workout Routine for Big Forearms and a Crushing Grip" image="video-3" tag="video" />
                                <Item title="The Best of Vocal Deep House Chill Out Music Mix 2020" image="video-4" tag="video" />
                                <Item title="Video Receipes: How to Make a Perfect Caffe Macchiato" image="video-5" tag="video" />
                                <Item title="Major Deep New Release: Feelings Power Deep House Mix" image="video-6" tag="video" />
                            </div>
                            <div className="columns-right">
                                <div className="background-stay">
                                    <img src="/images/stay.jpg" alt="" />
                                </div>
                                <MustRead />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
