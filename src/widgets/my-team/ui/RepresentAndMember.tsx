import { Avatar, AvatarFallback, AvatarImage } from '@/shared';

export const RepresentAndMember = ({
  teamRepresent,
}: {
  teamRepresent: { avatar: string; name: string };
}) => {
  return (
    <div className="represent-and-member mb-[20px] flex items-center justify-between">
      <div className="represent-left flex items-center gap-2">
        <Avatar className="h-[48px] w-[48px]">
          <AvatarImage src={teamRepresent.avatar} />
          <AvatarFallback>Avatar None</AvatarFallback>
        </Avatar>
        <div className="represent-left-info flex flex-col">
          <span className="text-[rgba(97,97,97,1)]">대표</span>
          <span className="font-bold">{teamRepresent.name}</span>
        </div>
      </div>
      <div className="represent-right flex gap-2">
        <div className="member rounded-full bg-gray-200 px-4">팀원</div>
        <span>10명</span>
      </div>
    </div>
  );
};
