/* React router */
import { Link } from 'react-router';

/* Hooks */
import { usePomodoro } from '../hooks/usePomodoro';

/* Icons */
import QuestionIcon from '../assets/icons/question-icon.svg?react';
import PauseIcon from '../assets/icons/pause-icon.svg?react';
import PlayIcon from '../assets/icons/play-icon.svg?react';
import NextIcon from '../assets/icons/next-icon.svg?react';

/* Dependencies */
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/* Types */
type PomodoroProps = {
    className?: string;
};

function Pomodoro({ className }: PomodoroProps) {
    const { currentSession, isActive, toggleActive, maxTime, changeSession, formatTime } = usePomodoro();

    return (
        <section className={`${className}`}>
            <aside className="flex h-full flex-col items-center justify-between p-5">
                <div>
                    <CircularProgressbar
                        strokeWidth={1}
                        value={currentSession.time}
                        maxValue={maxTime}
                        text={formatTime(currentSession.time)}
                        styles={buildStyles({ pathColor: '#3d53db', textColor: '#3d53db' })}
                    />

                    <div className="mt-5 grid grid-cols-3">
                        <button
                            onClick={toggleActive}
                            className="text-primary-600 hover:text-secondary-300 col-start-2 mx-auto cursor-pointer transition hover:scale-105"
                        >
                            {isActive ? <PauseIcon className="size-15" /> : <PlayIcon className="size-15" />}
                        </button>

                        <button
                            onClick={changeSession}
                            className="text-primary-600 hover:text-secondary-300 cursor-pointer transition hover:scale-105"
                        >
                            <NextIcon className="size-10" />
                        </button>
                    </div>
                </div>

                <div className="mt-70 lg:mt-0">
                    <Link to="/help">
                        <QuestionIcon className="text-primary-600 hover:text-secondary-300 size-10 cursor-pointer transition hover:scale-105" />
                    </Link>
                </div>
            </aside>
        </section>
    );
}

export default Pomodoro;
