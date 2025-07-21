import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  birthDate: string;
  gender: string;
  region: string;
}

interface SignupFormProps {
  onSubmit: (data: SignupFormData) => void;
  isLoading?: boolean;
}

export const SignupForm = ({ onSubmit, isLoading = false }: SignupFormProps) => {
  const [formData] = useState<SignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    birthDate: '',
    gender: '',
    region: '',
  });

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">이메일*</Label>
            <Input id="email" type="email" required className="w-full p-3 border rounded-md" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호*</Label>
            <Input id="password" type="password" required className="w-full p-3 border rounded-md" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">비밀번호 확인*</Label>
            <Input id="confirmPassword" type="password" required className="w-full p-3 border rounded-md" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">이름*</Label>
            <Input id="name" type="text" required className="w-full p-3 border rounded-md" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">휴대전화*</Label>
            <div className="flex gap-2">
              <Input id="phone" type="tel" required className="w-full p-3 border rounded-md" />
              <Button variant="outline" className="w-32">인증</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone-confirm">인증번호*</Label>
            <div className="flex gap-2">
              <Input id="phone-confirm" type="text" required className="w-full p-3 border rounded-md" />
              <Button variant="outline" className="w-32">인증번호 확인</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthDate">생년월일*</Label>
            <Input id="birthDate" type="text" placeholder="YYYY.MM.DD" required className="w-full p-3 border rounded-md" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">성별*</Label>
            <Input id="gender" type="text" required className="w-full p-3 border rounded-md" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="region">활동지역*</Label>
            <div className="flex gap-2">
              <Input id="region-city" type="text" placeholder="시/도" required className="w-full p-3 border rounded-md" />
              <Input id="region-district" type="text" placeholder="구/군" required className="w-full p-3 border rounded-md" />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms-service" required />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="terms-service" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                (필수) 서비스 이용약관
              </label>
              <Link to="/terms" className="text-xs text-gray-500 hover:underline">보기</Link>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="terms-privacy" required />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="terms-privacy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                (필수) 개인정보 수집/이용 동의
              </label>
              <Link to="/privacy" className="text-xs text-gray-500 hover:underline">보기</Link>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="terms-marketing" />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="terms-marketing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                (선택) 마케팅활용 동의
              </label>
              <Link to="/marketing" className="text-xs text-gray-500 hover:underline">보기</Link>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md mt-6" disabled={isLoading}>
          {isLoading ? '가입 중...' : '가입하기'}
        </Button>
      </form>
    </div>
  );
};
