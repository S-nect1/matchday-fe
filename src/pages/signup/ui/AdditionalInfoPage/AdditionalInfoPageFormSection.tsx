import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

interface AdditionalInfoData {
  height: string;
  weight: string;
  advantages: string;
  dominantFoot: string;
  playingExperience: string;
  mainPosition: string;
  subPosition: string;
  jerseyNumber: string;
}

interface AdditionalInfoPageFormSectionProps {
  formData: AdditionalInfoData;
  onInputChange: (
    field: keyof AdditionalInfoData
  ) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onSelectChange: (field: keyof AdditionalInfoData) => (value: string) => void;
}

export const AdditionalInfoPageFormSection = ({
  formData,
  onInputChange,
  onSelectChange,
}: AdditionalInfoPageFormSectionProps) => {
  return (
    <div className="space-y-6">
      {/* 신장 */}
      <div className="space-y-2">
        <Label htmlFor="height" className="text-lg font-bold text-black">
          신장<span className="text-[#FF4E3E]">*</span>
        </Label>
        <Input
          id="height"
          value={formData.height}
          onChange={onInputChange('height')}
          placeholder="신장을 입력해 주세요."
          className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
        />
      </div>

      {/* 체중 */}
      <div className="space-y-2">
        <Label htmlFor="weight" className="text-lg font-bold text-black">
          체중
        </Label>
        <Input
          id="weight"
          value={formData.weight}
          onChange={onInputChange('weight')}
          placeholder="체중을 입력해 주세요."
          className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
        />
      </div>

      {/* 특징/장점 */}
      <div className="space-y-2">
        <Label htmlFor="advantages" className="text-lg font-bold text-black">
          특징/장점
        </Label>
        <Input
          id="advantages"
          value={formData.advantages}
          onChange={onInputChange('advantages')}
          placeholder="특징/장점을 입력해 주세요."
          className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
        />
      </div>

      {/* 주발 */}
      <div className="space-y-2">
        <Label htmlFor="dominantFoot" className="text-lg font-bold text-black">
          주발<span className="text-[#FF4E3E]">*</span>
        </Label>
        <Select
          value={formData.dominantFoot}
          onValueChange={onSelectChange('dominantFoot')}
        >
          <SelectTrigger className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black">
            <SelectValue placeholder="주발을 선택해 주세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="right">오른발</SelectItem>
            <SelectItem value="left">왼발</SelectItem>
            <SelectItem value="both">양발</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 선출여부 */}
      <div className="space-y-2">
        <Label
          htmlFor="playingExperience"
          className="text-lg font-bold text-black"
        >
          선출여부<span className="text-[#FF4E3E]">*</span>
        </Label>
        <Select
          value={formData.playingExperience}
          onValueChange={onSelectChange('playingExperience')}
        >
          <SelectTrigger className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black">
            <SelectValue placeholder="선출여부를 선택해 주세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">프로</SelectItem>
            <SelectItem value="semipro">세미프로</SelectItem>
            <SelectItem value="amateur">아마추어</SelectItem>
            <SelectItem value="beginner">초보</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 포지션 */}
      <div className="space-y-2">
        <Label htmlFor="mainPosition" className="text-lg font-bold text-black">
          포지션<span className="text-[#FF4E3E]">*</span>
        </Label>
        <div className="space-y-2">
          {/* 주포지션 */}
          <Select
            value={formData.mainPosition}
            onValueChange={onSelectChange('mainPosition')}
          >
            <SelectTrigger className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black">
              <SelectValue placeholder="주포지션을 선택해 주세요." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GK">골키퍼 (GK)</SelectItem>
              <SelectItem value="CB">센터백 (CB)</SelectItem>
              <SelectItem value="LB">레프트백 (LB)</SelectItem>
              <SelectItem value="RB">라이트백 (RB)</SelectItem>
              <SelectItem value="LWB">레프트윙백 (LWB)</SelectItem>
              <SelectItem value="RWB">라이트윙백 (RWB)</SelectItem>
              <SelectItem value="CDM">수비형 미드필더 (CDM)</SelectItem>
              <SelectItem value="CM">중앙 미드필더 (CM)</SelectItem>
              <SelectItem value="CAM">공격형 미드필더 (CAM)</SelectItem>
              <SelectItem value="LM">레프트 미드필더 (LM)</SelectItem>
              <SelectItem value="RM">라이트 미드필더 (RM)</SelectItem>
              <SelectItem value="LW">레프트윙 (LW)</SelectItem>
              <SelectItem value="RW">라이트윙 (RW)</SelectItem>
              <SelectItem value="CF">센터포워드 (CF)</SelectItem>
              <SelectItem value="ST">스트라이커 (ST)</SelectItem>
            </SelectContent>
          </Select>

          {/* 부포지션 */}
          <Select
            value={formData.subPosition}
            onValueChange={onSelectChange('subPosition')}
          >
            <SelectTrigger className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black">
              <SelectValue placeholder="부포지션을 선택해 주세요." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GK">골키퍼 (GK)</SelectItem>
              <SelectItem value="CB">센터백 (CB)</SelectItem>
              <SelectItem value="LB">레프트백 (LB)</SelectItem>
              <SelectItem value="RB">라이트백 (RB)</SelectItem>
              <SelectItem value="LWB">레프트윙백 (LWB)</SelectItem>
              <SelectItem value="RWB">라이트윙백 (RWB)</SelectItem>
              <SelectItem value="CDM">수비형 미드필더 (CDM)</SelectItem>
              <SelectItem value="CM">중앙 미드필더 (CM)</SelectItem>
              <SelectItem value="CAM">공격형 미드필더 (CAM)</SelectItem>
              <SelectItem value="LM">레프트 미드필더 (LM)</SelectItem>
              <SelectItem value="RM">라이트 미드필더 (RM)</SelectItem>
              <SelectItem value="LW">레프트윙 (LW)</SelectItem>
              <SelectItem value="RW">라이트윙 (RW)</SelectItem>
              <SelectItem value="CF">센터포워드 (CF)</SelectItem>
              <SelectItem value="ST">스트라이커 (ST)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 등번호 */}
      <div className="space-y-2">
        <Label htmlFor="jerseyNumber" className="text-lg font-bold text-black">
          등번호<span className="text-[#FF4E3E]">*</span>
        </Label>
        <Input
          id="jerseyNumber"
          type="number"
          value={formData.jerseyNumber}
          onChange={onInputChange('jerseyNumber')}
          placeholder="등번호를 입력해 주세요."
          className="h-[45px] rounded-[5px] border-gray-300 bg-white text-base text-black placeholder:text-gray-400"
          min="1"
          max="99"
        />
      </div>
    </div>
  );
};
