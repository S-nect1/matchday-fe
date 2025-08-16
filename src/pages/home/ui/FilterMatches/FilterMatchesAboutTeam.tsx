import { CircleQuestionMarkIcon } from 'lucide-react';

import { CustomTooltip } from '@/widgets';

import {
  AGES,
  AGE_LABELS,
  GENDERS,
  GENDER_LABELS,
  SelectButton,
  TEAM_ABILITIES,
  TEAM_ABILITY_LABELS,
} from '@/shared';

import { type MatchSearchFilters } from '../../model';

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
            <SelectButton
              label={TEAM_ABILITY_LABELS[key]}
              isSelected={teamAbility[key]}
              onClickSelectButton={() =>
                onUpdateTeamAbility({
                  [key]: !teamAbility[key],
                })
              }
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[5px]">
        <h3 className="text-lg leading-[27px] font-bold">연령대</h3>
        <div className="flex w-full flex-row gap-[5px]">
          {AGES.map(key => (
            <SelectButton
              label={AGE_LABELS[key]}
              isSelected={age[key]}
              onClickSelectButton={() =>
                onUpdateAge({
                  [key]: !age[key],
                })
              }
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[5px]">
        <h3 className="text-lg leading-[27px] font-bold">성별</h3>
        <div className="flex w-full flex-row gap-[5px]">
          {GENDERS.map(key => (
            <SelectButton
              label={GENDER_LABELS[key]}
              isSelected={gender[key]}
              onClickSelectButton={() =>
                onUpdateGender({
                  [key]: !gender[key],
                })
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
