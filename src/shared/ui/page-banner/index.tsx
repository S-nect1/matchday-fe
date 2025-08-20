import React from 'react';
import clsx from 'clsx';

interface TopImageBannerProps {
  bannerContent: React.ReactNode;
  bannerImage: string;
  variant?: 'default' | 'match';
}

const bannerVariants = {
  default: 'h-[220px] px-12.5',
  match: 'h-[160px] px-[30px]',
};

export const TopImageBanner = ({
  bannerContent,
  bannerImage,
  variant = 'default',
}: TopImageBannerProps) => {
  return (
    <div
      className={clsx(
        'flex w-full max-w-[1170px] items-center self-center rounded-[10px] bg-cover bg-center',
        bannerVariants[variant]
      )}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {bannerContent}
    </div>
  );
};
