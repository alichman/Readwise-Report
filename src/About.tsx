import './App.css'
import './About.css'
import phoneImage from './assets/rw-phone.png'
import ipadImage from './assets/rw-ipad.png'

export const About = () => (
    <div className="about">
        <div className="imgDiv">
            <img src={ipadImage} className="ipadImg" alt='reader app on ipad'/>
            <img src={phoneImage} className="phoneImg" alt = 'reader app on iphone'/>
        </div>
        <div className="aboutText">
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
)