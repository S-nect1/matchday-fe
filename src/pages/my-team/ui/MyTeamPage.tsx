import { useState } from 'react';

import { Card, CardContent } from '@/shared/ui/card';
import { useMyTeam } from '@/shared/hooks/use-my-team';
import { CommonTabs } from '@/widgets/tabs';
import { TeamInfoReview } from '@/widgets/my-team';

export const MyTeamPage = () => {
  const { isMember, team } = useMyTeam();
  const [activeTabs, setActiveTabs] = useState('team-info-review');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <Card className="mt-8">
          <CardContent className="px-8 py-4">
            <CommonTabs
              content={
                isMember
                  ? [
                      'team-info-review/팀 정보 리뷰',
                      'schedule/일정',
                      'member-manage/회원 관리',
                      'confirmed-match/확정 매치',
                      'submitted-match/신청 매치',
                      'lastest-result/최근 경기 결과',
                    ]
                  : [
                      'team-info-review/팀 정보 리뷰',
                      'calendar/캘린더',
                      'schedule/일정',
                      'submitted-match/신청 매치',
                    ]
              }
              activeTabs={activeTabs}
              setActiveTabs={setActiveTabs}
            />
            {activeTabs === 'team-info-review' && (
              <TeamInfoReview team={team} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
