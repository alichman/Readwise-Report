import './App.css';
import './Culture.css';
import jamImage from './assets/jamwise.jpg'
import {useEffect, useRef} from "react";

export const Culture = () => {
    const ref = useRef<HTMLParagraphElement>(null);
    useEffect(() => {

        const handler = () => {
            const value = ref.current;
            if(!value){
                return
            }
            const percent = value.scrollTop / (value.scrollHeight - value.clientHeight);
            console.log(percent);
        }

        ref.current?.addEventListener('scroll', handler);
        const refValue = ref.current;
        return () => {
            refValue?.removeEventListener('scroll', handler);
        }
    }, []);

    return <div className="Culture">
        <div className="cultureText">
            <h1>Readwise Culture</h1>
            <p ref={ref}>
                I joined Readwise for the amazing learning opportunity.<br/>
                I'm staying for another 4 months for the people.<br/><br/>
                Right from my onboarding, the feeling between myself and my managers hadn't
                that of professional duty, but of a personal apprenticeship.<br/><br/> On my first day, my direct
                manager Artem tested my skills by having me solve a simple glitch on my very first day,
                giving me hints only when I needed them. With my eventual success, I quickly adjusted to both the
                challenging nature of my new position, and the friendly atmosphere of the workplace. I immediately knew
                that while my skills would constantly be pressured to improve, I'd have the support I'd need to hone my skills quickly.
                <br/><br/>
                This welcoming feeling persisted when I met the rest of the team online. Through working with different teams, and even
                other programmers, I've made a good few rookie mistakes, which were always met with the same combination of support and
                pressure to learn.
                <br/><br/>
                The work culture at Readwise heavily leans on the mutual trust between every member. Everyone knows their responsibility,
                their strengths, and their limits. The team uses Gather for their meetings, making discussions easily accessible to everyone.
                <br/><br/>
                I've also had a chance to personally contribute to the office culture in Toronto. About a month into my internship, the topic
                of musical instruments came up in conversation. Long story short, Readwise Jamwise became a weekly event in the office (See image to the right).
            </p>
        </div>
        <div className="imgDiv">
            <img src={jamImage} alt="JamWise in session" className="cultureImage" />
            <h2>Readwise Jamwise practice in session</h2>
        </div>
    </div>
}