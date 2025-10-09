import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '../layout/AppLayout';
import Error_404 from '../pages/Error_404';
import Pomodoro from '../components/Pomodoro';
import Overview from '../pages/Overview';
import Groups from '../pages/Groups';

export const router = createBrowserRouter([
    {
        path: '*',
        element: <Error_404 />,
    },

    {
        path: '/',
        element: <AppLayout />,
        children: [{ path: '', element: <Overview /> }],
    },

    {
        path: '/tasks',
        element: <AppLayout title="Explore tasks" />,
    },

    {
        path: '/pomodoro',
        element: <AppLayout title="Pomodoro" />,
        children: [{ path: '', element: <Pomodoro className="lg:hidden" /> }],
    },

    {
        path: '/groups',
        element: <AppLayout title="Explore groups" />,
        children: [{ path: '', element: <Groups /> }],
    },

    {
        path: '/settings',
        element: <AppLayout title="Settings" />,
    },
]);
