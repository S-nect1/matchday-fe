import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts';
import { TeamsWrite } from '@/pages';

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
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
