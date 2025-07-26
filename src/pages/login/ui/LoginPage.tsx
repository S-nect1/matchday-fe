import { useCallback } from 'react';
import { LoginForm } from '@/features/auth';
import type { LoginFormData } from '@/features/auth/ui/LoginForm';

export const LoginPage = () => {
  const handleLogin = useCallback((data: LoginFormData) => {
    // TODO: Implement actual login logic
    console.log('Login data:', data);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">로그인</h1>
        <p className="text-center text-gray-600 mb-8">MatchDay에 오신 것을 환영합니다</p>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};
