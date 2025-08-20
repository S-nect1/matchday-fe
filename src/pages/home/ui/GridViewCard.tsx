import { useNavigate } from 'react-router-dom';
import { dateFormatter } from './date-formatter';

import { Badge, CalendarIcon, Card, CardContent, MapPinIcon } from '@/shared';

type Props = {
  matchId: number;
  location: string;
  date: string;
  title: string;
  rentalFee: number;
  matchType: 'soccer' | 'futsal';
  region: string;
  teamSize: 3 | 5 | 7 | 11;
  locationImg: string;
};

export const GridViewCard = ({
  matchId,
  location,
  date,
  title,
  rentalFee,
  matchType,
  region,
  teamSize,
  locationImg,
}: Props) => {
  const navigate = useNavigate();
  const { month, day, weekday, time } = dateFormatter(date);

  return (
    <Card
      className="w-[370px] cursor-pointer rounded-[10px] border border-transparent p-0 transition-colors duration-200 hover:border hover:border-[#0043FF]"
      style={{
        boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.10)',
      }}
      onClick={() => navigate(`/match-detail/${matchId}`)}
    >
      <CardContent className="flex flex-col p-0">
        <div className="relative">
          <img src={locationImg} className="rounded-t-[10px]" />
          <div className="absolute bottom-5 left-5 flex flex-row items-center gap-[5px] rounded-full border border-white/30 bg-black/25 px-[10px] py-[5px] backdrop-blur-sm">
            <MapPinIcon />
            <span className="text-[16px] leading-6 font-normal text-[#fff]">
              {location}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] p-5">
          <div className="flex items-center gap-[5px]">
            <CalendarIcon />
            <span className="text-lg leading-[27px] font-bold text-[#001f63]">
              {month}
              <span className="font-normal text-[#616161]">월</span> {day}
              <span className="font-normal text-[#616161]">일</span> {weekday}{' '}
              {time}
            </span>
          </div>
          <h2 className="text-lg leading-[30px] font-bold text-[#212121]">
            {title}
          </h2>
          <div className="flex flex-row items-baseline gap-[5px]">
            <span className="text-sm font-normal text-[#616161]">대관료</span>
            <span className="text-[16px] font-bold">
              {rentalFee.toLocaleString()}
              <span className="font-normal">원</span>
            </span>
          </div>
          <div className="h-px w-full bg-[#e0e0e0]" />
          <div className="flex flex-row items-center gap-[10px]">
            <Badge variant={'matchType'}>
              {matchType === 'futsal' ? '풋살' : '축구'}
            </Badge>
            <span className="text-sm font-medium text-[#616161]">{region}</span>
            <div className="h-[3px] w-[3px] rounded-full bg-[#e0e0e0]" />
            <span className="text-sm font-medium text-[#616161]">
              {teamSize} vs {teamSize}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
