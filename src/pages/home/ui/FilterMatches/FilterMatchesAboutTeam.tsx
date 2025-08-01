import { CircleQuestionMarkIcon } from 'lucide-react';

import { Button } from '@/shared';
import { CustomTooltip } from '@/widgets';
import {
  TEAM_ABILITIES,
  TEAM_ABILITY_LABELS,
  AGES,
  AGE_LABELS,
  GENDERS,
  GENDER_LABELS,
  type MatchSearchFilters,
} from '../../model';

type Props = {
  teamAbility: MatchSearchFilters['teamAbility'];
  age: MatchSearchFilters['age'];
  gender: MatchSearchFilters['gender'];
  onUpdateTeamAbility: (
    updates: Partial<MatchSearchFilters['teamAbility']>
  ) => void;
  onUpdateAge: (updates: Partial<MatchSearchFilters['age']>) => void;
  onUpdateGender: (updates: Partial<MatchSearchFilters['gender']>) => void;
};

export const FilterMatchesAboutTeam = ({
  teamAbility,
  age,
  gender,
  onUpdateTeamAbility,
  onUpdateAge,
  onUpdateGender,
}: Props) => {
  return (
    <>
      <div className="flex w-full flex-col gap-[5px]">
        <div className="flex w-full flex-row items-center justify-between">
          <h3 className="text-lg leading-[27px] font-bold">팀 실력</h3>
          <CustomTooltip
            hoverContent={
              <div className="flex flex-row items-center gap-1 text-[#BDBDBD]">
                <span className="text-sm font-medium">팀실력</span>
                <CircleQuestionMarkIcon className="w-[14px]" />
              </div>
            }
            title="팀실력 안내"
            content={`내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입\n니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.\n 내용입니다. 내용입니다.`}
          />
        </div>
        <div className="flex w-full flex-row gap-[5px]">
          {TEAM_ABILITIES.map(key => (
            <Button
              key={key}
              variant="select"
              size="lg"
              className="flex-1 text-[#0043FF]"
              style={{
                borderColor: teamAbility[key] ? '#0043FF' : '',
              }}
              onClick={() =>
                onUpdateTeamAbility({
                  [key]: !teamAbility[key],
                })
              }
            >
              {TEAM_ABILITY_LABELS[key]}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[5px]">
        <h3 className="text-lg leading-[27px] font-bold">연령대</h3>
        <div className="flex w-full flex-row gap-[5px]">
          {AGES.map(key => (
            <Button
              key={key}
              variant="select"
              size="lg"
              className="flex-1"
              style={{
                borderColor: age[key] ? '#0043FF' : '',
              }}
              onClick={() =>
                onUpdateAge({
                  [key]: !age[key],
                })
              }
            >
              {AGE_LABELS[key]}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[5px]">
        <h3 className="text-lg leading-[27px] font-bold">성별</h3>
        <div className="flex w-full flex-row gap-[5px]">
          {GENDERS.map(key => (
            <Button
              key={key}
              variant="select"
              size="lg"
              className="flex-1"
              style={{
                borderColor: gender[key] ? '#0043FF' : '',
              }}
              onClick={() =>
                onUpdateGender({
                  [key]: !gender[key],
                })
              }
            >
              {GENDER_LABELS[key]}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
