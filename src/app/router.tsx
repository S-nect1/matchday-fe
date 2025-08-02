import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayout } from '@/app/layouts';

import { HomePage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
