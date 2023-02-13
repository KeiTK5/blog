import React, { useState } from "react";

function Button() {
    return (
        <div className="box-navigation">
            <div className="arrow">
                <i className="bx bx-chevron-left" />
            </div>
            <div className="arrow">
                <i className="bx bx-chevron-right" />
            </div>
        </div>
    );
}

export default Button;
