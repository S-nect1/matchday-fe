import { Card } from '@/shared';

type TeamInfoSectionProps = {
  teamName: string;
};

export const TeamInfoSection = ({ teamName }: TeamInfoSectionProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="text-2xl leading-9">
        <span className="font-bold">{teamName}</span>팀 정보
      </h1>
      <Card className="rounded-[10px] p-7.5 shadow-none">
        추후 컴포넌트 가져다 쓸 예정
      </Card>
    </div>
  );
};
