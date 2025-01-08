import './App.css'
import './About.css'
import phoneImage from './assets/rw-phone.png'
import ipadImage from './assets/rw-ipad.png'
import {useEffect, useRef, useState} from "react";

export const About = () => {
    return <div className="about">
        <div className={'imgDiv'}>
            <img src={ipadImage} className="ipadImg" alt='reader app on ipad'/>
            <img src={phoneImage} className="phoneImg" alt='reader app on iphone'/>
        </div>
        <div className={"aboutText"}>
            <h1>What is Readwise</h1>
            <p>
                Readwise is a Toronto-based start-up aiming to develop the ultimate reading apps.
                Their flagship product, on which I've had the privilege to work on, is the Readwise Reader -
                A power-user focused app designed with productivity in mind. It is packed with features
                like a built-in AI named GhostReader, Text-To-Speach, advanced highlight and note-taking tools,
                and much more.<br/><br/>
                Their original, titular product is an information digestion tool, meant to enable memorization
                and understanding of online content.<br/><br/>
                Readwise also has another major project in the works that I've had the chance to contribute
                during my second work term.
            </p>
        </div>
    </div>
}