import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '../layout/AppLayout';
import Error_404 from '../pages/Error_404';
import Pomodoro from '../components/Pomodoro';
import Overview from '../pages/Overview';

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
        children: [{ path: '' }],
    },

    {
        path: '/pomodoro',
        element: <AppLayout title="Pomodoro" />,
        children: [{ path: '', element: <Pomodoro className="lg:hidden" /> }],
    },

    {
        path: '/groups',
        element: <AppLayout title="Explore groups" />,
        children: [{ path: '' }],
    },

    {
        path: '/settings',
        element: <AppLayout title="Settings" />,
        children: [{ path: '' }],
    },
]);
