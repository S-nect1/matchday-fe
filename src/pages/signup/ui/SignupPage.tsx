import { useCallback } from 'react';
import { SignupForm } from '@/features/auth';
import type { SignupFormData } from '@/features/auth/ui/SignupForm';

export const SignupPage = () => {
  const handleSignup = useCallback((data: SignupFormData) => {
    // TODO: Implement actual signup logic
    console.log('Signup data:', data);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">회원가입</h1>
        <p className="text-center text-gray-600 mb-8">새로운 계정을 만들어보세요</p>
        <SignupForm onSubmit={handleSignup} />
      </div>
    </div>
  );
};
