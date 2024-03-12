import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
    textToType,
    interKeyStrokeDurationInMs
) {
    const [currPosition, setCurrPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrPosition((value) => value + 1);
            currentPositionRef.current += 1;
            if (currentPositionRef.current > textToType.length) {
                clearInterval(intervalId);
            }
        }, interKeyStrokeDurationInMs);

        return () => {
            clearInterval(intervalId);
            currentPositionRef.current = 0;
            setCurrPosition(0);
        }
    },[interKeyStrokeDurationInMs, textToType]);

    return textToType.substring(0, currPosition);
}