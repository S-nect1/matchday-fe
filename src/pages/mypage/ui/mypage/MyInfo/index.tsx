import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useState } from 'react';

import myInfoBg from './my-info-bg.png';

import { Button, Card, CardContent } from '@/shared';

export const MyInfo = () => {
  const [userProfile] = useState({
    name: 'OOO',
    birthDate: '1997.03.20',
    height: 180,
    weight: 88,
    mainPosition: '미드필더',
    subPosition: '수비수',
    dominantFoot: '오른발',
    jerseyNumber: '01',
    playingExperience: '10년',
    region: '서울',
    advantages: '...',
  });

  return (
    <Card
      style={{
        backgroundImage: `url(${myInfoBg})`,
        backgroundSize: '110% 110%',
      }}
      className="w-full overflow-hidden border-0 bg-cover bg-center shadow-sm"
    >
      <CardContent>
        <div className="flex gap-10 rounded-md">
          <Card className="flex min-w-[400px] items-start gap-6 bg-black/5 p-4">
            <div className="flex gap-2">
              <Avatar className="h-[100px] w-[100px] rounded-full border-2 border-black">
                <AvatarImage src="" alt={userProfile.name} />
                <AvatarFallback className="bg-gray-300 text-3xl text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-full w-full"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h2 className="mb-2 text-3xl font-bold text-black">
                  {userProfile.name}
                </h2>
                <p className="mb-2 text-gray-500">{userProfile.birthDate}</p>
                <p className="font-medium text-black">
                  {userProfile.height}cm/{userProfile.weight}kg
                </p>
              </div>
            </div>
            <div className="mt-4 flex w-full gap-4">
              <Button
                variant="outline"
                className="h-9 flex-1 rounded-md border-gray-300 px-6 text-sm font-medium"
              >
                내 정보 수정하기
              </Button>
              <Button
                variant="outline"
                className="h-9 flex-1 rounded-md border-gray-300 px-6 text-sm font-medium text-gray-600"
              >
                로그아웃
              </Button>
            </div>
          </Card>
          <div className="grid w-full grid-cols-2">
            {[
              { label: '주포지션', value: userProfile.mainPosition },
              { label: '주 발', value: userProfile.dominantFoot },
              { label: '선출 여부', value: userProfile.playingExperience },
              { label: '부포지션', value: userProfile.subPosition },
              { label: '등번호', value: userProfile.jerseyNumber },
              { label: '지역', value: userProfile.region },
            ].map(({ label, value }) => (
              <div className="ml-4 flex" key={label}>
                <div className="flex min-w-20 items-center font-bold text-nowrap">
                  {label}
                </div>
                <div className="flex w-full items-center">
                  <div className="bg-primary h-1 w-1 rounded-full"></div>
                  <div className="w-full rounded-md bg-white px-3 py-2 text-gray-600 shadow-sm">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Advantages Section */}
        <div className="mt-6">
          <h3 className="mb-3 font-bold text-black">주요 특징/장점</h3>
          <div className="rounded-md bg-white p-6 shadow-sm">
            <p className="leading-6 text-gray-600">{userProfile.advantages}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
