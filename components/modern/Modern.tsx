import React, { useContext, useRef } from "react";
import { useResize } from "../../hooks/useResize";
import { useWidthContext } from "../../pages/home/Home";
import Item from "../item/Item";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Modern() {
    const width = useWidthContext();
    const modern = [
        {
            id: 1,
            image: "modern-1",
            title: "Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island",
        },
        {
            id: 2,
            image: "modern-2",
            title: "Luxe Hallway with Chess Table Flooring and Large Rounded Windows",
        },
        {
            id: 3,
            image: "modern-3",
            title: "Modern Bathroom with Metro Rocks, Large Plant and Neutral Tiles",
        },
        {
            id: 4,
            image: "modern-4",
            title: "Man Agrees to Complete $50,000 Hereford Lighthouse Paint Job",
        },
        {
            id: 5,
            image: "modern-5",
            title: "Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island",
        },
        {
            id: 6,
            image: "modern-6",
            title: "Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island",
        },
    ];

    const sliceData = (width: number) => {
        console.log(width);

        if (width < 768) {
            return modern?.slice(0, 4);
        } else {
            return modern;
        }
    };
    return (
        <div className="modern">
            <div className="wrapper-modern">
                <Tem title="MAKE IT MODERN" backgroundColor="#222" color="white" borderBottom="#222" />
                <div className="box-modern">
                    {sliceData(width)?.map((item) => (
                        <Item key={item.id} image={item.image} title={item.title} />
                    ))}
                </div>
                <Button />
                <div className="background-stay">
                    <img src="/images/stay.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Modern;
