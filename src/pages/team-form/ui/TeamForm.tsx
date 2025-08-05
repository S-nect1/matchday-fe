import { FormInput } from '@/features/form-input';
import { FormCard } from '@/features/form-card';

export const TeamForm = () => {
  return (
    <div className="shadow-[0 0 15px 0 rgba(0,0,0,.1)]] container mx-auto my-[50px] rounded-[10px] bg-white p-[50px]">
      <h1 className="mb-[30px] text-[1.5rem] font-[600]">팀 정보 등록하기</h1>
      <FormCard>
        <FormInput
          htmlFor="image-input"
          label="팀 대표 사진"
          type="file"
          isImageInput
        />
        <FormInput
          htmlFor="team-name"
          label="팀 이름"
          type="text"
          placeholder="팀 이름을 입력해주세요."
          isNormal
          isMust
        />
        <FormInput
          htmlFor="team-information"
          label="팀 설명"
          type="text"
          placeholder="팀 설명을 입력해주세요"
          isTextArea
          isMust
        />
        <FormInput
          label="팀 유형"
          type="radio"
          isMust
          isCheckBox
          checkContent={[
            {
              label: '소모임',
              checked: true,
            },
            {
              label: '동아리',
              checked: false,
            },
            {
              label: '동호회',
              checked: false,
            },
          ]}
        />
        <FormInput label="활동 지역" isMust isLocation />
        <FormInput label="상의 유니폼 색깔" isColor />
        <FormInput
          htmlFor="team-number-limit"
          label="멤버 수 제한"
          type="text"
          placeholder="0으로 설정할 시 멤버 수용 가능합니다."
          isNormal
          isMust
        />
        <FormInput
          htmlFor="team-code"
          label="가입 팀 코드 설정"
          type="text"
          placeholder="가입 팀 코드 입력해주세요."
          isNormal
          isMust
        />
      </FormCard>
    </div>
  );
};
