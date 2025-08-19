import { useCallback } from 'react';
import Color from 'color';

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
  SelectColorIcon,
  ColorPicker,
  ColorPickerSelection,
  ColorPickerEyeDropper,
  ColorPickerHue,
  ColorPickerAlpha,
  ColorPickerFormat,
} from '@/shared';

type Props = {
  uniformColor: string;
  setUniformColor: (value: string) => void;
};

export const CustomColorPicker = ({ uniformColor, setUniformColor }: Props) => {
  const handleColorChange = useCallback(
    (value: Parameters<typeof Color.rgb>[0]) => {
      const color = Color.rgb(value);
      const [r, g, b, a] = color.rgb().array();
      const next =
        a < 1 ? `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})` : color.hex();

      // 같은 값이면 굳이 업데이트 안 해도 됨 (옵션)
      setUniformColor(next);
    },
    [setUniformColor]
  );
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="relative h-9 w-9 rounded-[5px] border-2 border-[#e0e0e0]"
            style={{ background: uniformColor }}
          >
            <div className="absolute right-0 bottom-0 translate-[30%]">
              <SelectColorIcon />
            </div>
          </div>
        </DialogTrigger>
        <DialogOverlay className="bg-white opacity-0">
          <DialogContent className="w-fit p-0" showCloseButton={false}>
            <ColorPicker
              className="bg-background h-120 w-100 rounded-md border p-4 shadow-sm"
              onChange={handleColorChange}
            >
              <ColorPickerSelection />
              <div className="flex items-center gap-4">
                <ColorPickerEyeDropper />
                <div className="grid w-full gap-1">
                  <ColorPickerHue />
                  <ColorPickerAlpha />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ColorPickerFormat />
              </div>
            </ColorPicker>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </>
  );
};
