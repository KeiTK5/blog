import React, { useRef } from "react";
import { useResize } from "../../hooks/useResize";
import Item from "../item/Item";
import Button from "../navigation/Button";
import Tem from "../tem/Tem";

function Modern() {
    const componentRef = useRef(null);
    const { width } = useResize(componentRef);
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
            image: "modern-1",
            title: "Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island",
        },
        {
            id: 6,
            image: "modern-2",
            title: "Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island",
        },
    ];

    const sliceData = (width: number) => {
        if (width < 480) {
            return modern?.slice(0, 3);
        }
    };
    return (
        <div ref={componentRef} className="modern">
            <div className="wrapper-modern">
                <Tem title="MAKE IT MODERN" backgroundColor="#222" color="white" borderBottom="#222" />
                <div className="box-modern">
                    {sliceData(width)?.map((item) => (
                        <Item key={item.id} image={item.image} title={item.title} />
                    ))}
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
