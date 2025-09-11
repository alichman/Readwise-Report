import './App.css'
import './WTToggle.css'
import {useCallback, useEffect, useMemo, useRef, useState} from "react";


const Button = ({wt, setWt, isSelected, mini}:{wt: number; setWt: (val: number) => void; isSelected: boolean; mini: boolean}) => {
    const ref = useRef<HTMLDivElement>(null);

    const sem = useMemo(() => (mini ? ['S 24', 'F 24', 'S 25'] : ['Summer 2024', 'Fall 2024', 'Summer 2025'])[wt-1], [mini, wt])

    useEffect(() => {
        if (isSelected) {
            ref.current?.classList.add('selected');
            return;
        }
        ref.current?.classList.remove('selected');
    }, [isSelected, wt])

    return <div className="ToggleButtonSection" ref={ref} onClick={useCallback(() => setWt(wt), [setWt, wt])}>
        {!mini ? <>
            <h2>Work Term {wt}</h2>
            <p>Summer 2025</p>
        </> : <h2>{sem}</h2>
        }
    </div>
}

export const WTToggle = ({wt, setWt}: { wt: number; setWt: (val: number) => void }) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const [isMini, setIsMini] = useState(false);

    const listener = useCallback(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        console.log('new offset: ', rect?.y);
        if (containerRef.current && rect && rect.y <= 25) {
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
    }, [listener])

    useEffect(() => {
        const bunga = (scroll: Event) => {
            const rect = containerRef.current?.getBoundingClientRect();
            console.log(rect?.height)
        }
        window.addEventListener('scroll', bunga);
        return () => window.removeEventListener('scroll', bunga);
    }, []);


    return <div className="ToggleContainer" ref={containerRef}>
        <div className="ToggleTextContainer">
            <h2>Work Term Toggle</h2>
            <p>This page contains the reports for the Summer and Fall 2024 work terms, as well as the Summer 2025 term.
                Use this toggle to
                view its contents.</p>
        </div>
        <div className="ToggleButton">
            <Button mini={isMini} isSelected={wt === 1} wt={1} setWt={setWt}/>
            <Button mini={isMini} isSelected={wt === 2} wt={2} setWt={setWt}/>
            <Button mini={isMini} isSelected={wt === 3} wt={3} setWt={setWt}/>
        </div>
    </div>
}