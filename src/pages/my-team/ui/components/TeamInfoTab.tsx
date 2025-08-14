import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

interface TeamInfoTabProps {
  ProgressCircle: React.FC<{
    percent: number;
    size?: number;
    strokeWidth?: number;
    trackColor?: string;
    progressColor?: string;
    gapAngleDeg?: number;
  }>;
}

export const TeamInfoTab: React.FC<TeamInfoTabProps> = ({ ProgressCircle }) => {
  return (
    <>
      {/* Info row */}
      <div className="mt-5 flex items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="대표 아바타" />
          <AvatarFallback>OO</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <div className="text-gray-500">대표</div>
          <div className="font-medium">ooo</div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm">
          <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700">
            팀원
          </span>
          <span className="text-gray-600">10명</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-6 flex gap-3 rounded-lg border border-gray-300 bg-gray-50 p-4">
        {/* 승률 진행도 */}
        <div className="flex items-center gap-4">
          <ProgressCircle percent={65} size={76} strokeWidth={8} />
          <div>
            <div className="text-lg text-gray-600">2024 전반기</div>
            <div className="mt-1 text-base">
              <span className="font-semibold text-blue-600">00승</span>
              <span className="mx-2 text-gray-400">00무</span>
              <span className="font-semibold text-red-500">00패</span>
            </div>
          </div>
        </div>

        {/* 나머지 박스들이 균등하게 공간 차지 */}
        <div className="flex flex-1 gap-3">
          {/* 실력 */}
          <div className="flex flex-1 items-center justify-between rounded-lg border border-gray-300 bg-white p-4">
            <div className="self-start text-sm text-gray-500">실력</div>
            <div className="self-end bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-lg font-bold text-transparent">
              M1
            </div>
          </div>

          {/* 연령 */}
          <div className="flex flex-1 items-center justify-between rounded-lg border border-gray-300 bg-white p-4">
            <div className="self-start text-sm text-gray-500">연령</div>
            <div className="self-end text-lg font-bold">20</div>
          </div>

          {/* 성별 */}
          <div className="flex flex-1 items-center justify-between rounded-lg border border-gray-300 bg-white p-4">
            <div className="self-start text-sm text-gray-500">성별</div>
            <div className="self-end text-lg font-bold">남성</div>
          </div>

          {/* 상의 유니폼 */}
          <div className="flex flex-1 items-center justify-between rounded-lg border border-gray-300 bg-white p-4">
            <div className="self-start text-sm text-gray-500">상의 유니폼</div>
            <div className="flex h-6 w-6 items-center justify-center self-end rounded-full border-2 border-blue-400 bg-blue-500">
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>

          {/* 매치볼 */}
          <div className="flex flex-1 items-center justify-between rounded-lg border border-gray-300 bg-white p-4">
            <div className="self-start text-sm text-gray-500">매치볼</div>
            <div className="flex h-6 w-6 items-center justify-center self-end rounded-full border-2 border-blue-400 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <div>
                  <div className="text-sm font-medium">user0{i}</div>
                  <div className="text-xs text-gray-500">
                    24.12.20 · 21:30:22
                  </div>
                </div>
              </div>
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다. 리뷰내용입니다.
              리뷰내용입니다.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
