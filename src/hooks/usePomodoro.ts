import { useEffect, useState } from 'react';
export const usePomodoro = () => {
    const [time, setTime] = useState(1500);
    const [isActive, setIsActive] = useState(false);

    const setActive = () => {
        setIsActive((prev) => (prev ? false : true));
    };

    useEffect(() => {
        if (!isActive || time <= 0) return;

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, time]);

    const formatTime = (time: number): string => {
        const minutes = `${Math.floor(time / 60)}`.padStart(2, '0');
        const seconds = `${time % 60}`.padStart(2, '0');

        return `${minutes}:${seconds}`;
    };
    return {
        time,
        isActive,
        setActive,
        formatTime,
    };
};
