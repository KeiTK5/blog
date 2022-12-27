import React from "react";
import ItemSub from "../item/itemSub/ItemSub";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

export default function MustRead() {
    return (
        <div className="wrapper-must-read">
            <Tem title="Must Read" backgroundColor="#000" borderBottom="#000" color="white" />
            <div className="box-must-read">
                <ItemSub content="Another Big Apartment Project Slated for Broad Ripple Company"/>
                <ItemSub content="Patricia Urquiola Coats Transparent Glas Tables for Livings"/>
                <ItemSub content="Ambrose Seeks Offers on Downtown Building for Apartments"/>
                <ItemSub content="Taina Blue Retreat is a Converted Tower on the Greek Coast"/>
                <ItemSub content="Interior Designer and Maude Interiors by Yvonne Designs"/>
            </div>
            <Button/>
        </div>
    );
}
