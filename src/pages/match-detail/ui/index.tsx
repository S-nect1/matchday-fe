import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { type PlaceSearchResult } from '@/widgets';

import { MatchTermsAgreement } from '@/features';

import { matchBannerImgExample } from '@/entities';

import { Button, Card, CardContent, CardHeader } from '@/shared';

import { MatchBanner } from './MatchBanner';
import {
  MatchInfoSection,
  MatchSummarySection,
  TeamInfoSection,
} from './sections';

const dummyPostData = {
  deadline: '2025.06.30 금 00:00',
  viewCount: 0,
  createdAt: '2025.06.30',
  matchImage: matchBannerImgExample.matchBanner,
};

const dummyMatchData = {
  teamName: 'FC S.D.R',
  matchType: '축구',
  teamSize: 11,
  location: {
    address_name: '서울 마포구 성산동 515',
    id: '11512288',
    place_name: '서울월드컵경기장',
    place_url: 'http://place.map.kakao.com/11512288',
    road_address_name: '서울 마포구 월드컵로 240',
    x: '126.89724365713197',
    y: '37.56825003712418',
  } as PlaceSearchResult,
  schedule: '2025년 6월 30일 월 01:00 ~ 03:00',
  rentalFee: 55000,
};

export const MatchDetailPage = () => {
  const navigate = useNavigate();
  // 파라미터에서 id를 가져와서 서버에 매치 정보 요청할 예정
  const postInfo = dummyPostData;
  const matchInfo = dummyMatchData;
  // const teamInfo = ???;

  const [isAgreedToNoShowTerms, setIsAgreedToNoShowTerms] =
    useState<boolean>(false);

  return (
    <Card
      className="mx-auto mt-[50px] mb-[150px] w-[1170px] gap-[50px] rounded-[10px] p-[50px]"
      style={{
        boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.10)',
      }}
    >
      <CardHeader className="px-0">
        <MatchBanner
          teamName={matchInfo.teamName}
          teamSize={matchInfo.teamSize}
          matchType={matchInfo.matchType}
          deadline={postInfo.deadline}
          viewCount={postInfo.viewCount}
          createdAt={postInfo.createdAt}
          bannerImage={postInfo.matchImage}
        />
      </CardHeader>
      <CardContent className="relative flex flex-col gap-[50px] px-0">
        <MatchSummarySection
          matchType={matchInfo.matchType}
          place_name={matchInfo.location.place_name}
          rentalFee={matchInfo.rentalFee.toLocaleString()}
          teamSize={`${matchInfo.teamSize} VS ${matchInfo.teamSize}`}
        />
        <TeamInfoSection teamName={matchInfo.teamName} />
        <MatchInfoSection
          schedule={matchInfo.schedule}
          rentalFee={matchInfo.rentalFee.toLocaleString()}
          location={matchInfo.location}
        />
        <MatchTermsAgreement
          isAgreedToNoShowTerms={isAgreedToNoShowTerms}
          updateAgreement={() => setIsAgreedToNoShowTerms(prev => !prev)}
        />
        <div className="mt-13 flex w-full flex-row justify-end gap-[15px]">
          <Button
            type="button"
            size="lg"
            variant="hoverHighlight"
            className="w-60"
            onClick={() => navigate(-1)}
          >
            돌아가기
          </Button>
          <Button
            type="submit"
            size="lg"
            className="w-60 bg-[#0043FF] text-[16px] leading-6 font-bold text-white hover:bg-[#0037cc]"
          >
            매치 등록하기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
