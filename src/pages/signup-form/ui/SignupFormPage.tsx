import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  verificationCode: string;
  birthDate: string;
  gender: string;
  region: string;
  subRegion: string;
}

export const SignupFormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: 'example@email.com',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    verificationCode: '',
    birthDate: '',
    gender: '',
    region: '',
    subRegion: '',
  });

  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const handleInputChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleAgreementChange = (type: keyof typeof agreements) => {
    setAgreements(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handlePhoneVerification = () => {
    // 휴대전화 인증 로직
    console.log('휴대전화 인증');
  };

  const handleVerificationCodeCheck = () => {
    // 인증번호 확인 로직
    console.log('인증번호 확인');
    setIsPhoneVerified(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 로직
    console.log('회원가입', formData, agreements);
    // 추가정보 입력 페이지로 이동
    navigate('/signup/additional-info');
  };

  const isFormValid =
    formData.email &&
    formData.password &&
    formData.passwordConfirm &&
    formData.name &&
    formData.phone &&
    formData.birthDate &&
    formData.gender &&
    formData.region &&
    formData.subRegion &&
    agreements.terms &&
    agreements.privacy &&
    isPhoneVerified;

  return (
    <div className="mt-16 mb-24 min-h-screen w-full">
      {/* 상단 배경 영역 */}
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-center">
        <h1 className="text-[36px] leading-[54px] font-bold text-black">
          회원가입
        </h1>
        <p className="my-3 text-base text-gray-400">
          새로운 계정을 만들어보세요
        </p>
      </div>

      {/* 회원가입 폼 카드 */}
      <Card
        className="mx-auto w-[680px] rounded-[10px]"
        style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)' }}
      >
        <CardContent className="px-8 py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-bold text-black">
                이메일<span className="text-[#FF4E3E]">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  className="h-[45px] placeholder:text-gray-400"
                  style={{ borderWidth: '2px' }}
                />
              </div>
            </div>

            {/* 비밀번호 */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-lg font-bold text-black"
              >
                비밀번호<span className="text-[#FF4E3E]">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                placeholder="비밀번호를 입력해 주세요."
                className="h-[45px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
              />
            </div>

            {/* 비밀번호 확인 */}
            <div className="space-y-2">
              <Label
                htmlFor="passwordConfirm"
                className="text-lg font-bold text-black"
              >
                비밀번호 확인<span className="text-[#FF4E3E]">*</span>
              </Label>
              <Input
                id="passwordConfirm"
                type="password"
                value={formData.passwordConfirm}
                onChange={handleInputChange('passwordConfirm')}
                placeholder="비밀번호를 입력해 주세요."
                className="h-[45px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
              />
            </div>

            {/* 이름 */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-bold text-black">
                이름<span className="text-[#FF4E3E]">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder="이름을 입력해 주세요."
                className="h-[45px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
              />
            </div>

            {/* 휴대전화 */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg font-bold text-black">
                휴대전화<span className="text-[#FF4E3E]">*</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  placeholder="휴대전화를 입력해 주세요."
                  className="h-[45px] flex-1 border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
                />
                <Button
                  onClick={handlePhoneVerification}
                  variant="outline"
                  className="h-[45px] w-[110px] border-0 bg-gray-100 text-base font-medium text-gray-600 hover:bg-gray-200"
                >
                  인증
                </Button>
              </div>

              {/* 인증번호 입력 */}
              <div className="flex gap-2">
                <Input
                  id="verificationCode"
                  value={formData.verificationCode}
                  onChange={handleInputChange('verificationCode')}
                  placeholder="인증번호를 입력해 주세요."
                  className="h-[45px] flex-1 border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
                />
                <Button
                  onClick={handleVerificationCodeCheck}
                  variant="outline"
                  className="h-[45px] w-[110px] border-0 bg-gray-100 text-base font-medium text-gray-600 hover:bg-gray-200"
                >
                  인증번호 확인
                </Button>
              </div>
            </div>

            {/* 생년월일 */}
            <div className="space-y-2">
              <Label
                htmlFor="birthDate"
                className="text-lg font-bold text-black"
              >
                생년월일<span className="text-[#FF4E3E]">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleInputChange('birthDate')}
                  placeholder="생년월일을 선택해 주세요."
                  className="h-[45px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
                />
                <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
                  <CalendarIcon />
                </div>
              </div>
            </div>

            {/* 성별 */}
            <div className="space-y-2">
              <Label htmlFor="gender" className="text-lg font-bold text-black">
                성별<span className="text-[#FF4E3E]">*</span>
              </Label>
              <Select
                value={formData.gender}
                onValueChange={(value: string) =>
                  setFormData(prev => ({
                    ...prev,
                    gender: value,
                  }))
                }
              >
                <SelectTrigger className="h-[45px] border-gray-300 bg-white text-base text-black">
                  <SelectValue placeholder="성별을 선택해 주세요." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">남성</SelectItem>
                  <SelectItem value="female">여성</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 활동지역 */}
            <div className="space-y-2">
              <Label htmlFor="region" className="text-lg font-bold text-black">
                활동지역<span className="text-[#FF4E3E]">*</span>
              </Label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Select
                    value={formData.region}
                    onValueChange={(value: string) => {
                      setFormData(prev => ({
                        ...prev,
                        region: value,
                        subRegion: '', // 시/도 변경 시 구/군 초기화
                      }));
                    }}
                  >
                    <SelectTrigger className="h-[45px] border-gray-300 bg-white text-base text-black">
                      <SelectValue placeholder="시/도를 선택해 주세요." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seoul">서울특별시</SelectItem>
                      <SelectItem value="busan">부산광역시</SelectItem>
                      <SelectItem value="incheon">인천광역시</SelectItem>
                      <SelectItem value="daegu">대구광역시</SelectItem>
                      <SelectItem value="daejeon">대전광역시</SelectItem>
                      <SelectItem value="gwangju">광주광역시</SelectItem>
                      <SelectItem value="ulsan">울산광역시</SelectItem>
                      <SelectItem value="sejong">세종특별자치시</SelectItem>
                      <SelectItem value="gyeonggi">경기도</SelectItem>
                      <SelectItem value="gangwon">강원도</SelectItem>
                      <SelectItem value="chungbuk">충청북도</SelectItem>
                      <SelectItem value="chungnam">충청남도</SelectItem>
                      <SelectItem value="jeonbuk">전라북도</SelectItem>
                      <SelectItem value="jeonnam">전라남도</SelectItem>
                      <SelectItem value="gyeongbuk">경상북도</SelectItem>
                      <SelectItem value="gyeongnam">경상남도</SelectItem>
                      <SelectItem value="jeju">제주특별자치도</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select
                    value={formData.subRegion}
                    onValueChange={(value: string) =>
                      setFormData(prev => ({
                        ...prev,
                        subRegion: value,
                      }))
                    }
                    disabled={!formData.region}
                  >
                    <SelectTrigger className="h-[45px] border-gray-300 bg-white text-base text-black disabled:opacity-50">
                      <SelectValue placeholder="구/군을 선택해 주세요." />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.region === 'seoul' && (
                        <>
                          <SelectItem value="gangnam">강남구</SelectItem>
                          <SelectItem value="gangdong">강동구</SelectItem>
                          <SelectItem value="gangbuk">강북구</SelectItem>
                          <SelectItem value="gangseo">강서구</SelectItem>
                          <SelectItem value="gwanak">관악구</SelectItem>
                          <SelectItem value="gwangjin">광진구</SelectItem>
                          <SelectItem value="guro">구로구</SelectItem>
                          <SelectItem value="geumcheon">금천구</SelectItem>
                          <SelectItem value="nowon">노원구</SelectItem>
                          <SelectItem value="dobong">도봉구</SelectItem>
                          <SelectItem value="dongdaemun">동대문구</SelectItem>
                          <SelectItem value="dongjak">동작구</SelectItem>
                          <SelectItem value="mapo">마포구</SelectItem>
                          <SelectItem value="seodaemun">서대문구</SelectItem>
                          <SelectItem value="seocho">서초구</SelectItem>
                          <SelectItem value="seongdong">성동구</SelectItem>
                          <SelectItem value="seongbuk">성북구</SelectItem>
                          <SelectItem value="songpa">송파구</SelectItem>
                          <SelectItem value="yangcheon">양천구</SelectItem>
                          <SelectItem value="yeongdeungpo">영등포구</SelectItem>
                          <SelectItem value="yongsan">용산구</SelectItem>
                          <SelectItem value="eunpyeong">은평구</SelectItem>
                          <SelectItem value="jongno">종로구</SelectItem>
                          <SelectItem value="jung">중구</SelectItem>
                          <SelectItem value="jungnang">중랑구</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* 약관 동의 */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={agreements.terms}
                  onCheckedChange={() => handleAgreementChange('terms')}
                  className="h-[14px] w-[14px] rounded-[3px]"
                />
                <span className="text-base font-medium text-black">
                  (필수) 서비스 이용약관
                </span>
                <a
                  href="#"
                  className="ml-auto text-xs text-gray-400 underline hover:text-gray-600"
                >
                  보기
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  checked={agreements.privacy}
                  onCheckedChange={() => handleAgreementChange('privacy')}
                  className="h-[14px] w-[14px] rounded-[3px]"
                />
                <span className="text-base font-medium text-black">
                  (필수) 개인정보 수집/이용 동의
                </span>
                <a
                  href="#"
                  className="ml-auto text-xs text-gray-400 underline hover:text-gray-600"
                >
                  보기
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  checked={agreements.marketing}
                  onCheckedChange={() => handleAgreementChange('marketing')}
                  className="h-[14px] w-[14px] rounded-[3px]"
                />
                <span className="text-base font-medium text-black">
                  (선택) 마케팅활용 동의
                </span>
                <a
                  href="#"
                  className="ml-auto text-xs text-gray-400 underline hover:text-gray-600"
                >
                  보기
                </a>
              </div>
            </div>

            {/* 가입하기 버튼 */}
            <Button
              type="submit"
              disabled={!isFormValid}
              className="mt-8 h-[43px] w-full border-0 bg-[#0043ff] text-lg font-bold text-white hover:bg-[#0043ff]/90 disabled:bg-gray-300 disabled:text-gray-500"
            >
              가입하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

// 달력 아이콘 컴포넌트
const CalendarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM8 17V19H6V17H8ZM13 17V19H11V17H13Z"
      fill="#BDBDBD"
    />
  </svg>
);
