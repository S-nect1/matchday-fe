import { useState } from 'react';

import { FormInput } from '@/features/form-input';
import { FormCard, FormCardContent } from '@/features/form-card';

import { Button } from '@/shared/ui/button';
import Color from 'color';
import { Card, CardContent } from '@/shared/ui/card';

export const TeamJoinPage = () => {
  const [uniformColor, setUniformColor] = useState<string>('#92B4FF');
  const [teamCode, setTeamCode] = useState<string>('');

  const handleColorChange = (color: Parameters<typeof Color.rgb>[0]) => {
    if (typeof color === 'string') {
      setUniformColor(color);
    } else if (color && typeof color === 'object' && 'hex' in color) {
      setUniformColor(color.hex);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-indigo-600">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/team-banner-sample.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative flex items-center justify-between px-6 py-8 sm:px-10">
          <div>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
              팀 가입
            </h1>
            <p className="mt-2 text-sm text-white/90">
              팀에 가입하고 함께 축구를 즐겨보세요.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 flex justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-5">
            <h2 className="mb-4 text-lg font-semibold">팀 가입 신청</h2>
            <p className="text-sm text-gray-600">
              팀 가입 신청이 완료되었습니다. 팀 대표자의 승인을 기다려주세요.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
