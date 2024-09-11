import './App.css'
import './About.css'
import phoneImage from './assets/rw-phone.png'
import ipadImage from './assets/rw-ipad.png'
import {useEffect, useRef, useState} from "react";

export const About = () => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isSmall, setIsSmall] = useState(false);
    useEffect(() => {
        if(textRef.current){
            setIsSmall(textRef.current.clientHeight / window.innerHeight > 0.60);
        }
        const handler = () => {
            const textHeight = textRef.current?.clientHeight;
            const winHeight = window.innerHeight;
            if(!textHeight || textHeight/winHeight < 0.60){
                setIsSmall(false);
                return;
            }
            setIsSmall(true);

        }
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
        }
    }, []);

    useEffect(() => {
        console.log(isSmall);
    }, [isSmall]);

    return <div className="about">
        <div className={"imgDiv" + (isSmall ? ' imgDivSmol':'')}>
            <img src={ipadImage} className="ipadImg" alt='reader app on ipad'/>
            <img src={phoneImage} className="phoneImg" alt='reader app on iphone'/>
        </div>
        <div className={isSmall ? "aboutTextSmol":"aboutText"} ref={textRef}>
            <h1>What is Readwise</h1>
            <p>
                Readwise is a Toronto-based start-up aiming to develop the ultimate reading apps.
                Their flagship product, on which I've had the privilege to work on, is the Readwise Reader -
                A power-user focused app packed with features designed for productivity.<br/><br/>
                There is another app in the works however, which I hope to contribute to in my next
                four months - Bookwise, an all-in-one book store, reader and audio book platform.
            </p>
        </div>
    </div>
}