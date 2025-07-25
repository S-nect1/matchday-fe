import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts';
import { TeamsWrite } from '@/pages';
import { TeamListsDetail } from '@/pages/team-lists-by-id/TeamListsDetail';

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
        path: 'teams-lists/:teamId',
        element: <TeamListsDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
