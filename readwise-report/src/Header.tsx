import './App.css'
import {useEffect, useState} from "react";

export const Header = () => {
    const [doAnimation, setDoAnimation] = useState(true)
    useEffect(() => {
        setDoAnimation(false);
    }, []);

    const className = "App-header " //+ doAnimation? "headerTextDivOnLoad":''

    return <header className={className}>
        <div className="headerTextDiv">
        <h1>The Readwise Report</h1>
        <p>A summary of my experience working at the company,
            what I've learned, and what I look forward to
            for my next term with Readwise.</p>
        </div>
    </header>


}