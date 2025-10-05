import { useCallback, useEffect, useState } from 'react';

type NotificationProps = {
    title: string;
    body: string;
    icon: string;
};

type SessionProps = {
    label: string;
    time: number;
};

class Session {
    label: string;
    time: number;

    constructor({ label, time }: SessionProps) {
        this.label = label;
        this.time = time;
    }
}

class Notify {
    title: string;
    body: string;
    icon: string;

    constructor({ title, body, icon }: NotificationProps) {
        this.title = title;
        this.body = body;
        this.icon = icon;
    }

    requestNotificationPermission = async () => {
        if (!('Notification' in window)) return;

        const permission = await Notification.requestPermission();

        if (permission !== 'granted') return;
    };

    sendNotification = () => {
        if (Notification.permission === 'granted') {
            new Notification(this.title, {
                body: this.body,
                icon: this.icon,
            });
        }
    };
}

const formatTime = (time: number): string => {
    const minutes = `${Math.floor(time / 60)}`.padStart(2, '0');
    const seconds = `${time % 60}`.padStart(2, '0');

    return `${minutes}:${seconds}`;
};

const WORK_DURATION = 25 * 60;
const BREAK_DURATION = 5 * 60;

const WORK_SESSION = new Session({ label: 'WORK_SESSION', time: WORK_DURATION });
const BREAK_SESSION = new Session({ label: 'BREAK_SESSION', time: BREAK_DURATION });

export const usePomodoro = () => {
    const [currentSession, setCurrentSession] = useState<Session>(WORK_SESSION);
    const [isActive, setIsActive] = useState(false);

    const maxTime = currentSession.label === 'WORK_SESSION' ? WORK_SESSION.time : BREAK_SESSION.time;

    /* Functions */
    const changeSession = useCallback(() => {
        const nextSession = currentSession.label === WORK_SESSION.label ? BREAK_SESSION : WORK_SESSION;

        setCurrentSession(nextSession);

        const notification = new Notify({ title: 'TaskPodoro', body: `a${currentSession.label}`, icon: '/icon.svg' });

        notification.requestNotificationPermission();
        notification.sendNotification();
    }, [currentSession]);

    const toggleActive = () => setIsActive((prev) => (prev ? false : true));

    /* hooks */
    useEffect(() => {
        if (!isActive || currentSession.time < 0) return;
        if (currentSession.time === 0) changeSession();

        const interval = setInterval(() => {
            setCurrentSession((prev) => ({
                ...prev,
                time: prev.time - 1,
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, currentSession.time, changeSession]);

    return {
        currentSession,
        isActive,
        toggleActive,
        maxTime,
        changeSession,
        formatTime,
    };
};
