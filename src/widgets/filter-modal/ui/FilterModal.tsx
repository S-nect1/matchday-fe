import type React from 'react';

import {
  Button,
  CloseIcon,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FilterIcon,
} from '@/shared';

type FilterModalProps = {
  title: string;
  filterDialogHeader: React.ReactNode; // 상단 고정
  filterDialogContent: React.ReactNode; // 스크롤 영역
  filterDialogFooter: React.ReactNode; // 하단 고정
};

export const FilterModal = ({
  title,
  filterDialogHeader,
  filterDialogContent,
  filterDialogFooter,
}: FilterModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="none"
          className="flex flex-row gap-[5px] rounded-[5px] border border-[#E0E0E0] bg-[#fff] px-[15px] py-2 text-[16px] leading-6 font-medium text-[#757575] hover:bg-[#f5f5f5]"
        >
          <FilterIcon />
          필터
        </Button>
      </DialogTrigger>
      <DialogContent
        className="flex h-[90dvh] max-h-235 w-[min(92vw,512px)] flex-col rounded-[20px] bg-white p-[30px]"
        showCloseButton={false}
      >
        <DialogHeader className="mb-[15px] flex flex-shrink-0 flex-row items-center justify-between">
          <DialogTitle className="text-2xl leading-9 font-bold">
            {title}
          </DialogTitle>
          <DialogClose className="cursor-pointer">
            <CloseIcon />
          </DialogClose>
        </DialogHeader>
        <div className="flex h-full min-h-0 flex-1 flex-col gap-0">
          {filterDialogHeader}
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-[15px] py-[15px]">
              {filterDialogContent}
            </div>
          </div>
          <div className="border-t border-gray-100 bg-white pt-[15px]">
            {filterDialogFooter}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
