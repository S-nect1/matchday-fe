import { Card } from '@/shared/ui/card';

export const FormCard = ({ children }: { children: React.ReactNode }) => {
  return <Card className="p-6">{children}</Card>;
};
