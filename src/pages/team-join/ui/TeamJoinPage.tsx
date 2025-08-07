import { FormInput } from '@/features/form-input';
import { FormCard, FormCardContent } from '@/features/form-card';
import { Button } from '@/shared/ui/button';

export const TeamJoinPage = () => {
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
            <div className="h-[20px] w-[20px] rounded-full border-2 border-white bg-yellow-400 shadow-sm"></div>
          </div>
        </div>

        {/* 상의 유니폼 색깔 선택 */}
        <div className="mt-[20px]">
          <label className="mb-[8px] flex items-center">
            <span className="mr-[8px] text-gray-700">상의 유니폼 색깔</span>
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <div className="relative">
              <div className="h-[40px] w-[40px] cursor-pointer rounded-[4px] border border-gray-300 bg-yellow-400"></div>
              <div className="absolute right-0 bottom-0 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-gray-600">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
            </div>
            <span className="ml-[12px] text-sm text-gray-500">
              색깔을 선택해 주세요.
            </span>
          </div>
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
            />
          </FormCardContent>
          <div className="submit-button-wrapper flex w-full justify-end p-[20px]">
            <Button className="w-[240px] bg-[rgb(67,0,255)] py-[12px] font-medium text-white">
              팀 가입하기
            </Button>
          </div>
        </FormCard>
      </div>
    </div>
  );
};
