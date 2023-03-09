import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "./ufo.json";

const ProgrammerAnimation = () => {
    const container = useRef(null)
    useEffect(() => {
        const params = {
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        };
        let anim = Lottie.loadAnimation(params)
        return () => anim.destroy()
    }, [])


    return (
        <div className="animation" ref={container}>
        </div>
    )
}

export default ProgrammerAnimation