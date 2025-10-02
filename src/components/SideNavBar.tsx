import { type ReactNode } from 'react';

import GroupIcon from '../assets/icons/group-icon.svg?react';
import OverviewIcon from '../assets/icons/overview-icon.svg?react';
import SettingsIcon from '../assets/icons/settings-icon.svg?react';
import TaskIcon from '../assets/icons/task-icon.svg?react';

type NavItemProps = {
    label: string;
    href: string;
    icon: ReactNode;
};

function SideNavBar() {
    const NavItems: NavItemProps[] = [
        { label: 'Overview', href: '#', icon: <OverviewIcon className="size-6" /> },
        { label: 'Task', href: '#', icon: <TaskIcon className="size-6" /> },
        { label: 'Group', href: '#', icon: <GroupIcon className="size-6" /> },
        { label: 'Settings', href: '#', icon: <SettingsIcon className="size-6" /> },
    ];

    return (
        <nav className="font-primary h-full w-3/15">
            <aside className={`mb-15 flex items-center gap-2`}>
                <img src="/icon.svg" alt="Icon image" />
                <h1 className="text-secondary-500 text-4xl">TaskPodoro</h1>
            </aside>

            <ul className="flex flex-col gap-6">
                {NavItems.map((item, index) => {
                    const { href, icon, label } = item;

                    return (
                        <li key={index} className="text-secondary-300 text-xl transition">
                            <a href={href} className="hover:text-secondary-500 flex cursor-pointer items-center gap-3 p-2.5">
                                {icon}
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default SideNavBar;
