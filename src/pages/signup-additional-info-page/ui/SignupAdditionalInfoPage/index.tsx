import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';

import { ProfileSection } from './ProfileSection';
import { FormSection } from './FormSection';

interface SignupAdditionalInfoData {
  usename: string;
  height: string;
  weight: string;
  advantages: string;
  dominantFoot: string;
  playingExperience: string;
  mainPosition: string;
  subPosition: string;
  jerseyNumber: string;
}

export const SignupAdditionalInfoPage = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<SignupAdditionalInfoData>({
    usename: 'OOO',
    height: '',
    weight: '',
    advantages: '',
    dominantFoot: '',
    playingExperience: '',
    mainPosition: '',
    subPosition: '',
    jerseyNumber: '',
  });

  // 2. 계산된 값들
  const isFormValid = useMemo(
    () =>
      formData.height &&
      formData.dominantFoot &&
      formData.playingExperience &&
      formData.mainPosition &&
      formData.jerseyNumber,
    [
      formData.height,
      formData.dominantFoot,
      formData.playingExperience,
      formData.mainPosition,
      formData.jerseyNumber,
    ]
  );

  // 3. 이벤트 핸들러 함수들
  const handleInputChange = useCallback(
    (field: keyof SignupAdditionalInfoData) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ) => {
        setFormData(prev => ({
          ...prev,
          [field]: e.target.value,
        }));
      },
    []
  );

  const handleSelectChange = useCallback(
    (field: keyof SignupAdditionalInfoData) => (value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          setProfileImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const handleSubmit = useCallback(() => {
    // 추가정보 저장 로직
    console.log('추가정보 저장', formData, profileImage);
    // 메인 페이지로 이동
    navigate('/');
  }, [formData, profileImage, navigate]);

  return (
    <div className="mt-16 mb-24 flex min-h-screen w-full flex-col items-center justify-center gap-4">
      {/* 상단 배경 영역 */}
      <h1 className="text-4xl font-bold text-black">추가 정보</h1>
      <p className="text-base text-gray-500">
        {formData.usename}님의 추가 정보를 입력해주세요
      </p>

      {/* 메인 컨텐츠 영역 */}
      <div className="flex w-full flex-col items-center">
        {/* 추가정보 입력 카드 */}
        <Card
          className="w-full max-w-[680px] rounded-[10px] border-0 bg-white"
          style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)' }}
        >
          <CardContent className="px-8 py-10">
            {/* 프로필 이미지 */}
            <ProfileSection
              profileImage={profileImage}
              onImageUpload={handleImageUpload}
            />

            {/* 폼 섹션 */}
            <FormSection
              formData={formData}
              onInputChange={handleInputChange}
              onSelectChange={handleSelectChange}
            />

            {/* 시작하기 버튼 */}
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="mt-8 h-[43px] w-full rounded-[5px] border-0 bg-[#0043ff] text-lg font-bold text-white hover:bg-[#0043ff]/90 disabled:bg-gray-300 disabled:text-gray-500"
            >
              시작하기
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
