import type { PlaceSearchResult, TimeType } from '@/widgets';

export interface CreateMatchForm {
  matchInfo: {
    category: '축구' | '풋살';
    teamSize: 11 | 7;
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
    rentalFee?: number;
    bank: string;
    accountNumber?: string;
  };
  options: {
    uniformColor: string;
    hasBall: boolean;
    isAgreed: boolean;
  };
}

export const initialCreateMatchForm: CreateMatchForm = {
  matchInfo: {
    category: '축구',
    teamSize: 11,
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
    rentalFee: undefined,
    bank: '',
    accountNumber: undefined,
  },
  options: {
    uniformColor: '#fff',
    hasBall: false,
    isAgreed: false,
  },
};
