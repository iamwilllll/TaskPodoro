/* dependencies */
import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';

/* Components */
import SideNavBar from '../components/SideNavBar';
import Header from '../components/Header';
import Pomodoro from '../components/Pomodoro';
import { useNavBar } from '../context';

/* Types */
type AppLayoutProps = {
    title?: string;
};

function AppLayout({ title }: AppLayoutProps) {
    const location = useLocation();
    const { changeNavBarVisibility } = useNavBar();

    useEffect(() => changeNavBarVisibility(), [location, changeNavBarVisibility]);

    return (
        <section className="lg:grid-row-[1fr_3fr_3fr_3fr] gap-5 p-10 lg:grid lg:h-screen lg:grid-cols-[1fr_2fr_1fr]">
            <SideNavBar className="col-start-1 col-end-2 row-start-1 row-end-5" />
            <Header title={title} />
            <Pomodoro className="col-start-3 col-end-4 row-start-1 row-end-5 hidden lg:block" />

            <section>
                <Outlet />
            </section>
        </section>
    );
}

export default AppLayout;
