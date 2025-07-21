import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

export const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = useCallback((field: string) => {
    return (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
    },
    [formData, onSubmit]
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={e => handleInputChange('email')(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={formData.password}
            onChange={e => handleInputChange('password')(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <Label htmlFor="remember-me" className="text-sm font-medium">
              로그인 상태 유지
            </Label>
          </div>
          <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">
            비밀번호 찾기
          </Link>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md" disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인'}
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">소셜 로그인</span>
          </div>
        </div>

        <div className="mt-6">
          <Button variant="outline" className="w-full p-3 border rounded-md flex items-center justify-center">
            {/* TODO: Add Kakao icon */}
            <span className="ml-2">카카오로 계속하기</span>
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600">
        계정이 없으신가요?{
        <Link to="/signup" className="font-medium text-blue-600 hover:underline ml-1">
          회원가입
        </Link>}
      </p>
    </div>
  );
};
