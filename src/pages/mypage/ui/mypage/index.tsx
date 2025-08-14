import { useMemo } from 'react';

import { Card, CardContent } from '@/shared/ui/card';
import {
  UnderLineTabs,
  UnderLineTabsContent,
  UnderLineTabsList,
  UnderLineTabsTrigger,
} from '@/shared/ui/underline-tabs';

import { MyCalendar } from './MyCalendar';
import { MyInfo } from './MyInfo';
import { MyTeam } from './MyTeam';

export const MyPage = () => {
  const tabs = useMemo(
    () => [
      {
        label: '내 정보',
        value: 'myInfo',
        component: <MyInfo />,
      },
      {
        label: '마이팀',
        value: 'myTeam',
        component: <MyTeam />,
      },
      {
        label: '캘린더',
        value: 'calendar',
        component: <MyCalendar />,
      },
    ],
    []
  );

  return (
    <Card className="container mx-auto px-10 pt-10">
      <CardContent>
        {/* Tabs */}
        <UnderLineTabs defaultValue={tabs[0].value} className="bg-transparent">
          <UnderLineTabsList className="w-full">
            {tabs.map(tab => (
              <UnderLineTabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </UnderLineTabsTrigger>
            ))}
          </UnderLineTabsList>

          {tabs.map(tab => (
            <UnderLineTabsContent key={tab.value} value={tab.value}>
              {tab.component}
            </UnderLineTabsContent>
          ))}
        </UnderLineTabs>
      </CardContent>
    </Card>
  );
};

export default MyPage;
