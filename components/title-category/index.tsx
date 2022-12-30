import React from "react";

interface Props {
    title: string;
    color: string;
}

export default function TitleCategory(props: Props) {
    const { title, color } = props;
    return (
        <div className="box-title-category">
            <div className="title-category" style={{ color: color }}>
                {title}
            </div>
        </div>
    );
}
