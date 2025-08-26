import { z } from 'zod';

const TimeTypeSchema = z.object({
  hour: z
    .string()
    .regex(/^[0-2]\d$/, '시(hour)는 00~23 형식이어야 합니다.')
    .refine(
      v => Number(v) >= 0 && Number(v) <= 23,
      '시(hour)는 00~23 범위여야 합니다.'
    ),
  minute: z
    .string()
    .regex(/^[0-5]\d$/, '분(minute)은 00~59 형식이어야 합니다.')
    .refine(
      v => Number(v) >= 0 && Number(v) <= 59,
      '분(minute)은 00~59 범위여야 합니다.'
    ),
});

export const CreateMatchFormSchema = z.object({
  matchType: z.object({
    category: z.enum(['축구', '풋살']),
    teamSize: z.union([
      z.literal(11),
      z.literal(8),
      z.literal(6),
      z.literal(5),
    ]),
  }),
  schedule: z
    .object({
      startDate: z.date(),
      startTime: TimeTypeSchema,
      endDate: z.date(),
      endTime: TimeTypeSchema,
    })
    .refine(
      ({ startDate, endDate, startTime, endTime }) => {
        const ymd = (d: Date) =>
          new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
        const s = ymd(startDate);
        const e = ymd(endDate);
        if (s < e) return true;
        if (s > e) return false;
        const toMin = (t: { hour: string; minute: string }) =>
          Number(t.hour) * 60 + Number(t.minute);
        return toMin(startTime) <= toMin(endTime);
      },
      { message: '종료 일시가 시작 일시보다 빠를 수 없습니다.' }
    ),
  location: z.object({
    isPlaceSearchOpen: z.boolean(),
    selectedPlace: z.any(), // 필요시 세부 스키마로 교체
    zipCode: z.string().min(1),
    detailAddress: z.string().min(1),
    isLocationMapOpen: z.boolean(),
  }),
  payment: z.object({
    rentalFee: z.string().min(1),
    bank: z.string().min(1),
    accountNumber: z.string().min(1),
  }),
  options: z.object({
    uniformColor: z.string().min(1),
    hasBall: z.boolean(),
  }),
});
