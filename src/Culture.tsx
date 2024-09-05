import './App.css';
import './Culture.css';
import jamImage from './assets/jamwise.jpg'

export const Culture = () => (
    <div className="Culture">
        <div className="cultureText">
            <h1>Readwise Culture</h1>
            <p>
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
            </p>
        </div>
        <div className="imgDiv">
            <img src={jamImage} alt="JamWise in session" className="cultureImage" />
            <h2>Readwise Jamwise practice in session</h2>
        </div>
    </div>
)