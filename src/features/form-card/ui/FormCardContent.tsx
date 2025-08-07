import { cn } from '@/shared/lib/utils';

export const FormCardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={cn(className, 'mt-[50px]')}>{children}</div>;
};
