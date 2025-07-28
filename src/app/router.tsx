import { createBrowserRouter } from 'react-router-dom';
import { ApplyToMatchPage, CreateMatchPage, HomePage } from '@/pages';
import { MainLayout } from './layouts';
import { HomeLayout } from './layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/create-match',
        element: <CreateMatchPage />,
      },
      {
        path: '/apply-to-match',
        element: <ApplyToMatchPage />,
      },
    ],
  },
]);
