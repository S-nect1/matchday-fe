import React from 'react';

import { Button } from '@/shared/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs';
import { ProgressCircle } from '@/shared/ui/progress-circle';
import { Card, CardContent } from '@/shared/ui/card';
import { useMyTeam } from '@/shared/hooks/use-my-team';
import {
  AppliedMatchesTab,
  CalendarTab,
  MatchesTab,
  MatchResultsTab,
  MemberManagementTab,
  ScheduleTab,
  TeamInfoTab,
} from '@/widgets/my-team';
import { MainBanner } from '@/app/layouts/ui';
import MyTeamTag from './MyTeamTag';
import MyTeamSubmit from './MyTeamSubmit';

export const MyTeamPage = () => {
  const { isMember, team, isLoading, error } = useMyTeam();
  const [activeTab, setActiveTab] = React.useState('info');

  if (isLoading) {
    return (
      <div className="container mx-auto my-16">
        <Card>
          <CardContent className="p-8">로딩 중...</CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto my-16">
        <Card>
          <CardContent className="p-8 text-red-600">
            오류가 발생했습니다: {error}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!team) {
    return (
      <div className="container mx-auto my-16">
        <Card>
          <CardContent className="p-8">팀 정보를 찾을 수 없습니다.</CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <MainBanner
        content={
          <div className="my-team-name relative w-full self-start py-8">
            <h2 className="text-[28px] text-white">팀 이름입니다.</h2>
            <MyTeamTag
              content={['M1', '20대', '서울특별시 강남구', '소모임']}
              star={4}
            />
            <span className="text-white">
              팀 설명입니다 어쩌구저쩌구.팀 설명입니다 어쩌구저쩌구.팀
              설명입니다 어쩌구저쩌구.팀 설명입니다 어쩌구저쩌구.팀 설명입니다
              어쩌구저쩌구
            </span>
            <MyTeamSubmit isMember={isMember} />
          </div>
        }
      />
      {/* Main Content */}
      <div className="container mx-auto mt-[30px] px-4 pb-8">
        {/* Team Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                <div>
                  <h2 className="text-xl font-semibold">{team.teamName}</h2>
                  <p className="text-gray-600">{team.teamDescription}</p>
                </div>
              </div>
              {!isMember && (
                <Button className="bg-blue-600 hover:bg-blue-700">
                  팀 가입 신청
                </Button>
              )}
            </div>

            {/* Tabs and Content */}
            <Card className="mt-8">
              <CardContent className="p-4 sm:p-6">
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="flex w-full flex-nowrap overflow-x-auto">
                    <TabsTrigger value="info" className="flex-shrink-0">
                      팀 정보 · 리뷰
                    </TabsTrigger>
                    <TabsTrigger value="calendar" className="flex-shrink-0">
                      일정
                    </TabsTrigger>
                    <TabsTrigger value="schedule" className="flex-shrink-0">
                      스케줄
                    </TabsTrigger>
                    <TabsTrigger value="matches" className="flex-shrink-0">
                      등록한 매치
                    </TabsTrigger>
                    {isMember && (
                      <>
                        <TabsTrigger
                          value="member-management"
                          className="flex-shrink-0"
                        >
                          팀원 관리
                        </TabsTrigger>
                        <TabsTrigger
                          value="applied-matches"
                          className="flex-shrink-0"
                        >
                          신청한 매치
                        </TabsTrigger>
                        <TabsTrigger
                          value="match-results"
                          className="flex-shrink-0"
                        >
                          매치 결과
                        </TabsTrigger>
                      </>
                    )}
                  </TabsList>

                  <TabsContent value="info" className="mt-6">
                    <TeamInfoTab ProgressCircle={ProgressCircle} />
                  </TabsContent>
                  <TabsContent value="calendar" className="mt-6">
                    <CalendarTab ProgressCircle={ProgressCircle} />
                  </TabsContent>
                  <TabsContent value="schedule" className="mt-6">
                    <ScheduleTab isTeamMember={isMember} />
                  </TabsContent>
                  <TabsContent value="matches" className="mt-6">
                    <MatchesTab />
                  </TabsContent>
                  {isMember && (
                    <>
                      <TabsContent value="member-management" className="mt-6">
                        <MemberManagementTab />
                      </TabsContent>
                      <TabsContent value="applied-matches" className="mt-6">
                        <AppliedMatchesTab />
                      </TabsContent>
                      <TabsContent value="match-results" className="mt-6">
                        <MatchResultsTab />
                      </TabsContent>
                    </>
                  )}
                </Tabs>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
