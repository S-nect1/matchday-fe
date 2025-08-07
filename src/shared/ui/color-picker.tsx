import * as React from 'react';
import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { cn } from '@/shared/lib/utils';

interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  className?: string;
}

const predefinedColors = [
  '#FF0000', // 빨강
  '#FF6B6B', // 연한 빨강
  '#FF8E00', // 주황
  '#FFB347', // 연한 주황
  '#FFFF00', // 노랑
  '#FFFF99', // 연한 노랑
  '#00FF00', // 초록
  '#90EE90', // 연한 초록
  '#00FFFF', // 청록
  '#87CEEB', // 하늘색
  '#0000FF', // 파랑
  '#92B4FF', // 연한 파랑
  '#800080', // 보라
  '#DDA0DD', // 연한 보라
  '#FFC0CB', // 분홍
  '#FFB6C1', // 연한 분홍
  '#000000', // 검정
  '#808080', // 회색
  '#FFFFFF', // 흰색
];

export const ColorPicker = ({
  value = '#92B4FF',
  onChange,
  className,
}: ColorPickerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleColorSelect = (color: string) => {
    onChange?.(color);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'h-10 w-full justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className
          )}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-4 w-4 rounded border"
              style={{ backgroundColor: value }}
            />
            <span>{value}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">색상 선택</h4>
            <p className="text-muted-foreground text-sm">
              팀 유니폼 색상을 선택해주세요.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {predefinedColors.map(color => (
              <button
                key={color}
                className={cn(
                  'h-8 w-8 rounded border-2 transition-all hover:scale-110',
                  value === color ? 'border-primary' : 'border-border'
                )}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
                title={color}
              />
            ))}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">커스텀 색상</label>
            <input
              type="color"
              value={value}
              onChange={e => onChange?.(e.target.value)}
              className="border-input bg-background h-10 w-full cursor-pointer rounded border px-3 py-2"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
