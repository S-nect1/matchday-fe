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
import type React from 'react';

type Props = {
  title: string;
  dialogContent: React.ReactNode;
};

export const FilterModal = ({ title, dialogContent }: Props) => {
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
        className="gap-[15px] rounded-[20px] p-[30px]"
        showCloseButton={false}
      >
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl leading-9 font-bold">
            {title}
          </DialogTitle>
          <DialogClose className="cursor-pointer">
            <CloseIcon />
          </DialogClose>
        </DialogHeader>
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
};
