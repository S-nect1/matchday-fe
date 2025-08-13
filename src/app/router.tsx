import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
  ApplyToMatchPage,
  CreateMatchPage,
  HomePage,
  LoginPage,
  SignupAdditionalInfoPage,
  SignupFormPage,
  SignupPage,
  TeamForm,
  TeamJoinPage,
} from '@/pages';
import { MyTeamPage } from '@/pages/my-team';

import { HomeLayout, MainLayout } from './layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
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
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'signup/form', element: <SignupFormPage /> },
      { path: 'signup/additional-info', element: <SignupAdditionalInfoPage /> },
      {
        path: 'matches',
        element: <div className="p-8 text-center">매치 페이지 (구현 예정)</div>,
      },
      {
        path: 'teams',
        element: <div className="p-8 text-center">팀 페이지 (구현 예정)</div>,
      },
      { path: 'my-team', element: <MyTeamPage /> },
      { path: 'team-form', element: <TeamForm /> },
      { path: 'team-join', element: <TeamJoinPage /> },
      {
        path: 'players',
        element: <div className="p-8 text-center">선수 페이지 (구현 예정)</div>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
