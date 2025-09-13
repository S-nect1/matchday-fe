import type { TeamInfo } from '@/shared/hooks/use-my-team';
import { RepresentAndMember } from './RepresentAndMember';
import { ResultCard } from './ResultCard';
import { CircularProgress } from './CircularProgress';
import { GameRecord } from './GameRecord';
import { GameRecordTag } from './GameRecordTag';

export const TeamInfoReview = ({ team }: { team: TeamInfo | null }) => {
  return (
    <div className="team-info-review mt-[16px]">
      {/* 대표와 팀원 */}
      <RepresentAndMember
        teamRepresent={{ avatar: '/images/none_avatar.png', name: 'OOO' }}
      />
      <ResultCard>
        <CircularProgress
          value={65}
          size={70}
          progressColor="rgba(0,67,255,1)"
          trackColor="rgba(189,189,189,1)"
          stroke={5}
        />
        <GameRecord />
        <div className="game-level absolute right-[30px] flex items-center gap-4">
          <GameRecordTag tag1={'실력'} tag2={'M1'} />
          <GameRecordTag tag1={'연령'} tag2={'20'} />
          <GameRecordTag tag1={'성별'} tag2={'남성'} />
          <GameRecordTag tag1={'상의'} tag2={'M1'} />
          <GameRecordTag tag1={'매치볼'} tag2={'M1'} />
        </div>
      </ResultCard>
    </div>
  );
};
