import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts';
import { TeamsWrite, TeamsJoin } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: 'teams-write',
        element: <TeamsWrite />,
      },
      {
        path: 'teams-join',
        element: <TeamsJoin />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
