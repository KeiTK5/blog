import React from "react";
import Item from "../item/Item";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function House() {
    return (
        <div className="house">
            <div className="wrapper-house">
                <Tem title="HOUSE DESIGN" backgroundColor="#5d7987" color="white" borderBottom="#5d7987" />
                <div className="box-house">
                    <Item image="house-1" title="Modern Monochrome Home with Calm and Cosy Terrace and Steps" />
                    <Item image="house-2" title="Scandinavian Boho Three-bed Decorated with Neutral Tones" />
                    <Item image="house-3" title="Luxurious Four-Bedroom House with Roman Stone Bath House" />
                </div>
                <Button/>
            </div>
        </div>
    );
}

export default House;
