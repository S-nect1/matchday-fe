export type Region = {
  location1: string;
  location2: string;
};

export const location: Region[] = [
  // 서울특별시
  { location1: '서울특별시', location2: '종로구' },
  { location1: '서울특별시', location2: '중구' },
  { location1: '서울특별시', location2: '용산구' },
  { location1: '서울특별시', location2: '성동구' },
  { location1: '서울특별시', location2: '광진구' },
  { location1: '서울특별시', location2: '동대문구' },
  { location1: '서울특별시', location2: '중랑구' },
  { location1: '서울특별시', location2: '성북구' },
  { location1: '서울특별시', location2: '강북구' },
  { location1: '서울특별시', location2: '도봉구' },
  { location1: '서울특별시', location2: '노원구' },
  { location1: '서울특별시', location2: '은평구' },
  { location1: '서울특별시', location2: '서대문구' },
  { location1: '서울특별시', location2: '마포구' },
  { location1: '서울특별시', location2: '양천구' },
  { location1: '서울특별시', location2: '강서구' },
  { location1: '서울특별시', location2: '구로구' },
  { location1: '서울특별시', location2: '금천구' },
  { location1: '서울특별시', location2: '영등포구' },
  { location1: '서울특별시', location2: '동작구' },
  { location1: '서울특별시', location2: '관악구' },
  { location1: '서울특별시', location2: '서초구' },
  { location1: '서울특별시', location2: '강남구' },
  { location1: '서울특별시', location2: '송파구' },
  { location1: '서울특별시', location2: '강동구' },

  // 부산광역시
  { location1: '부산광역시', location2: '중구' },
  { location1: '부산광역시', location2: '서구' },
  { location1: '부산광역시', location2: '동구' },
  { location1: '부산광역시', location2: '영도구' },
  { location1: '부산광역시', location2: '부산진구' },
  { location1: '부산광역시', location2: '동래구' },
  { location1: '부산광역시', location2: '남구' },
  { location1: '부산광역시', location2: '북구' },
  { location1: '부산광역시', location2: '해운대구' },
  { location1: '부산광역시', location2: '사하구' },
  { location1: '부산광역시', location2: '금정구' },
  { location1: '부산광역시', location2: '강서구' },
  { location1: '부산광역시', location2: '연제구' },
  { location1: '부산광역시', location2: '수영구' },
  { location1: '부산광역시', location2: '사상구' },
  { location1: '부산광역시', location2: '기장군' },

  // 대구광역시
  { location1: '대구광역시', location2: '중구' },
  { location1: '대구광역시', location2: '동구' },
  { location1: '대구광역시', location2: '서구' },
  { location1: '대구광역시', location2: '남구' },
  { location1: '대구광역시', location2: '북구' },
  { location1: '대구광역시', location2: '수성구' },
  { location1: '대구광역시', location2: '달서구' },
  { location1: '대구광역시', location2: '달성군' },

  // 인천광역시
  { location1: '인천광역시', location2: '중구' },
  { location1: '인천광역시', location2: '동구' },
  { location1: '인천광역시', location2: '미추홀구' },
  { location1: '인천광역시', location2: '연수구' },
  { location1: '인천광역시', location2: '남동구' },
  { location1: '인천광역시', location2: '부평구' },
  { location1: '인천광역시', location2: '계양구' },
  { location1: '인천광역시', location2: '서구' },
  { location1: '인천광역시', location2: '강화군' },
  { location1: '인천광역시', location2: '옹진군' },

  // 광주광역시
  { location1: '광주광역시', location2: '동구' },
  { location1: '광주광역시', location2: '서구' },
  { location1: '광주광역시', location2: '남구' },
  { location1: '광주광역시', location2: '북구' },
  { location1: '광주광역시', location2: '광산구' },

  // 대전광역시
  { location1: '대전광역시', location2: '동구' },
  { location1: '대전광역시', location2: '중구' },
  { location1: '대전광역시', location2: '서구' },
  { location1: '대전광역시', location2: '유성구' },
  { location1: '대전광역시', location2: '대덕구' },

  // 울산광역시
  { location1: '울산광역시', location2: '중구' },
  { location1: '울산광역시', location2: '남구' },
  { location1: '울산광역시', location2: '동구' },
  { location1: '울산광역시', location2: '북구' },
  { location1: '울산광역시', location2: '울주군' },

  // 세종특별자치시
  { location1: '세종특별자치시', location2: '세종특별자치시' },

  // 경기도
  { location1: '경기도', location2: '수원시' },
  { location1: '경기도', location2: '성남시' },
  { location1: '경기도', location2: '의정부시' },
  { location1: '경기도', location2: '안양시' },
  { location1: '경기도', location2: '부천시' },
  { location1: '경기도', location2: '광명시' },
  { location1: '경기도', location2: '평택시' },
  { location1: '경기도', location2: '동두천시' },
  { location1: '경기도', location2: '안산시' },
  { location1: '경기도', location2: '고양시' },
  { location1: '경기도', location2: '과천시' },
  { location1: '경기도', location2: '구리시' },
  { location1: '경기도', location2: '남양주시' },
  { location1: '경기도', location2: '오산시' },
  { location1: '경기도', location2: '시흥시' },
  { location1: '경기도', location2: '군포시' },
  { location1: '경기도', location2: '의왕시' },
  { location1: '경기도', location2: '하남시' },
  { location1: '경기도', location2: '용인시' },
  { location1: '경기도', location2: '파주시' },
  { location1: '경기도', location2: '이천시' },
  { location1: '경기도', location2: '안성시' },
  { location1: '경기도', location2: '김포시' },
  { location1: '경기도', location2: '화성시' },
  { location1: '경기도', location2: '광주시' },
  { location1: '경기도', location2: '여주시' },
  { location1: '경기도', location2: '양평군' },
  { location1: '경기도', location2: '고양군' },
  { location1: '경기도', location2: '연천군' },
  { location1: '경기도', location2: '가평군' },

  // 강원도
  { location1: '강원도', location2: '춘천시' },
  { location1: '강원도', location2: '원주시' },
  { location1: '강원도', location2: '강릉시' },
  { location1: '강원도', location2: '동해시' },
  { location1: '강원도', location2: '태백시' },
  { location1: '강원도', location2: '속초시' },
  { location1: '강원도', location2: '삼척시' },
  { location1: '강원도', location2: '홍천군' },
  { location1: '강원도', location2: '횡성군' },
  { location1: '강원도', location2: '영월군' },
  { location1: '강원도', location2: '평창군' },
  { location1: '강원도', location2: '정선군' },
  { location1: '강원도', location2: '철원군' },
  { location1: '강원도', location2: '화천군' },
  { location1: '강원도', location2: '양구군' },
  { location1: '강원도', location2: '인제군' },
  { location1: '강원도', location2: '고성군' },
  { location1: '강원도', location2: '양양군' },

  // 충청북도
  { location1: '충청북도', location2: '청주시' },
  { location1: '충청북도', location2: '충주시' },
  { location1: '충청북도', location2: '제천시' },
  { location1: '충청북도', location2: '보은군' },
  { location1: '충청북도', location2: '옥천군' },
  { location1: '충청북도', location2: '영동군' },
  { location1: '충청북도', location2: '증평군' },
  { location1: '충청북도', location2: '진천군' },
  { location1: '충청북도', location2: '괴산군' },
  { location1: '충청북도', location2: '음성군' },
  { location1: '충청북도', location2: '단양군' },

  // 충청남도
  { location1: '충청남도', location2: '천안시' },
  { location1: '충청남도', location2: '공주시' },
  { location1: '충청남도', location2: '보령시' },
  { location1: '충청남도', location2: '아산시' },
  { location1: '충청남도', location2: '서산시' },
  { location1: '충청남도', location2: '논산시' },
  { location1: '충청남도', location2: '계룡시' },
  { location1: '충청남도', location2: '당진시' },
  { location1: '충청남도', location2: '금산군' },
  { location1: '충청남도', location2: '부여군' },
  { location1: '충청남도', location2: '서천군' },
  { location1: '충청남도', location2: '청양군' },
  { location1: '충청남도', location2: '홍성군' },
  { location1: '충청남도', location2: '예산군' },
  { location1: '충청남도', location2: '태안군' },

  // 전라북도
  { location1: '전라북도', location2: '전주시' },
  { location1: '전라북도', location2: '군산시' },
  { location1: '전라북도', location2: '익산시' },
  { location1: '전라북도', location2: '정읍시' },
  { location1: '전라북도', location2: '남원시' },
  { location1: '전라북도', location2: '김제시' },
  { location1: '전라북도', location2: '완주군' },
  { location1: '전라북도', location2: '진안군' },
  { location1: '전라북도', location2: '무주군' },
  { location1: '전라북도', location2: '장수군' },
  { location1: '전라북도', location2: '임실군' },
  { location1: '전라북도', location2: '순창군' },
  { location1: '전라북도', location2: '고창군' },
  { location1: '전라북도', location2: '부안군' },

  // 전라남도
  { location1: '전라남도', location2: '목포시' },
  { location1: '전라남도', location2: '여수시' },
  { location1: '전라남도', location2: '순천시' },
  { location1: '전라남도', location2: '나주시' },
  { location1: '전라남도', location2: '광양시' },
  { location1: '전라남도', location2: '담양군' },
  { location1: '전라남도', location2: '곡성군' },
  { location1: '전라남도', location2: '구례군' },
  { location1: '전라남도', location2: '고흥군' },
  { location1: '전라남도', location2: '보성군' },
  { location1: '전라남도', location2: '화순군' },
  { location1: '전라남도', location2: '장흥군' },
  { location1: '전라남도', location2: '강진군' },
  { location1: '전라남도', location2: '해남군' },
  { location1: '전라남도', location2: '영암군' },
  { location1: '전라남도', location2: '무안군' },
  { location1: '전라남도', location2: '함평군' },
  { location1: '전라남도', location2: '영광군' },
  { location1: '전라남도', location2: '장성군' },
  { location1: '전라남도', location2: '완도군' },
  { location1: '전라남도', location2: '진도군' },
  { location1: '전라남도', location2: '신안군' },

  // 경상북도
  { location1: '경상북도', location2: '포항시' },
  { location1: '경상북도', location2: '경주시' },
  { location1: '경상북도', location2: '김천시' },
  { location1: '경상북도', location2: '안동시' },
  { location1: '경상북도', location2: '구미시' },
  { location1: '경상북도', location2: '영주시' },
  { location1: '경상북도', location2: '영천시' },
  { location1: '경상북도', location2: '상주시' },
  { location1: '경상북도', location2: '문경시' },
  { location1: '경상북도', location2: '경산시' },
  { location1: '경상북도', location2: '군위군' },
  { location1: '경상북도', location2: '의성군' },
  { location1: '경상북도', location2: '청송군' },
  { location1: '경상북도', location2: '영양군' },
  { location1: '경상북도', location2: '영덕군' },
  { location1: '경상북도', location2: '청도군' },
  { location1: '경상북도', location2: '고령군' },
  { location1: '경상북도', location2: '성주군' },
  { location1: '경상북도', location2: '칠곡군' },
  { location1: '경상북도', location2: '예천군' },
  { location1: '경상북도', location2: '봉화군' },
  { location1: '경상북도', location2: '울진군' },
  { location1: '경상북도', location2: '울릉군' },

  // 경상남도
  { location1: '경상남도', location2: '창원시' },
  { location1: '경상남도', location2: '진주시' },
  { location1: '경상남도', location2: '통영시' },
  { location1: '경상남도', location2: '사천시' },
  { location1: '경상남도', location2: '김해시' },
  { location1: '경상남도', location2: '밀양시' },
  { location1: '경상남도', location2: '거제시' },
  { location1: '경상남도', location2: '양산시' },
  { location1: '경상남도', location2: '의령군' },
  { location1: '경상남도', location2: '함안군' },
  { location1: '경상남도', location2: '창녕군' },
  { location1: '경상남도', location2: '고성군' },
  { location1: '경상남도', location2: '남해군' },
  { location1: '경상남도', location2: '하동군' },
  { location1: '경상남도', location2: '산청군' },
  { location1: '경상남도', location2: '함양군' },
  { location1: '경상남도', location2: '거창군' },
  { location1: '경상남도', location2: '합천군' },

  // 제주특별자치도
  { location1: '제주특별자치도', location2: '제주시' },
  { location1: '제주특별자치도', location2: '서귀포시' },
];

// 시/도 목록 추출 (중복 제거)
export const getProvinces = (): string[] => {
  const provinces = location.map(item => item.location1);
  return [...new Set(provinces)];
};

// 특정 시/도의 구/군 목록 추출
export const getCitiesByProvince = (province: string): string[] => {
  return location
    .filter(item => item.location1 === province)
    .map(item => item.location2);
};

// 시/도와 구/군으로 전체 지역명 생성
export const getFullLocationName = (province: string, city: string): string => {
  if (!province || !city) return '';
  return `${province} ${city}`;
};
