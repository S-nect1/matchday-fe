import { useState } from 'react';
import { FormInput } from '@/features/form-input';
import { FormCard, FormCardContent } from '@/features/form-card';
import { Button } from '@/shared/ui/button';

export const TeamJoinPage = () => {
  const [uniformColor, setUniformColor] = useState<string>('#92B4FF');
  const [teamCode, setTeamCode] = useState<string>('');

  return (
    <div className="shadow-[0 0 15px 0 rgba(0,0,0,.1)]] container mx-auto my-[50px] rounded-[10px] bg-white p-[50px]">
      {/* 팀 정보 섹션 */}
      <div className="mb-[40px]">
        <h1 className="mb-[20px] text-[1.5rem] font-[600] text-black">
          팀 정보
        </h1>
        <div className="rounded-[8px] border border-gray-200 bg-white p-[20px] shadow-sm">
          <div className="mb-[12px]">
            <span className="font-medium text-blue-600">소모임</span>
            <span className="mx-[8px] text-gray-400">-</span>
            <span className="text-gray-500">서울특별시 강남구</span>
          </div>
          <h2 className="mb-[12px] text-[1.2rem] font-[600] text-black">
            팀 이름입니다.
          </h2>
          <p className="mb-[16px] leading-[1.5] text-gray-600">
            팀 설명입니다. 팀 설명입니다. 팀 설명입니다. 팀 설명입니다. 팀
            설명입니다.
          </p>
          <div className="flex items-center">
            <span className="mr-[8px] text-gray-700">상의 유니폼</span>
            <div
              className="h-[20px] w-[20px] rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: uniformColor }}
            />
          </div>
        </div>

        {/* 상의 유니폼 색깔 선택 */}
        <div className="mt-[20px]">
          <FormInput
            label="상의 유니폼 색깔"
            isColor
            isMust
            value={uniformColor}
            onColorChange={setUniformColor}
          />
        </div>
      </div>

      {/* 팀 가입하기 섹션 */}
      <div>
        <h1 className="mb-[20px] text-[1.5rem] font-[600] text-black">
          팀 가입하기
        </h1>
        <FormCard>
          <FormCardContent className="team-join-information">
            <FormInput
              htmlFor="team-code"
              label="팀 코드"
              type="text"
              placeholder="팀 코드를 입력해 주세요."
              isNormal
              isMust
              value={teamCode}
              onChange={setTeamCode}
            />
          </FormCardContent>
          <div className="submit-button-wrapper flex w-full justify-end p-[20px]">
            <Button
              disabled={!teamCode.trim()}
              className={`w-[240px] py-[12px] font-medium text-white transition-colors ${
                teamCode.trim()
                  ? 'bg-[rgb(67,0,255)] hover:bg-[rgb(50,0,200)]'
                  : 'cursor-not-allowed bg-gray-400'
              }`}
            >
              팀 가입하기
            </Button>
          </div>
        </FormCard>
      </div>
    </div>
  );
};
