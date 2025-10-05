import { NavLink } from 'react-router';

import ClockIcon from '../assets/icons/clock-icon.svg?react';
import CloseIcon from '../assets/icons/close-icon.svg?react';
import GroupIcon from '../assets/icons/group-icon.svg?react';
import OverviewIcon from '../assets/icons/overview-icon.svg?react';
import SettingsIcon from '../assets/icons/settings-icon.svg?react';
import TaskIcon from '../assets/icons/task-icon.svg?react';
import { useNavBar } from '../context';

type SideNavBarProps = {
    className?: string;
};

type NavItemProps = {
    label: string;
    to: string;
    icon: React.ReactNode;
    onlyDisplayInMobile?: boolean;
};

function SideNavBar({ className }: SideNavBarProps) {
    const { navBarIsActive, changeNavBarVisibility } = useNavBar();

    const NavItems: NavItemProps[] = [
        { label: 'Overview', to: '/', icon: <OverviewIcon className="size-6" /> },
        { label: 'Task', to: '/tasks', icon: <TaskIcon className="size-6" /> },
        { label: 'Pomodoro', to: '/pomodoro', icon: <ClockIcon className="size-6" />, onlyDisplayInMobile: true },
        { label: 'Group', to: '/groups', icon: <GroupIcon className="size-6" /> },
        { label: 'Settings', to: '/settings', icon: <SettingsIcon className="size-6" /> },
    ];

    return (
        <nav
            className={`font-primary fixed top-0 size-full h-full p-10 transition-[left] duration-250 lg:static lg:bg-transparent lg:p-0 ${className} ${navBarIsActive ? 'left-0 z-5 bg-[#F5F5F7]' : '-left-500'} `}
        >
            <div className="mb-5 flex items-center justify-end lg:hidden">
                <button
                    className="text-secondary-300 hover:text-secondary-500 cursor-pointer hover:scale-105"
                    onClick={changeNavBarVisibility}
                >
                    <CloseIcon className="size-15 transition hover:scale-105" />
                </button>
            </div>

            <aside className="mb-15 flex items-center gap-2">
                <img src="/icon.svg" alt="Icon image" />
                <h1 className="text-secondary-500 text-4xl font-semibold">TaskPodoro</h1>
            </aside>

            <ul className="flex flex-col gap-6">
                {NavItems.map((item, index) => {
                    const { to, icon, label, onlyDisplayInMobile } = item;

                    return (
                        <li key={index} className={`text-secondary-300 ${onlyDisplayInMobile && 'lg:hidden'} text-xl transition`}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `hover:text-secondary-500 flex cursor-pointer items-center gap-3 p-2.5 transition hover:scale-105 ${isActive && 'text-secondary-500'}`
                                }
                            >
                                {icon}
                                {label}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default SideNavBar;
