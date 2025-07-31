import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomSelect, DatePicker } from '@/widgets';
import { matchTime, bankList } from '@/shared';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from '@/shared';

import { HasBallCheck } from './HasBallCheck';
import { SelectColor } from './SelectColor';

export const CreateMatchPage = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<'축구' | '풋살'>(
    '축구'
  );
  const [selectedTeamSize, setSelectedTeamSize] = useState<11 | 7>(11);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<string>('');
  const [selectedEndTime, setSelectedEndTime] = useState<string>('');
  const [rentalFee, setRentalFee] = useState<number | undefined>(undefined);
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState<string | undefined>(
    undefined
  );
  const [uniformColor, setUniformColor] = useState<string>('#fff');
  const [hasBall, setHasBall] = useState<boolean>(false);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  return (
    <Card
      className="mx-auto mt-[114px] mb-[150px] w-[1170px] gap-[50px] rounded-[10px] p-[50px]"
      style={{
        boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.10)',
      }}
    >
      <CardHeader className="px-0">
        <CardTitle className="text-[32px] leading-12 font-bold">
          매치 정보를 입력해주세요.
        </CardTitle>
      </CardHeader>
      <CardContent className="relative flex flex-col gap-[50px] px-0">
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            매치종목<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex w-210 flex-row gap-[15px]">
            <Button
              size="lg"
              variant="select"
              className="flex-1 text-[16px] font-bold"
              style={{
                borderColor: selectedCategory === '축구' ? '#0043FF' : '',
              }}
              onClick={() => setSelectedCategory('축구')}
            >
              축구
            </Button>
            <Button
              size="lg"
              variant="select"
              className="flex-1 text-[16px] font-bold"
              style={{
                borderColor: selectedCategory === '풋살' ? '#0043FF' : '',
              }}
              onClick={() => setSelectedCategory('풋살')}
            >
              풋살
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            인원 수<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex w-210 flex-row gap-[15px]">
            <Button
              size="lg"
              variant="select"
              className="flex-1 text-[16px] font-bold"
              style={{
                borderColor: selectedTeamSize === 11 ? '#0043FF' : '',
              }}
              onClick={() => setSelectedTeamSize(11)}
            >
              11 vs 11
            </Button>
            <Button
              size="lg"
              variant="select"
              className="flex-1 text-[16px] font-bold"
              style={{
                borderColor: selectedTeamSize === 7 ? '#0043FF' : '',
              }}
              onClick={() => setSelectedTeamSize(7)}
            >
              7 vs 7
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            경기일시<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex w-210 flex-row gap-[15px]">
            <DatePicker date={selectedDate} onChange={setSelectedDate} />
            <CustomSelect
              value={selectedStartTime}
              placeholder="경기 시간을 선택해 주세요."
              options={matchTime}
              onChange={setSelectedStartTime}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            종료일시<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex w-210 flex-row gap-[15px]">
            <DatePicker date={selectedDate} onChange={setSelectedDate} />
            <CustomSelect
              value={selectedEndTime}
              placeholder="종료 시간을 선택해 주세요."
              options={matchTime}
              onChange={setSelectedEndTime}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            매치장소<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex w-210 flex-row gap-[15px]">
            <DatePicker date={selectedDate} onChange={setSelectedDate} />
            <CustomSelect
              value={selectedEndTime}
              placeholder="종료 시간을 선택해 주세요."
              options={matchTime}
              onChange={setSelectedEndTime}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            대관료<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex w-210 flex-row items-center gap-[10px] text-lg font-medium">
            <Input
              className="h-[45px]"
              value={rentalFee}
              onChange={e => setRentalFee(Number(e.target.value))}
              placeholder="대관비 총액을 입력해주세요. 매칭 확정 후 절반이 입금됩니다."
            />
            원
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            계좌번호<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex w-210 flex-row gap-[15px]">
            <CustomSelect
              value={selectedBank}
              placeholder="은행을 선택해 주세요."
              options={bankList}
              onChange={setSelectedBank}
            />
            <Input
              className="h-[45px]"
              value={accountNumber}
              onChange={e => setAccountNumber(e.target.value)}
              placeholder="대관비 입금용 ex)0000-000-000000"
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            상의 유니폼 색깔<span className="text-[#ff4e3e]">*</span>
          </h3>
          <div className="flex flex-row items-center gap-[10px]">
            <SelectColor
              uniformColor={uniformColor}
              setUniformColor={setUniformColor}
            />
            <span className="text-[16px] text-[#bdbdbd]">
              색깔을 선택해 주세요.
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <h3 className="w-50 text-lg font-bold">
            공 보유 유무<span className="text-[#ff4e3e]">*</span>
          </h3>
          <HasBallCheck hasBall={hasBall} setHasBall={setHasBall} />
        </div>
        <div className="flex w-full flex-row justify-end gap-[15px]">
          <Button
            size="lg"
            className="w-60 bg-[#eee] text-[16px] leading-6 font-bold text-[#757575] hover:bg-[#e0e0e0]"
            onClick={() => navigate(-1)}
          >
            돌아가기
          </Button>
          <Button
            size="lg"
            className="w-60 bg-[#0043FF] text-[16px] leading-6 font-bold hover:bg-[#0037cc]"
            onClick={() => console.log('매치 적용하기. 서버 요청 필요')}
          >
            필터적용
          </Button>
          <div className="absolute right-0 bottom-18 flex flex-row items-center gap-[10px]">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              className="h-5 w-5 accent-[#0043FF]"
            />
            <span className="text-center text-[16px] font-medium">
              매치 노쇼 이용약관 동의하기
            </span>
            <span className="border-b text-xs leading-[18px] text-[#BDBDBD]">
              보기
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
