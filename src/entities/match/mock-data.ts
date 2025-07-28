export interface MatchData {
  location: string;
  date: string;
  title: string;
  rentalFee: number;
  matchType: 'soccer' | 'futsal';
  region: string;
  teamSize: 3 | 5 | 7 | 11;
  locationImg: string;
}

export const mockMatchData: MatchData[] = [
  {
    location: '한양대학교 대운동장',
    date: '6월 30일 금 12:00',
    title: 'FC S.D.릴 11VS11 축구매치',
    rentalFee: 50000,
    matchType: 'soccer',
    region: '서울',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '올림픽공원 풋살장',
    date: '7월 1일 토 14:00',
    title: '주말 풋살 친선경기',
    rentalFee: 80000,
    matchType: 'futsal',
    region: '서울',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '부산아시아드경기장',
    date: '7월 3일 월 19:00',
    title: '부산 FC 정기 축구 모임',
    rentalFee: 45000,
    matchType: 'soccer',
    region: '부산',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '대구스타디움 보조구장',
    date: '7월 5일 수 18:30',
    title: '대구 청년 축구클럽 매치',
    rentalFee: 35000,
    matchType: 'soccer',
    region: '대구',
    teamSize: 7,
    locationImg:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '인천문학경기장 풋살장',
    date: '7월 7일 금 20:00',
    title: '인천 직장인 풋살 리그',
    rentalFee: 60000,
    matchType: 'futsal',
    region: '인천',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '광주월드컵경기장',
    date: '7월 9일 일 16:00',
    title: '광주 아마추어 축구대회',
    rentalFee: 70000,
    matchType: 'soccer',
    region: '광주',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '대전 유성구 체육센터',
    date: '7월 11일 화 19:30',
    title: '대전 IT 직장인 풋살팀',
    rentalFee: 40000,
    matchType: 'futsal',
    region: '대전',
    teamSize: 3,
    locationImg:
      'https://images.unsplash.com/photo-1543351354-84d7d9b850d9?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '성남종합운동장',
    date: '7월 13일 목 18:00',
    title: '성남FC 서포터즈 매치',
    rentalFee: 55000,
    matchType: 'soccer',
    region: '경기',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '강남 스포츠몬스터',
    date: '7월 15일 토 10:00',
    title: '강남 주말 풋살 클럽',
    rentalFee: 90000,
    matchType: 'futsal',
    region: '서울',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '울산문수축구경기장',
    date: '7월 17일 월 17:00',
    title: '울산 현대 팬클럽 매치',
    rentalFee: 65000,
    matchType: 'soccer',
    region: '울산',
    teamSize: 7,
    locationImg:
      'https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '제주 서귀포 풋살장',
    date: '7월 19일 수 15:00',
    title: '제주 바캉스 풋살 투어',
    rentalFee: 85000,
    matchType: 'futsal',
    region: '제주',
    teamSize: 3,
    locationImg:
      'https://images.unsplash.com/photo-1518604666860-f22c2b57b18c?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '잠실 종합운동장',
    date: '7월 21일 금 21:00',
    title: '서울 야간 축구 리그',
    rentalFee: 75000,
    matchType: 'soccer',
    region: '서울',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1526232761682-d26066ba47fd?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '한양대학교 대운동장',
    date: '6월 30일 금 12:00',
    title: 'FC S.D.릴 11VS11 축구매치',
    rentalFee: 50000,
    matchType: 'soccer',
    region: '서울',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '올림픽공원 풋살장',
    date: '7월 1일 토 14:00',
    title: '주말 풋살 친선경기',
    rentalFee: 80000,
    matchType: 'futsal',
    region: '서울',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '부산아시아드경기장',
    date: '7월 3일 월 19:00',
    title: '부산 FC 정기 축구 모임',
    rentalFee: 45000,
    matchType: 'soccer',
    region: '부산',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '대구스타디움 보조구장',
    date: '7월 5일 수 18:30',
    title: '대구 청년 축구클럽 매치',
    rentalFee: 35000,
    matchType: 'soccer',
    region: '대구',
    teamSize: 7,
    locationImg:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '인천문학경기장 풋살장',
    date: '7월 7일 금 20:00',
    title: '인천 직장인 풋살 리그',
    rentalFee: 60000,
    matchType: 'futsal',
    region: '인천',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '광주월드컵경기장',
    date: '7월 9일 일 16:00',
    title: '광주 아마추어 축구대회',
    rentalFee: 70000,
    matchType: 'soccer',
    region: '광주',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '대전 유성구 체육센터',
    date: '7월 11일 화 19:30',
    title: '대전 IT 직장인 풋살팀',
    rentalFee: 40000,
    matchType: 'futsal',
    region: '대전',
    teamSize: 3,
    locationImg:
      'https://images.unsplash.com/photo-1543351354-84d7d9b850d9?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '성남종합운동장',
    date: '7월 13일 목 18:00',
    title: '성남FC 서포터즈 매치',
    rentalFee: 55000,
    matchType: 'soccer',
    region: '경기',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '강남 스포츠몬스터',
    date: '7월 15일 토 10:00',
    title: '강남 주말 풋살 클럽',
    rentalFee: 90000,
    matchType: 'futsal',
    region: '서울',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '울산문수축구경기장',
    date: '7월 17일 월 17:00',
    title: '울산 현대 팬클럽 매치',
    rentalFee: 65000,
    matchType: 'soccer',
    region: '울산',
    teamSize: 7,
    locationImg:
      'https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '제주 서귀포 풋살장',
    date: '7월 19일 수 15:00',
    title: '제주 바캉스 풋살 투어',
    rentalFee: 85000,
    matchType: 'futsal',
    region: '제주',
    teamSize: 3,
    locationImg:
      'https://images.unsplash.com/photo-1518604666860-f22c2b57b18c?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '잠실 종합운동장',
    date: '7월 21일 금 21:00',
    title: '서울 야간 축구 리그',
    rentalFee: 75000,
    matchType: 'soccer',
    region: '서울',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1526232761682-d26066ba47fd?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '한양대학교 대운동장',
    date: '6월 30일 금 12:00',
    title: 'FC S.D.릴 11VS11 축구매치',
    rentalFee: 50000,
    matchType: 'soccer',
    region: '서울',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '올림픽공원 풋살장',
    date: '7월 1일 토 14:00',
    title: '주말 풋살 친선경기',
    rentalFee: 80000,
    matchType: 'futsal',
    region: '서울',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '부산아시아드경기장',
    date: '7월 3일 월 19:00',
    title: '부산 FC 정기 축구 모임',
    rentalFee: 45000,
    matchType: 'soccer',
    region: '부산',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '대구스타디움 보조구장',
    date: '7월 5일 수 18:30',
    title: '대구 청년 축구클럽 매치',
    rentalFee: 35000,
    matchType: 'soccer',
    region: '대구',
    teamSize: 7,
    locationImg:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '인천문학경기장 풋살장',
    date: '7월 7일 금 20:00',
    title: '인천 직장인 풋살 리그',
    rentalFee: 60000,
    matchType: 'futsal',
    region: '인천',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '광주월드컵경기장',
    date: '7월 9일 일 16:00',
    title: '광주 아마추어 축구대회',
    rentalFee: 70000,
    matchType: 'soccer',
    region: '광주',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '대전 유성구 체육센터',
    date: '7월 11일 화 19:30',
    title: '대전 IT 직장인 풋살팀',
    rentalFee: 40000,
    matchType: 'futsal',
    region: '대전',
    teamSize: 3,
    locationImg:
      'https://images.unsplash.com/photo-1543351354-84d7d9b850d9?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '성남종합운동장',
    date: '7월 13일 목 18:00',
    title: '성남FC 서포터즈 매치',
    rentalFee: 55000,
    matchType: 'soccer',
    region: '경기',
    teamSize: 11,
    locationImg:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '강남 스포츠몬스터',
    date: '7월 15일 토 10:00',
    title: '강남 주말 풋살 클럽',
    rentalFee: 90000,
    matchType: 'futsal',
    region: '서울',
    teamSize: 5,
    locationImg:
      'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '울산문수축구경기장',
    date: '7월 17일 월 17:00',
    title: '울산 현대 팬클럽 매치',
    rentalFee: 65000,
    matchType: 'soccer',
    region: '울산',
    teamSize: 7,
    locationImg:
      'https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=400&h=200&fit=crop&auto=format',
  },
  {
    location: '제주 서귀포 풋살장',
    date: '7월 19일 수 15:00',
    title: '제주 바캉스 풋살 투어',
    rentalFee: 85000,
    matchType: 'futsal',
    region: '제주',
    teamSize: 3,
    locationImg:
      'https://images.unsplash.com/photo-1518604666860-f22c2b57b18c?w=400&h=200&fit=crop&auto=format',
  },
];
