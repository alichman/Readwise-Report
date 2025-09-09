import './App.css';
import './Culture.css';
import jamImage from './assets/jamwise.jpg'

export const Culture = () => {
    return <div className="Culture">
        <div className="cultureText">
            <h1>Readwise Culture</h1>
            <p>
                I joined Readwise for the amazing learning opportunity.<br/>
                I'm stayed for another 4 months for the people.<br/><br/>
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
                The work culture at Readwise heavily leans on the mutual trust between every member. Everyone is aware of each other's
                proficiencies and limitations, and keep each other updated on their progress. The atmosphere of friendly productivity greatly
                helped me progress as an engineer.
                <br/><br/>
                Readwise has also always encouraged me to participate and evolve their culture. From gaming meetings to jam sessions,
                and eventually even an invitation to their offsite in Curacao, I always felt welcome, and even expected to form bonds
                with my coworkers.
            </p>
        </div>
        <div className="cultureImgDiv">
            <img src={jamImage} alt="JamWise in session" className="cultureImage" />
            <h2>Readwise Jamwise practice in session</h2>
        </div>
    </div>
}