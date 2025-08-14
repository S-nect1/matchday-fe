import { CardContent } from '@/shared/ui/card';
import { cn } from '@/shared/lib/utils';

export const FormCardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <CardContent className={cn(className, 'mt-[50px]')}>{children}</CardContent>
  );
};
