import { createBrowserRouter } from 'react-router-dom';
import { ApplyToMatchPage, CreateMatchPage, HomePage } from '@/pages';
import { MainLayout } from './layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
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
