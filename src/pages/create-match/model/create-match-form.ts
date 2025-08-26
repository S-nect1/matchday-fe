import type { PlaceSearchResult, TimeType } from '@/widgets';

export interface CreateMatchForm {
  matchType: {
    category: '축구' | '풋살' | null;
    teamSize: 11 | 8 | 6 | 5 | null;
  };
  schedule: {
    startDate: Date | null;
    startTime: TimeType | null;
    endDate: Date | null;
    endTime: TimeType | null;
  };
  location: {
    isPlaceSearchOpen: boolean;
    selectedPlace: PlaceSearchResult | null;
    zipCode: string;
    detailAddress: string;
    isLocationMapOpen: boolean;
  };
  payment: {
    rentalFee: string;
    bank: string;
    accountNumber: string;
  };
  options: {
    uniformColor: string;
    hasBall: boolean;
  };
  isAgreedToNoShowTerms: boolean;
}

export const initialCreateMatchForm: CreateMatchForm = {
  matchType: {
    category: null,
    teamSize: null,
  },
  schedule: {
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
  },
  location: {
    isPlaceSearchOpen: false,
    selectedPlace: null,
    zipCode: '',
    detailAddress: '',
    isLocationMapOpen: false,
  },
  payment: {
    rentalFee: '',
    bank: '',
    accountNumber: '',
  },
  options: {
    uniformColor: '#fff',
    hasBall: false,
  },
  isAgreedToNoShowTerms: false,
};
