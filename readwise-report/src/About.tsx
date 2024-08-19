import './App.css'
import './About.css'
import phoneImage from './assets/rw-phone.png'

export const About = () => (
    <div className="about">
        <img src={phoneImage} className="aboutImg" />
        <div className="aboutText">
            <h1>What is Readwise</h1>
            <p>
                Readwise is a Toronto-based start-up aiming to develop the ultimate reading apps.
                Their main product, on which I've had the privilege to work on, is the Readwise Reader -
                A power-user focused app packed with features designed for productivity.<br/><br/>
                In my opinion, they most definitely have the potential to dethrone Amazon and Adobe
                as the ultimate reading app.
            </p>
        </div>
    </div>
)