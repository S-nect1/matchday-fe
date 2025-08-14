import { useState, useCallback } from 'react';

import { getProvinces, getCitiesByProvince } from '@/shared/constant/location';

export interface TeamFormData {
  // 팀 정보
  teamImage: File | null;
  teamName: string;
  teamDescription: string;
  teamType: '소모임' | '동아리' | '동호회';
  location: {
    province: string;
    city: string;
  };
  uniformColor: string;
  memberLimit: string;
  teamCode: string;

  // 대표자 정보
  useSameInfo: boolean;
  ceoName: string;
  ceoPhone: string;
  ceoAccount: {
    bank: string;
    accountNumber: string;
  };
}

const initialFormData: TeamFormData = {
  // 팀 정보
  teamImage: null,
  teamName: '',
  teamDescription: '',
  teamType: '소모임',
  location: {
    province: '',
    city: '',
  },
  uniformColor: '#92B4FF',
  memberLimit: '',
  teamCode: '',

  // 대표자 정보
  useSameInfo: false,
  ceoName: '',
  ceoPhone: '',
  ceoAccount: {
    bank: '',
    accountNumber: '',
  },
};

export const useTeamForm = () => {
  const [formData, setFormData] = useState<TeamFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof TeamFormData, string>>
  >({});

  // 시/도 목록
  const provinces = getProvinces();

  // 현재 선택된 시/도에 따른 구/군 목록
  const cities = formData.location.province
    ? getCitiesByProvince(formData.location.province)
    : [];

  // 팀 정보 업데이트
  const updateTeamInfo = useCallback(
    (
      field: keyof Omit<
        TeamFormData,
        'useSameInfo' | 'ceoName' | 'ceoPhone' | 'ceoAccount'
      >,
      value: any
    ) => {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));

      // 에러 제거
      if (errors[field]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    [errors]
  );

  // 대표자 정보 업데이트
  const updateCeoInfo = useCallback(
    (
      field: 'useSameInfo' | 'ceoName' | 'ceoPhone' | 'ceoAccount',
      value: any
    ) => {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));

      // 에러 제거
      if (errors[field]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    [errors]
  );

  // 계좌 정보 업데이트
  const updateCeoAccount = useCallback(
    (field: 'bank' | 'accountNumber', value: string) => {
      setFormData(prev => ({
        ...prev,
        ceoAccount: {
          ...prev.ceoAccount,
          [field]: value,
        },
      }));

      // 에러 제거
      if (errors.ceoAccount) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.ceoAccount;
          return newErrors;
        });
      }
    },
    [errors]
  );

  // 위치 정보 업데이트
  const updateLocation = useCallback(
    (field: 'province' | 'city', value: string) => {
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [field]: value,
          // 시/도가 변경되면 구/군 초기화
          ...(field === 'province' && { city: '' }),
        },
      }));

      // 에러 제거
      if (errors.location) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.location;
          return newErrors;
        });
      }
    },
    [errors]
  );

  // 팀 유형 업데이트
  const updateTeamType = useCallback(
    (teamType: '소모임' | '동아리' | '동호회') => {
      setFormData(prev => ({
        ...prev,
        teamType,
      }));
    },
    []
  );

  // 파일 업로드 처리
  const handleFileUpload = useCallback((file: File) => {
    setFormData(prev => ({
      ...prev,
      teamImage: file,
    }));
  }, []);

  // 폼 리셋
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
  }, []);

  // 폼 유효성 검사
  const validateForm = useCallback(() => {
    const newErrors: Partial<Record<keyof TeamFormData, string>> = {};

    // 팀 정보 검증
    if (!formData.teamName.trim()) {
      newErrors.teamName = '팀 이름을 입력해주세요.';
    }

    if (!formData.teamDescription.trim()) {
      newErrors.teamDescription = '팀 설명을 입력해주세요.';
    }

    if (!formData.location.province) {
      newErrors.location = '시/도를 선택해주세요.';
    } else if (!formData.location.city) {
      newErrors.location = '구/군을 선택해주세요.';
    }

    if (!formData.memberLimit.trim()) {
      newErrors.memberLimit = '멤버 수 제한을 입력해주세요.';
    }

    if (!formData.teamCode.trim()) {
      newErrors.teamCode = '가입 팀 코드를 입력해주세요.';
    }

    // 대표자 정보 검증
    if (!formData.useSameInfo) {
      if (!formData.ceoName.trim()) {
        newErrors.ceoName = '대표자 이름을 입력해주세요.';
      }

      if (!formData.ceoPhone.trim()) {
        newErrors.ceoPhone = '연락처를 입력해주세요.';
      }

      if (!formData.ceoAccount.bank.trim()) {
        newErrors.ceoAccount = '은행을 선택해주세요.';
      } else if (!formData.ceoAccount.accountNumber.trim()) {
        newErrors.ceoAccount = '계좌 번호를 입력해주세요.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // 폼이 완전히 입력되었는지 확인
  const isFormComplete = useCallback(() => {
    // 팀 정보 필수 필드 확인
    const teamInfoComplete =
      formData.teamName.trim() !== '' &&
      formData.teamDescription.trim() !== '' &&
      formData.location.province !== '' &&
      formData.location.city !== '' &&
      formData.memberLimit.trim() !== '' &&
      formData.teamCode.trim() !== '';

    // 대표자 정보 필수 필드 확인
    const ceoInfoComplete =
      formData.useSameInfo ||
      (formData.ceoName.trim() !== '' &&
        formData.ceoPhone.trim() !== '' &&
        formData.ceoAccount.bank.trim() !== '' &&
        formData.ceoAccount.accountNumber.trim() !== '');

    return teamInfoComplete && ceoInfoComplete;
  }, [formData]);

  // 폼 제출
  const submitForm = useCallback(async () => {
    if (!validateForm()) {
      return false;
    }

    try {
      // TODO: API 호출 로직 구현
      console.log('Form submitted:', formData);
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    }
  }, [formData, validateForm]);

  return {
    formData,
    errors,
    provinces,
    cities,
    updateTeamInfo,
    updateCeoInfo,
    updateCeoAccount,
    updateLocation,
    updateTeamType,
    handleFileUpload,
    resetForm,
    validateForm,
    isFormComplete,
    submitForm,
  };
};
