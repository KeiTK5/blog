import { useRouter } from "next/router";
import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import Item from "../../components/item/Item";
import MustRead from "../../components/must-read";
import Tag from "../../components/tag";
import Tem from "../../components/tem/Tem";

export default function Slug() {
    const router = useRouter();
    const slug = router.query.slug;

    return (
        <div className="wrapper-category">
            <div className="background-category" style={{ backgroundImage: `url("/images/slug-1.jpg")` }}>
                <div className="max-width">
                    <Breadcrumb />
                    <div className="box-title-category">
                        <div className="title-category">New Look</div>
                        <div className="tag-category">
                            <Tag title="New Look" background="#000" />
                        </div>
                        <div className="des-category">Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.</div>
                    </div>
                </div>
            </div>
            <div className="max-width">
                <div className="box-content-category">
                    <div className="content-category">
                        <Tem title="LATEST NEWS" color="#fff" backgroundColor="#000" borderBottom="#000" />
                        <div className="box-item-category">
                            <Item title="Olivia Wilde Looking Forward to New Patterned Dress Collection" image="category-1" />
                            <Item title="Olivia Wilde Looking Forward to New Patterned Dress Collection" image="category-2" />
                        </div>
                    </div>
                    <div className="columns-right">
                        <MustRead />
                    </div>
                </div>
            </div>
        </div>
    );
}
