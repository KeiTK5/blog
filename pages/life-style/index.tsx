import React from "react";
import Author from "../../components/author/Author";
import Breadcrumb from "../../components/breadcrumb";
import ItemSub from "../../components/item/itemSub/ItemSub";
import MustRead from "../../components/must-read";
import Tag from "../../components/tag";
import TitleCategory from "../../components/title-category";

interface Tag {
    id: number;
    title: string;
    color: string;
    background: string;
    border: string;
}

const tag: Tag[] = [
    {
        id: 1,
        title: "Business",
        color: "black",
        background: "#fff",
        border: "#ddd",
    },
    {
        id: 2,
        title: "Health & Fitness",
        color: "black",
        background: "#fff",
        border: "#ddd",
    },
    {
        id: 3,
        title: "Recipes",
        color: "black",
        background: "#fff",
        border: "#ddd",
    },
    {
        id: 4,
        title: "Travel",
        color: "black",
        background: "#fff",
        border: "#ddd",
    },
];

export default function index() {
    return (
        <div className="life-style">
            <div className="max-width">
                <Breadcrumb />
                <TitleCategory color="black" title="Life Style" />
                <Tag tag={tag} />
                <div className="des-category">Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.</div>
            </div>

            <div className="wrapper-gradient-life">
                <div className="item-gradient">
                    <img src="/images/life-style-1.jpg" alt="" />

                    <div className="box-title-gradient">
                        <div className="job-gradient">Business</div>
                        <div className="title-gradient">Study 2020: Fake Engagement is Only Half the Problem</div>
                        <Author />
                    </div>
                </div>
                <div className="item-gradient">
                    <img src="/images/life-style-2.jpg" alt="" />

                    <div className="box-title-gradient">
                        <div className="job-gradient">Business</div>
                        <div className="title-gradient">What Do I Need to Make It in the World of Business?</div>
                        <Author />
                    </div>
                </div>
                <div className="item-gradient">
                    <img src="/images/life-style-3.jpg" alt="" />

                    <div className="box-title-gradient">
                        <div className="job-gradient">Business</div>
                        <div className="title-gradient">Ecommerce Brands Tend to Create Strong Communities</div>
                        <Author />
                    </div>
                </div>
                <div className="item-gradient">
                    <img src="/images/life-style-4.jpg" alt="" />

                    <div className="box-title-gradient">
                        <div className="job-gradient">Business</div>
                        <div className="title-gradient">Top 10 Interior Design in 2020 New York Business</div>
                        <Author />
                    </div>
                </div>
            </div>

            <div className="wrapper-content-life">
                <div className="max-width">
                    <div className="columns-left">
                        <ItemSub content="The Biggest Mistakes Influencers Make on Instagram" image="life-style-5" />
                        <ItemSub content="Increase your Endurance Through the Pilates Method" image="life-style-6" />
                        <ItemSub content="Motivational Songs to Have a Successful Workout" image="life-style-7" />
                    </div>
                    <div className="columns-right">
                        <MustRead />
                    </div>
                </div>
            </div>
        </div>
    );
}
