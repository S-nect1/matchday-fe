import * as ColorPicker from 'react-colorful';

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
  SelectColorIcon,
} from '@/shared';

type Props = {
  uniformColor: string;
  setUniformColor: (value: string) => void;
};

const SelectColor = ({ uniformColor, setUniformColor }: Props) => {
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
            <ColorPicker.HexColorPicker
              color={uniformColor}
              onChange={setUniformColor}
            />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </>
  );
};

export default SelectColor;
