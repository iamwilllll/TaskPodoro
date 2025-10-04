/* React router */
import { Link } from 'react-router';

/* Hooks */
import { usePomodoro } from '../hooks/usePomodoro';

/* Icons */
import QuestionIcon from '../assets/icons/question-icon.svg?react';
import PauseIcon from '../assets/icons/pause-icon.svg?react';
import PlayIcon from '../assets/icons/play-icon.svg?react';

/* Dependencies */
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/* Types */
type PomodoroProps = {
    className?: string;
};

function Pomodoro({ className }: PomodoroProps) {
    const { time, isActive, setActive, formatTime } = usePomodoro();

    return (
        <section className={`${className}`}>
            <aside className="flex h-full flex-col items-center justify-between p-5">
                <div>
                    <CircularProgressbar
                        strokeWidth={1}
                        value={time}
                        maxValue={1500}
                        text={formatTime(time)}
                        styles={buildStyles({ pathColor: '#3d53db', textColor: '#3d53db' })}
                    />

                    <div className="mt-5 flex items-center justify-center">
                        <button
                            onClick={setActive}
                            className="text-primary-600 hover:text-secondary-300 cursor-pointer transition hover:scale-105"
                        >
                            {isActive ? <PauseIcon className="size-20" /> : <PlayIcon className="size-20" />}
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
