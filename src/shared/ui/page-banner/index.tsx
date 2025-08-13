import React from 'react';
import clsx from 'clsx';

interface TopImageBannerProps {
  bannerContent: React.ReactNode;
  bannerImage: string;
  isMatchBanner?: boolean;
}

export const TopImageBanner = ({
  bannerContent,
  bannerImage,
  isMatchBanner = false,
}: TopImageBannerProps) => {
  return (
    <div
      className={clsx(
        'mx-auto flex h-[220px] w-[1170px] items-center rounded-[10px] bg-cover bg-center px-12.5',
        isMatchBanner && 'h-[160px] w-[1070px] px-[30px]'
      )}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {bannerContent}
    </div>
  );
};
