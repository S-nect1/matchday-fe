import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui';

export const CreateMatchCard = () => {
  return (
    <Card className="gap-[50px] py-[50px]">
      <CardHeader className="px-[50px]">
        <CardTitle className="text-[32px] leading-12 font-bold">
          매치 정보를 입력해주세요.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-[50px] px-[50px]">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </CardContent>
    </Card>
  );
};
