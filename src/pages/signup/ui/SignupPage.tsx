import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';

const KakaoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0C3.6 0 0 2.8 0 6.2C0 8.4 1.6 10.3 4.1 11.4L3.2 14.8C3.1 14.9 3.3 15.1 3.5 15L7.5 12.2C7.7 12.2 7.9 12.2 8 12.2C12.4 12.2 16 9.4 16 6.2C16 2.8 12.4 0 8 0Z"
      fill="#000000"
    />
  </svg>
);

export const SignupPage = () => {
  const navigate = useNavigate();

  const handleKakaoSignup = () => {
    // 카카오 회원가입 로직
    console.log('카카오 회원가입');
    // 카카오 회원가입 완료 후 추가정보 입력 페이지로 이동
    navigate('/signup/additional-info');
  };

  const handleEmailSignup = () => {
    // 일반 회원가입 페이지로 이동
    navigate('/signup/form');
  };

  return (
    <div className="mx-auto mb-32 flex w-full max-w-[679px] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
      {/* 제목 섹션 */}
      <div className="text-center">
        <h1 className="mb-3 text-[36px] leading-[54px] font-bold text-black">
          회원가입
        </h1>
        <p className="text-base text-gray-400">새로운 계정을 만들어보세요</p>
      </div>
      {/* 회원가입 카드 */}
      <Card
        className="w-full rounded-[10px] border-0 bg-white"
        style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)' }}
      >
        <CardContent className="px-8 py-10">
          <h2 className="mb-8 text-center text-2xl leading-9 font-bold text-black">
            시작하기
          </h2>

          <div className="space-y-4">
            {/* 카카오 회원가입 버튼 */}
            <Button
              onClick={handleKakaoSignup}
              className="flex h-[60px] w-full items-center justify-center gap-3 rounded-[5px] border-0 text-base font-bold text-black transition-opacity hover:opacity-90"
              variant="default"
              style={{ backgroundColor: '#FFE812' }}
            >
              <KakaoIcon />
              카카오로 3초 만에 시작하기
            </Button>

            {/* 일반 회원가입 버튼 */}
            <Button
              onClick={handleEmailSignup}
              variant="outline"
              className="border-gray-4 h-[60px] w-full rounded-[5px] border bg-white text-base font-bold text-black hover:bg-gray-50"
            >
              아이디로 시작하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
