import { createBrowserRouter } from 'react-router-dom';
import { ApplyToMatchPage, CreateMatchPage, HomePage } from '@/pages';
import { HomeLayout } from './layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/',
    element: <HomeLayout />,
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
