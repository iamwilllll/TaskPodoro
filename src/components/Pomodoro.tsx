import { Link } from 'react-router';

import QuestionIcon from '../assets/icons/question-icon.svg?react';

type PomodoroProps = {
    className?: string;
};

function Pomodoro({ className }: PomodoroProps) {
    return (
        <section className={`${className} `}>
            <aside className="flex h-full flex-col items-center justify-between p-5">
                <div>lo demas</div>

                <div className="bg">
                    <Link to="/help">
                        <QuestionIcon className="text-primary-600 size-10 cursor-pointer hover:scale-105" />
                    </Link>
                </div>
            </aside>
        </section>
    );
}

export default Pomodoro;
