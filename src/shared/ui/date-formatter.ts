import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ko';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @param isoUtc e.g. "2025-07-20T10:38:05.103Z"
 * @returns { month: number, day: number, weekday: string, time: string }
 * 8 / 22 / 금 / 17:22
 */
export const getKstDateInfo = (isoUtc: string) => {
  const parsed = dayjs.utc(isoUtc);
  if (!parsed.isValid()) throw new Error('Invalid date format');

  const kst = parsed.tz('Asia/Seoul');

  return {
    month: kst.month() + 1,
    day: kst.date(),
    weekday: kst.locale('ko').format('ddd'),
    time: kst.format('HH:mm'),
  };
};

// 2025.08.22 금 17:22
export const formatKstDateString = (isoUtc: string) => {
  const kst = dayjs.utc(isoUtc).tz('Asia/Seoul');
  return kst.locale('ko').format('YYYY.MM.DD ddd HH:mm');
};

// 2025.08.22 / 17:22
export const getKstDateAndTime = (isoUtc: string) => {
  const kst = dayjs.utc(isoUtc).tz('Asia/Seoul');

  return {
    date: kst.locale('ko').format('YYYY.MM.DD'),
    time: kst.format('HH:mm'),
  };
};

// 2025.08.22 / 17:22:32
export const getKstDateAndTimeWithSec = (isoUtc: string) => {
  const kst = dayjs.utc(isoUtc).tz('Asia/Seoul');

  return {
    date: kst.locale('ko').format('YYYY.MM.DD'),
    time: kst.format('HH:mm:ss'),
  };
};
