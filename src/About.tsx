import './App.css'
import './About.css'
import phoneImage from './assets/rw-phone.png'
import ipadImage from './assets/rw-ipad.png'

export const About = () => {
    return <div className="about">
        <div className={'imgDiv'}>
            <img src={ipadImage} className="ipadImg" alt='reader app on ipad'/>
            <img src={phoneImage} className="phoneImg" alt='reader app on iphone'/>
        </div>
        <div className={"aboutText"}>
            <h1>What is Readwise</h1>
            <p>
                Readwise is a Toronto-based start-up aiming to develop the ultimate reading and information processing apps.
                Their flagship product is the Readwise Reader -
                A power-user focused reading app designed with productivity in mind. The app is intended to be used on
                any piece of information from pdf to twitter thread, and offers a variety of creative features
                such as a built-in AI named GhostReader, Text-To-Speach, advanced highlight and note-taking tools,
                and much more.<br/><br/>
                Their original, titular product is an information digestion tool, meant to enable memorization
                and understanding of online content.<br/><br/>
                Readwise also has a third major project in the works that I've had the chance to contribute
                during my second work term. This new application was the major point of focus for my third term.
            </p>
        </div>
    </div>
}