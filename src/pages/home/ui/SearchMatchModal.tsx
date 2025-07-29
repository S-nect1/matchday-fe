import React, { useState } from 'react';
import { CircleQuestionMarkIcon } from 'lucide-react';

import {
  FilterModal,
  SearchBar,
  DatePicker,
  CustomTooltip,
  CustomSelect,
} from '@/widgets';
import {
  Button,
  cityProvinceData,
  districtCountyData,
  hoursData,
  minutesData,
} from '@/shared';

type Props = {
  searchText: string;
  setSearchText: (value: string) => void;
  onChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchMatchModal = ({
  searchText,
  setSearchText,
  onChangeSearchText,
}: Props) => {
  const [selectedType, setSelectedType] = useState({
    soccer: false,
    futsal: false,
    vs11: false,
    vs7: false,
  });
  const [selectedTeamAbility, setSelectedTeamAbility] = useState({
    m1: false,
    m2: false,
    m3: false,
    m4: false,
  });
  const [selectedAge, setSelectedAge] = useState({
    age20: false,
    age30: false,
    age40: false,
    up50: false,
  });
  const [selectedGender, setSelectedGender] = useState({
    male: false,
    female: false,
    mixed: false,
  });
  // 날짜
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 경기 시간
  const [selectedHour, setSelectedHour] = useState<string>(''); // 예: "18"
  const [selectedMinute, setSelectedMinute] = useState<string>(''); // 예: "30"

  // 지역 선택
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const matchTypeLabels: Record<keyof typeof selectedType, string> = {
    soccer: '축구',
    futsal: '풋살',
    vs11: '11 vs 11',
    vs7: '7 vs 7',
  };

  const teamAbilityLabels: Record<keyof typeof selectedTeamAbility, string> = {
    m1: 'M1',
    m2: 'M2',
    m3: 'M3',
    m4: 'M4',
  };

  const ageLabels: Record<keyof typeof selectedAge, string> = {
    age20: '20대',
    age30: '30대',
    age40: '40대',
    up50: '50대 +',
  };

  const genderLabels: Record<keyof typeof selectedGender, string> = {
    male: '남자',
    female: '여자',
    mixed: '혼성',
  };

  const onClickToReset = () => {
    setSearchText('');
    setSelectedType({ soccer: false, futsal: false, vs11: false, vs7: false });
    setSelectedTeamAbility({ m1: false, m2: false, m3: false, m4: false });
    setSelectedAge({ age20: false, age30: false, age40: false, up50: false });
    setSelectedGender({ male: false, female: false, mixed: false });
    setSelectedDate(null);
    setSelectedHour('');
    setSelectedMinute('');
    setSelectedCity('');
    setSelectedDistrict('');
  };

  return (
    <FilterModal
      title="매치 검색"
      dialogContent={
        <div className="flex flex-col gap-[15px]">
          <div className="mb-[15px]">
            <SearchBar
              searchText={searchText}
              onChangeSearchText={onChangeSearchText}
            />
          </div>
          <div className="grid grid-flow-row grid-cols-2 gap-[15px]">
            {Object.entries(matchTypeLabels).map(([key, label]) => (
              <Button
                key={key}
                variant="select"
                size="lg"
                className="flex-1"
                style={{
                  borderColor: selectedType[key as keyof typeof selectedType]
                    ? '#0043FF'
                    : '',
                }}
                onClick={() =>
                  setSelectedType(prev => ({
                    ...prev,
                    [key]: !prev[key as keyof typeof selectedType],
                  }))
                }
              >
                {label}
              </Button>
            ))}
          </div>
          <div className="flex flex-row gap-[15px]">
            <CustomSelect
              label="시/도"
              value={selectedCity}
              placeholder="시/도를 선택해 주세요."
              options={cityProvinceData}
              onChange={setSelectedCity}
            />
            <CustomSelect
              label="구/군"
              value={selectedDistrict}
              placeholder="구/군을 선택해 주세요."
              options={districtCountyData}
              onChange={setSelectedDistrict}
            />
          </div>
          <div className="flex w-full flex-col gap-[5px]">
            <h3 className="text-lg leading-[27px] font-bold">날짜</h3>
            <DatePicker date={selectedDate} onChange={setSelectedDate} />
          </div>
          <div className="flex w-full flex-col gap-[5px]">
            <h3 className="text-lg leading-[27px] font-bold">경기일시</h3>
            <div className="flex flex-row gap-[15px]">
              <div className="flex w-full flex-row gap-[10px]">
                <CustomSelect
                  value={selectedHour}
                  placeholder=""
                  options={hoursData.map(String)}
                  onChange={setSelectedHour}
                />
                <span className="text-lg font-medium">시</span>
              </div>
              <div className="flex w-full flex-row gap-[10px]">
                <CustomSelect
                  value={selectedMinute}
                  placeholder=""
                  options={minutesData.map(String)}
                  onChange={setSelectedMinute}
                />
                <span className="text-lg font-medium">분</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-[5px]">
            <div className="flex w-full flex-row items-center justify-between">
              <h3 className="text-lg leading-[27px] font-bold">팀 실력</h3>
              <CustomTooltip
                hoverContent={
                  <div className="flex flex-row items-center gap-1 text-[#BDBDBD]">
                    <span className="text-sm font-medium">팀실력</span>
                    <CircleQuestionMarkIcon className="w-[14px]" />
                  </div>
                }
                title="팀실력 안내"
                content={`내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입\n니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.\n 내용입니다. 내용입니다.`}
              />
            </div>
            <div className="flex w-full flex-row gap-[5px]">
              {Object.entries(teamAbilityLabels).map(([key, label]) => (
                <Button
                  key={key}
                  variant="select"
                  size="lg"
                  className="flex-1 text-[#0043FF]"
                  style={{
                    borderColor: selectedTeamAbility[
                      key as keyof typeof selectedTeamAbility
                    ]
                      ? '#0043FF'
                      : '',
                  }}
                  onClick={() =>
                    setSelectedTeamAbility(prev => ({
                      ...prev,
                      [key]: !prev[key as keyof typeof selectedTeamAbility],
                    }))
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-[5px]">
            <h3 className="text-lg leading-[27px] font-bold">연령대</h3>
            <div className="flex w-full flex-row gap-[5px]">
              {Object.entries(ageLabels).map(([key, label]) => (
                <Button
                  key={key}
                  variant="select"
                  size="lg"
                  className="flex-1"
                  style={{
                    borderColor: selectedAge[key as keyof typeof selectedAge]
                      ? '#0043FF'
                      : '',
                  }}
                  onClick={() =>
                    setSelectedAge(prev => ({
                      ...prev,
                      [key]: !prev[key as keyof typeof selectedAge],
                    }))
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-[5px]">
            <h3 className="text-lg leading-[27px] font-bold">성별</h3>
            <div className="flex w-full flex-row gap-[5px]">
              {Object.entries(genderLabels).map(([key, label]) => (
                <Button
                  key={key}
                  variant="select"
                  size="lg"
                  className="flex-1"
                  style={{
                    borderColor: selectedGender[
                      key as keyof typeof selectedGender
                    ]
                      ? '#0043FF'
                      : '',
                  }}
                  onClick={() =>
                    setSelectedGender(prev => ({
                      ...prev,
                      [key]: !prev[key as keyof typeof selectedGender],
                    }))
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-[15px] flex w-full flex-row gap-[15px]">
            <Button
              size="lg"
              className="flex-1 bg-[#eee] text-[16px] leading-6 font-bold text-[#757575] hover:bg-[#e0e0e0]"
              onClick={onClickToReset}
            >
              초기화
            </Button>
            <Button
              size="lg"
              className="flex-1 bg-[#0043FF] text-[16px] leading-6 font-bold hover:bg-[#0037cc]"
              onClick={() => console.log('필터 적용하기. 서버 요청 필요할듯?')}
            >
              필터적용
            </Button>
          </div>
        </div>
      }
    />
  );
};
