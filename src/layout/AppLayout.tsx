/* dependencies */
import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';

/* Components */
import SideNavBar from '../components/SideNavBar';
import Header from '../components/Header';
import Pomodoro from '../components/Pomodoro';
import { useNavBar } from '../context/store';

/* Types */
type AppLayoutProps = {
    title?: string;
};

function AppLayout({ title }: AppLayoutProps) {
    const location = useLocation();
    const { changeNavBarVisibility } = useNavBar();

    useEffect(() => changeNavBarVisibility(), [location, changeNavBarVisibility]);

    return (
        <main className="gap-5 p-10 lg:grid lg:max-h-[100vh] lg:min-h-[100vh] lg:grid-cols-[1fr_3fr_1fr] lg:grid-rows-[1fr_4fr_4fr]">
            <SideNavBar className="col-start-1 col-end-2 row-start-1 row-end-4" />
            <Header title={title} />
            <Pomodoro className="col-start-3 col-end-4 row-start-1 row-end-4 hidden lg:block" />

            <section className="col-start-2 col-end-3 row-start-2 row-end-4">
                <Outlet />
            </section>
        </main>
    );
}

export default AppLayout;
