import './App.css'
import './WTToggle.css'
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

export const WTToggle = ({wt, setWt}: { wt: 1|2; setWt: (val: 1 | 2) => void }) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const wt1Ref = useRef<HTMLDivElement>(null);
    const wt2Ref = useRef<HTMLDivElement>(null);
    const [isHidden, setIsHidden] = useState(false);

    const listener = useCallback(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        console.log('new offset: ', rect?.y);
        if (containerRef.current && rect && rect.y === 20) {
            containerRef.current.classList.add('hidden');
            setIsHidden(true)
            return;
        }
        containerRef.current?.classList.remove('hidden');
        setIsHidden(false);
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


    return <div className="ToggleContainer"  ref={containerRef}>
        <div className="ToggleTextContainer">
            <h2>Work Term Toggle</h2>
            <p>This page contains the reports for the Summer and Fall 2024 work terms. Use this toggle to
                view its contents.</p>
        </div>
        <div className="ToggleButton">
            <div className="ToggleButtonSection" ref={wt1Ref} onClick={wt1OnClick}>
                <h2>Work Term 1</h2>
                {!isHidden && <p>Summer 2024</p>}
            </div>
            <div className="ToggleButtonSection" ref={wt2Ref} onClick={wt2OnClick}>
                <h2>Work Term 2</h2>
                {!isHidden && <p>Fall 2024</p>}
            </div>

        </div>
    </div>
}