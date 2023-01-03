import React, { createContext, useContext, useRef } from "react";
import Left from "../../components/colums/Left/Left";
import Right from "../../components/colums/Right/Right";
import Trending from "../../components/trending/Trending";
import { useResize } from "../../hooks/useResize";

const WidthContext = createContext(0);

function HomePage() {

    const refWidth = useRef(null);
    const { width } = useResize(refWidth);

    

    return (
        <WidthContext.Provider value={width}>
            <div className="main-page max-width" ref={refWidth}>
                <Trending />
                <div className="wrapper-row">
                    <Left />
                    <Right />
                </div>
                
            </div>
        </WidthContext.Provider>
    );
}

export const useWidthContext = () => useContext(WidthContext);
export default HomePage;
