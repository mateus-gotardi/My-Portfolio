import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "./vr.json";

const SkillsAnimation = () => {
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
        <div className="animation skills-anim" ref={container}>
            
        </div>
    )
}

export default SkillsAnimation