import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';
import type React from 'react';

type Props = {
  hoverContent: React.ReactNode;
  title: string;
  content: string;
};

export const CustomTooltip = ({ hoverContent, title, content }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{hoverContent}</TooltipTrigger>
      <TooltipContent className="flex w-fit flex-col gap-[5px] p-[10px]">
        <h3 className="text-sm font-bold">{title}</h3>
        <span className="font-light whitespace-pre-line">{content}</span>
      </TooltipContent>
    </Tooltip>
  );
};
