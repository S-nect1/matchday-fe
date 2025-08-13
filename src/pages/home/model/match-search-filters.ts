export interface MatchSearchFilters {
  matchType: {
    soccer: boolean;
    futsal: boolean;
    vs11: boolean;
    vs7: boolean;
  };
  location: {
    city: string;
    district: string;
  };
  schedule: {
    date: Date | null;
    hour: string;
    minute: string;
  };
  age: {
    age20: boolean;
    age30: boolean;
    age40: boolean;
    up50: boolean;
  };
  gender: {
    male: boolean;
    female: boolean;
    mixed: boolean;
  };
  teamAbility: {
    m1: boolean;
    m2: boolean;
    m3: boolean;
    m4: boolean;
  };
}

export const initialSearchFilters: MatchSearchFilters = {
  matchType: { soccer: false, futsal: false, vs11: false, vs7: false },
  location: { city: '', district: '' },
  schedule: { date: null, hour: '', minute: '' },
  age: {
    age20: false,
    age30: false,
    age40: false,
    up50: false,
  },
  gender: {
    male: false,
    female: false,
    mixed: false,
  },
  teamAbility: { m1: false, m2: false, m3: false, m4: false },
};
