import React from "react";
import Item from "../item/Item";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Modern() {
    return (
        <div className="modern">
            <div className="wrapper-modern">
                <Tem title="MAKE IT MODERN" backgroundColor="#222" color="white" borderBottom="#222" />
                <div className="box-modern">
                    <div className="column-modern">
                        <Item image="modern-1" title="Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island" />
                        <Item image="modern-2" title="Luxe Hallway with Chess Table Flooring and Large Rounded Windows" />
                    </div>
                    <div className="column-modern">
                        <Item image="modern-3" title="Modern Bathroom with Metro Rocks, Large Plant and Neutral Tiles" />
                        <Item image="modern-3" title="Man Agrees to Complete $50,000 Hereford Lighthouse Paint Job" />
                    </div>
                </div>
                <div className="box-modern">
                    <div className="column-modern">
                        <Item image="modern-1" title="Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island" />
                        <Item image="modern-2" title="Luxe Hallway with Chess Table Flooring and Large Rounded Windows" />
                    </div>
                    <div className="column-modern">
                        <Item image="modern-3" title="Modern Bathroom with Metro Rocks, Large Plant and Neutral Tiles" />
                        <Item image="modern-3" title="Man Agrees to Complete $50,000 Hereford Lighthouse Paint Job" />
                    </div>
                </div>
                <Button bgBtn="#222" />
                <div className="img-banner">
                    <img src="/images/stay.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Modern;
