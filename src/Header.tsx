import './App.css'
import './Header.css'
import {useEffect, useState} from "react";
import logo from './assets/rw-logo-dark.png';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true)
    }, []);

    return <header className={`App-header`}>
        <img src={logo} alt="readwise-logo" className={`logo ${isVisible ? 'imageOnLoad' : ''}`} />
        <div className={`headerTextDiv ${isVisible ? 'headerTextOnLoad' : ""}`}>
        <h1>The Readwise Report</h1>
        <p>A summary of my experience throughout my internship with the company. <br/><br/> Brought to you by Andrew Lichmanov</p>
        </div>
    </header>


}