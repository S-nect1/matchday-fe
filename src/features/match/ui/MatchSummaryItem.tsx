import React from 'react';

type MatchSummaryItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

export const MatchSummaryItem = ({
  icon,
  label,
  value,
}: MatchSummaryItemProps) => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="flex flex-row items-center gap-[5px] leading-6 font-medium text-[#001F63]">
        {icon}
        {label}
      </div>
      <div className="h-[1px] w-full bg-[#92B4FF]" />
      <span className="font-bold">{value}</span>
    </div>
  );
};
