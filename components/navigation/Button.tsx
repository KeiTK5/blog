import React, { useState } from "react";

interface Props {
    bgBtn: string;
}
function Button({ bgBtn }: Props) {
    return (
        <div className="box-navigation">
            <div className="arrow">
                <i className="bx bx-chevron-left"></i>
            </div>
            <div className="arrow">
                <i className="bx bx-chevron-right"></i>
            </div>
        </div>
    );
}

export default Button;
