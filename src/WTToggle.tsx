import './App.css'
import './WTToggle.css'
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

export const WTToggle = ({wt, setWt}: { wt: 1 | 2; setWt: (val: 1 | 2) => void }) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const wt1Ref = useRef<HTMLDivElement>(null);
    const wt2Ref = useRef<HTMLDivElement>(null);
    const [isMini, setIsMini] = useState(false);

    const listener = useCallback(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        console.log('new offset: ', rect?.y);
        if (containerRef.current && rect && rect.y === 20) {
            containerRef.current.classList.add('mini');
            setIsMini(true)
            return;
        }
        containerRef.current?.classList.remove('mini');
        setIsMini(false);
    }, [containerRef])

    useEffect(() => {
        document.addEventListener("scroll", listener);
        return () => document.removeEventListener("scroll", listener);
    }, [])

    useEffect(() => {
        if (wt === 1) {
            wt1Ref.current?.classList.add('selected');
            wt2Ref.current?.classList.remove('selected');
            return;
        }

        wt2Ref.current?.classList.add('selected');
        wt1Ref.current?.classList.remove('selected');
    }, [wt])

    const wt1OnClick = useCallback(() => setWt(1), []);
    const wt2OnClick = useCallback(() => setWt(2), []);


    return <div className="ToggleContainer" ref={containerRef}>
        <div className="ToggleTextContainer">
            <h2>Work Term Toggle</h2>
            <p>This page contains the reports for the Summer and Fall 2024 work terms. Use this toggle to
                view its contents.</p>
        </div>
        <div className="ToggleButton">
            <div className="ToggleButtonSection" ref={wt1Ref} onClick={wt1OnClick}>
                {!isMini ? <>
                    <h2>Work Term 1</h2>
                    <p>Summer 2024</p>
                </> : <h2>S 24</h2>
                }
            </div>
            <div className="ToggleButtonSection" ref={wt2Ref} onClick={wt2OnClick}>
                {!isMini ? <>
                    <h2>Work Term 2</h2>
                    <p>Fall 2024</p>
                </> : <h2>F 24</h2>
                }
            </div>

        </div>
    </div>
}