import React, { useEffect, useState, useRef } from "react";
import { useResize } from "../../hooks/useResize";

function index() {
    const componentRef = useRef(null);
    const { width } = useResize(componentRef);

    return (
        <div className="max-width" ref={componentRef}>
            <p>width: {width}px</p>
        </div>
    );
}

export default index;
