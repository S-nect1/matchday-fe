import { useState } from 'react';

import { getCitiesByProvince, getProvinces } from '@/shared/constant/location';
import { cn } from '@/shared/lib/utils';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared';

export const MyInfoEditPage = () => {
  const [isCanEdit, _setIsCanEdit] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState('');
  console.log('selectedProvince: ', selectedProvince);
  const [selectedCity, setSelectedCity] = useState('');
  const isDisabled = !isCanEdit;
  return (
    <Card className="px-6 py-12">
      <CardContent>
        <h1 className="mb-10 text-3xl font-semibold">내 정보 수정</h1>
        <Avatar className="mb-6 h-[100px] w-[100px] rounded-full border-2 border-black">
          <AvatarImage src="" />
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

        <div className="mb-10 grid w-full grid-cols-2 gap-x-6 gap-y-10">
          {/* email */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="email">
              이메일
            </label>
            <InfoInput
              className="w-full border-gray-300 bg-gray-300"
              name="email"
              value="example@example.com"
              type="email"
              isDisabled={isDisabled}
            />
          </div>
          {/* password */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="password">
              비밀번호
            </label>
            <InfoInput
              className="w-full border-gray-300 bg-gray-300"
              name="password"
              value="1234"
              isDisabled={isDisabled}
              type="password"
            />
          </div>
          {/* name */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="name">
              이름
            </label>
            <InfoInput
              className="w-full"
              name="name"
              value="홍길동"
              isDisabled={isDisabled}
            />
          </div>
          {/* phone number */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="전화번호">
              전화번호
            </label>
            <InfoInput
              className="w-full"
              name="전화번호"
              value="010-1234-5678"
              isDisabled={isDisabled}
              type="tel"
            />
          </div>
          {/* birth date */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="생년월일">
              생년월일
            </label>
            <InfoInput
              className="w-full"
              name="생년월일"
              value="1990-01-01"
              isDisabled={isDisabled}
            />
          </div>
          {/* gender */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="성별">
              성별
            </label>
            <Select
              disabled={isDisabled}
              value={'남성'}
              onValueChange={() => {}}
            >
              <SelectTrigger className="min-h-[45px] w-full">
                <SelectValue placeholder="성별" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'남성'}>남성</SelectItem>
                <SelectItem value={'여성'}>여성</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* height */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="신장">
              신장
            </label>
            <InfoInput
              className="w-full"
              name="신장"
              value="180cm"
              isDisabled={isDisabled}
            />
          </div>
          {/* weight */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="체중">
              체중
            </label>
            <InfoInput
              className="w-full"
              name="체중"
              value="88kg"
              isDisabled={isDisabled}
            />
          </div>
          {/* position */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="포지션">
              포지션
            </label>
            <InfoInput
              className="w-full"
              name="포지션"
              value="미드필더"
              isDisabled={isDisabled}
            />
          </div>
          {/* sub position */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="부포지션">
              부포지션
            </label>
            <InfoInput
              className="w-full"
              name="부포지션"
              value="수비수"
              isDisabled={isDisabled}
            />
          </div>
          {/* preferred foot */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="주발">
              주발
            </label>
            <Select disabled={isDisabled} value={'오른발'}>
              <SelectTrigger className="min-h-[45px] w-full">
                <SelectValue placeholder="주발" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'오른발'}>오른발</SelectItem>
                <SelectItem value={'왼발'}>왼발</SelectItem>
                <SelectItem value={'양발'}>양발</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* jersey number */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="등번호">
              등번호
            </label>
            <InfoInput
              className="w-full"
              name="등번호"
              value="01"
              isDisabled={isDisabled}
            />
          </div>
          {/* starter status */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="선출여부">
              선출여부
            </label>
            <Select
              disabled={isDisabled}
              value={'없음'}
              onValueChange={() => {}}
            >
              <SelectTrigger className="min-h-[45px] w-full">
                <SelectValue placeholder="선출여부" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'없음'}>없음</SelectItem>
                <SelectItem value={'있음'}>있음</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* activity area */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="활동지역">
              활동지역
            </label>
            <div className="flex h-full justify-between gap-4">
              <Select
                disabled={isDisabled}
                value={selectedProvince}
                onValueChange={v => {
                  setSelectedProvince(v);
                  setSelectedCity('');
                }}
              >
                <SelectTrigger className="min-h-[45px] w-full">
                  <SelectValue placeholder="시/도" />
                </SelectTrigger>
                <SelectContent>
                  {getProvinces().map(province => (
                    <SelectItem key={province} value={province}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                disabled={isDisabled}
                value={selectedCity}
                onValueChange={setSelectedCity}
              >
                <SelectTrigger className="min-h-[45px] w-full">
                  <SelectValue placeholder="구/군" />
                </SelectTrigger>
                <SelectContent>
                  {getCitiesByProvince(selectedProvince).map(city => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* characteristics/strengths */}
          <div className="w-full">
            <label className="mb-1 block font-bold" htmlFor="특징/장점">
              특징/장점
            </label>
            <InfoInput
              className="w-full"
              name="특징/장점"
              value="속도,정확도"
              isDisabled={isDisabled}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="min-w-60">내 정보 수정</Button>
          <Button className="min-w-60" variant={'outline'}>
            비밀번호 변경
          </Button>
          <Button className="min-w-60" variant={'outline'}>
            회원 탈퇴
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const InfoInput = ({
  className,
  isDisabled,
  name,
  value,
  type,
}: {
  className: string;
  name: string;
  value: string;
  isDisabled: boolean;
  type?: React.ComponentProps<typeof Input>['type'];
}) => {
  return (
    <Input
      className={`min-h-[45px] w-full ${cn(className)}`}
      name={name}
      value={value}
      disabled={isDisabled}
      type={type}
    />
  );
};
