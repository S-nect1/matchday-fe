import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Checkbox } from '@/shared/ui/checkbox';

export interface LoginFormData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading] = useState(false);

  const handleInputChange = useCallback((field: string) => {
    return (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };
  }, []);

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: Implement actual login logic
      console.log('Login data:', formData);
    },
    [formData]
  );

  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div className="w-full max-w-[680px]">
        <h1 className="mb-8 text-center text-[36px] font-bold text-[#212121]">
          로그인
        </h1>
        <div
          className="mx-auto h-[548px] w-[680px] rounded-[10px] bg-white p-[30px]"
          style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)' }}
        >
          <form onSubmit={handleLogin} className="flex h-full flex-col">
            <div className="flex-1 space-y-[30px]">
              <div className="space-y-[5px]">
                <Label
                  htmlFor="email"
                  className="text-[18px] font-bold text-[#212121]"
                >
                  이메일
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={e => handleInputChange('email')(e.target.value)}
                  required
                  className="h-[45px] w-[620px] rounded-[5px] px-[15px]"
                />
              </div>

              <div className="space-y-[5px]">
                <Label
                  htmlFor="password"
                  className="text-[18px] font-bold text-[#212121]"
                >
                  비밀번호
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  value={formData.password}
                  onChange={e => handleInputChange('password')(e.target.value)}
                  required
                  className="h-[45px] w-[620px] rounded-[5px] px-[15px]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    className="h-[14px] w-[14px] rounded-[3px] border-[#e0e0e0]"
                  />
                  <Label
                    htmlFor="remember-me"
                    className="text-[16px] font-medium text-[#212121]"
                  >
                    로그인 상태 유지
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-[16px] font-medium text-[#212121] hover:underline"
                >
                  비밀번호 찾기
                </Link>
              </div>

              <Button
                type="submit"
                className="h-[43px] w-[620px] rounded-[5px] bg-[#0043ff] text-[18px] font-bold text-white hover:bg-[#0043ff]/90"
                disabled={isLoading}
              >
                {isLoading ? '로그인 중...' : '로그인'}
              </Button>
            </div>

            <div className="mt-[24px]">
              <div className="relative mb-[24px]">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e0e0e0]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-[14px] text-[#757575]">
                    소셜 로그인
                  </span>
                </div>
              </div>

              <Button
                type="button"
                className="flex h-[45px] w-[620px] items-center justify-center rounded-[5px] bg-[#ffe812] text-[16px] font-bold text-[#212121] hover:bg-[#ffe812]/90"
              >
                {/* TODO: Add Kakao icon */}
                <span>카카오로 계속하기</span>
              </Button>
            </div>

            <p className="mt-[30px] text-center text-[14px] text-[#757575]">
              계정이 없으신가요?{' '}
              <Link to="/signup" className="text-[#0043ff] hover:underline">
                회원가입
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
