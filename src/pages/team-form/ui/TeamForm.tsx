import { FormInput } from '@/features/form-input';
import { FormCard, FormCardContent } from '@/features/form-card';

import { Checkbox } from '@/shared/ui/checkbox';
import { useTeamForm } from '@/shared/hooks/use-team-form';

export const TeamForm = () => {
  const {
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
    isFormComplete,
    submitForm,
  } = useTeamForm();

  const handleSubmit = async () => {
    const success = await submitForm();
    if (success) {
      console.log('팀 생성 성공!');
      // TODO: 성공 처리 (리다이렉트 등)
    }
  };

  return (
    <div className="shadow-[0 0 15px 0 rgba(0,0,0,.1)]] container mx-auto my-[50px] rounded-[10px] bg-white p-[50px]">
      <FormCard>
        <FormCardContent className="team-information">
          <h1 className="mb-[30px] text-[1.5rem] font-[600]">
            팀 정보 등록하기
          </h1>
          <FormInput
            htmlFor="image-input"
            label="팀 대표 사진"
            type="file"
            isImageInput
            onFileChange={handleFileUpload}
          />
          <FormInput
            htmlFor="team-name"
            label="팀 이름"
            type="text"
            placeholder="팀 이름을 입력해주세요."
            isNormal
            isMust
            value={formData.teamName}
            onChange={value => updateTeamInfo('teamName', value)}
            error={errors.teamName}
          />
          <FormInput
            htmlFor="team-information"
            label="팀 설명"
            type="text"
            placeholder="팀 설명을 입력해주세요"
            isTextArea
            isMust
            value={formData.teamDescription}
            onChange={value => updateTeamInfo('teamDescription', value)}
            error={errors.teamDescription}
          />
          <FormInput
            label="팀 유형"
            type="radio"
            isMust
            isCheckBox
            checkContent={[
              {
                label: '소모임',
                checked: formData.teamType === '소모임',
              },
              {
                label: '동아리',
                checked: formData.teamType === '동아리',
              },
              {
                label: '동호회',
                checked: formData.teamType === '동호회',
              },
            ]}
            onCheckboxChange={label =>
              updateTeamType(label as '소모임' | '동아리' | '동호회')
            }
          />
          <FormInput
            label="활동 지역"
            isMust
            isLocation
            onLocationChange={updateLocation}
            error={errors.location}
            provinces={provinces}
            cities={cities}
            selectedProvince={formData.location.province}
            selectedCity={formData.location.city}
          />
          <FormInput
            label="상의 유니폼 색깔"
            isColor
            value={formData.uniformColor}
            onColorChange={color => updateTeamInfo('uniformColor', color)}
          />
          <FormInput
            htmlFor="team-number-limit"
            label="멤버 수 제한"
            type="text"
            placeholder="0으로 설정할 시 멤버 수용 가능합니다."
            isNumber
            isMust
            value={formData.memberLimit}
            onChange={value => updateTeamInfo('memberLimit', value)}
            error={errors.memberLimit}
          />
          <FormInput
            htmlFor="team-code"
            label="가입 팀 코드 설정"
            type="text"
            placeholder="가입 팀 코드 입력해주세요."
            isNormal
            isMust
            value={formData.teamCode}
            onChange={value => updateTeamInfo('teamCode', value)}
            error={errors.teamCode}
          />
        </FormCardContent>
        <FormCardContent className="team-submit">
          <h1 className="mb-[30px] text-[1.5rem] font-[600]">
            대표자 정보 등록하기
          </h1>
          <div className="equal-information mb-[100px]">
            <label htmlFor="equals">
              <Checkbox
                checked={formData.useSameInfo}
                onCheckedChange={checked =>
                  updateCeoInfo('useSameInfo', checked)
                }
              />
              <input
                type="checkbox"
                id="equals"
                className="hidden"
                checked={formData.useSameInfo}
                onChange={e => updateCeoInfo('useSameInfo', e.target.checked)}
              />
              <span className="pl-5">가입 정보와 동일합니다.</span>
            </label>
          </div>
          <FormInput
            htmlFor="ceo-name"
            label="대표자 이름"
            type="text"
            placeholder="대표자 이름을 입력해주세요."
            isNormal
            isMust
            value={formData.ceoName}
            onChange={value => updateCeoInfo('ceoName', value)}
            error={errors.ceoName}
          />
          <FormInput
            htmlFor="ceo-phone"
            label="연락처"
            type="text"
            placeholder="연락처를 입력해주세요."
            isNormal
            isMust
            value={formData.ceoPhone}
            onChange={value => updateCeoInfo('ceoPhone', value)}
            error={errors.ceoPhone}
          />
          <FormInput
            htmlFor="ceo-account"
            label="계좌 번호"
            type="text"
            placeholder="계좌 번호를 입력해주세요."
            isBankAccount
            isMust
            selectedBank={formData.ceoAccount.bank}
            accountNumber={formData.ceoAccount.accountNumber}
            onBankChange={value => updateCeoAccount('bank', value)}
            onAccountNumberChange={value =>
              updateCeoAccount('accountNumber', value)
            }
            error={errors.ceoAccount}
          />
        </FormCardContent>
        <div className="submit-button-wrapper mt-[50px] flex w-full flex-col items-end gap-2">
          {!isFormComplete() && (
            <p className="text-sm text-gray-500">
              모든 필수 항목을 입력해주세요
            </p>
          )}
          <button
            className={`w-[240px] py-[8px] text-white transition-all duration-200 ${
              isFormComplete()
                ? 'cursor-pointer bg-[rgb(67,0,255)] hover:bg-[rgb(50,0,200)]'
                : 'cursor-not-allowed bg-gray-400'
            }`}
            onClick={handleSubmit}
            disabled={!isFormComplete()}
          >
            팀 만들기
          </button>
        </div>
      </FormCard>
    </div>
  );
};
