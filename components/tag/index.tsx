import React from "react";

interface Props {
    title: string;
    background: string;
}

export default function Tag(props: Props) {
    const { title, background } = props;
    return (
        <div className="box-tag">
            <div className="tag" style={{ background: background }}>
                {title}
            </div>
        </div>
    );
}
