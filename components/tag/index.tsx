import React from "react";

interface Tag {
    id: number;
    title: string;
    background: string;
    color?: string;
    border?: string;
}

interface Props {
    tag: Tag[];
}

export default function Tag(props: Props) {
    const { tag } = props;
    return (
        <div className="tag-category">
            <div className="box-tag">
                {tag?.map((item) => (
                    <div className="tag" key={item.id} style={{ background: item.background, color: item.color, border: `1px solid ${item.border}` }}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
