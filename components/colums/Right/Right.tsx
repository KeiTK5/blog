import React from "react";
import Holiday from "../../holiday/Holiday";
import Modern from "../../modern/Modern";
import Popular from "../../popular/Popular";
import StayConnect from "../../stay-connect/StayConnect";

function Right() {
    return (
        <div className="columns-right">
            <StayConnect />
            <Modern />
            <Holiday />
            <Popular />
        </div>
    );
}

export default Right;
