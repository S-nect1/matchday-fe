// 라벨 매핑 객체들
export const MATCH_TYPE_LABELS = {
  soccer: '축구',
  futsal: '풋살',
} as const;

export const TEAM_SIZE_LABELS = {
  vs11: '11 vs 11',
  vs8: '8 vs 8',
  vs6: '6 vs 6',
  vs5: '5 vs 5',
} as const;

export const TEAM_ABILITY_LABELS = {
  m1: 'M1',
  m2: 'M2',
  m3: 'M3',
  m4: 'M4',
} as const;

export const AGE_LABELS = {
  age20: '20대',
  age30: '30대',
  age40: '40대',
  up50: '50대 +',
} as const;

export const GENDER_LABELS = {
  male: '남성',
  female: '여성',
  mixed: '혼성',
} as const;

export const MATCH_TYPES = ['soccer', 'futsal'] as const;
export const TEAM_TYPES = ['vs11', 'vs8', 'vs6', 'vs5'] as const;
export const TEAM_ABILITIES = ['m1', 'm2', 'm3', 'm4'] as const;
export const AGES = ['age20', 'age30', 'age40', 'up50'] as const;
export const GENDERS = ['male', 'female', 'mixed'] as const;
