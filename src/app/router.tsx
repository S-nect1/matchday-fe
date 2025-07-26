
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/app/layouts';
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { SignupPage } from '@/pages/signup';
import { MyPage } from '@/pages/mypage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'matches', element: <div className="p-8 text-center">매치 페이지 (구현 예정)</div> },
      { path: 'teams', element: <div className="p-8 text-center">팀 페이지 (구현 예정)</div> },
      { path: 'players', element: <div className="p-8 text-center">선수 페이지 (구현 예정)</div> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
