import React from "react";

interface Props {
    title: string;
    color: string;
    backgroundColor: string;
    borderBottom: string;
}

function Tem({ title, backgroundColor, color, borderBottom }: Props) {
    return (
        <div className="box-tem" style={{ borderBottom: `2px solid ${borderBottom}` }}>
            <div className="main-tem" style={{ background: backgroundColor, color: color }}>
                {title}
            </div>
        </div>
    );
}

export default Tem;
