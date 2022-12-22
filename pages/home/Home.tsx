import React, { createContext, useContext, useRef, useState } from "react";
import Left from "../../components/colums/Left/Left";
import Right from "../../components/colums/Right/Right";
import Trending from "../../components/trending/Trending";
import { useResize } from "../../hooks/useResize";

const WidthContext = createContext(0);

function HomePage() {
    const [visible, setVisible] = useState(false);
    const isBrowser = () => typeof window !== "undefined";

    const refWidth = useRef(null);
    const { width } = useResize(refWidth);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    if (isBrowser()) {
        //Only add the event listener client-side
        window.addEventListener("scroll", toggleVisible);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <WidthContext.Provider value={width}>
            <div className="main-page" ref={refWidth}>
                <Trending />
                <div className="wrapper-row">
                    <Left />
                    <Right />
                </div>
                <div className="scroll" style={{ opacity: visible ? 1 : 0 }}>
                    <i className="bx bx-chevron-up" onClick={scrollToTop}></i>
                </div>
            </div>
        </WidthContext.Provider>
    );
}

export const useWidthContext = () => useContext(WidthContext);
export default HomePage;
