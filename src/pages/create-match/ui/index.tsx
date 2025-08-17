import { useNavigate } from 'react-router-dom';

import {
  CustomSelect,
  CustomTimePicker,
  DatePicker,
  LocationMap,
  PlaceSearchModal,
} from '@/widgets';

import {
  ArrowDownForDetail,
  ArrowUpForNotDetail,
  BANK_LIST,
  BinaryRadioGroup,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CustomColorPicker,
  DualOptionButton,
  Input,
  LocationMarkerIcon,
} from '@/shared';

import { useCreateMatchForm } from '../model';

export const CreateMatchPage = () => {
  const navigate = useNavigate();

  const {
    createMatchForm,
    updateMatchInfo,
    updateSchedule,
    updatePayment,
    updateOptions,
    updateLocation,
    handlePlaceSelect,
    handleMapClick,
    handleSubmit,
    handlePlaceSearchOpen,
    handlePlaceSearchClose,
  } = useCreateMatchForm();

  return (
    <>
      <Card
        className="mx-auto mt-[114px] mb-[150px] w-[1170px] gap-[50px] rounded-[10px] p-[50px]"
        style={{
          boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.10)',
        }}
      >
        <CardHeader className="px-0">
          <CardTitle className="text-[32px] leading-12 font-bold">
            매치 정보를 입력해주세요.
          </CardTitle>
        </CardHeader>
        <CardContent className="relative flex flex-col gap-[50px] px-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[50px]">
            <div className="flex flex-row items-center gap-[30px]">
              <label
                htmlFor="match-category"
                className="w-50 text-lg font-bold"
              >
                매치종목<span className="text-[#ff4e3e]">*</span>
              </label>
              <DualOptionButton<'축구' | '풋살'>
                firstLabel="축구"
                secondLabel="풋살"
                firstItem="축구"
                secondItem="풋살"
                isFirstSelected={createMatchForm.matchInfo.category === '축구'}
                onClickSelectButton={selectedCategory =>
                  updateMatchInfo({ category: selectedCategory })
                }
              />
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="team-size" className="w-50 text-lg font-bold">
                인원 수<span className="text-[#ff4e3e]">*</span>
              </label>
              <DualOptionButton<11 | 7>
                firstLabel="11 vs 11"
                secondLabel="7 vs 7"
                firstItem={11}
                secondItem={7}
                isFirstSelected={createMatchForm.matchInfo.teamSize === 11}
                onClickSelectButton={selectedTeamSize =>
                  updateMatchInfo({ teamSize: selectedTeamSize })
                }
              />
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="start-date" className="w-50 text-lg font-bold">
                경기일시<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row gap-[15px]">
                <DatePicker
                  date={createMatchForm.schedule.startDate}
                  onChange={selectedStartDate =>
                    updateSchedule({ startDate: selectedStartDate })
                  }
                />
                <CustomTimePicker
                  selectedTime={createMatchForm.schedule.startTime}
                  onChange={selectedStartTime =>
                    updateSchedule({ startTime: selectedStartTime })
                  }
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="end-date" className="w-50 text-lg font-bold">
                종료일시<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row gap-[15px]">
                <DatePicker
                  date={createMatchForm.schedule.endDate}
                  onChange={selectedEndDate =>
                    updateSchedule({ endDate: selectedEndDate })
                  }
                />
                <CustomTimePicker
                  selectedTime={createMatchForm.schedule.endTime}
                  onChange={selectedEndTime =>
                    updateSchedule({ endTime: selectedEndTime })
                  }
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="zip-code" className="w-50 text-lg font-bold">
                매치장소<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex flex-col gap-[10px]">
                <div className="flex w-210 flex-row items-center gap-[10px]">
                  <Input
                    id="zip-code"
                    className="h-[45px] w-full bg-[#FAFAFA] placeholder:text-[#BDBDBD]"
                    disabled={true}
                    placeholder="우편번호"
                    value={createMatchForm.location.zipCode}
                  />
                  <Button
                    type="button"
                    variant="hoverHighlight"
                    className="h-[45px] w-[110px]"
                    onClick={handlePlaceSearchOpen}
                  >
                    검색
                  </Button>
                </div>
                <Input
                  id="address"
                  className="h-[45px] w-full bg-[#FAFAFA] placeholder:text-[#BDBDBD]"
                  disabled={true}
                  placeholder="주소"
                  value={
                    createMatchForm.location.selectedPlace?.road_address_name ||
                    createMatchForm.location.selectedPlace?.address_name
                  }
                  aria-label="주소"
                />
                <Input
                  id="detail-address"
                  className="h-[45px] w-full placeholder:text-[#BDBDBD]"
                  placeholder="상세주소를 입력해 주세요."
                  value={createMatchForm.location.detailAddress}
                  onChange={e =>
                    updateLocation({ detailAddress: e.target.value })
                  }
                  aria-label="상세주소"
                />
                {createMatchForm.location.selectedPlace && (
                  <div className="flex w-full flex-col gap-[10px] rounded-[5px] border border-[#E0E0E0] p-[15px]">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row gap-[5px]">
                        <LocationMarkerIcon />
                        <span className="text-lg font-bold">
                          {createMatchForm.location.selectedPlace.place_name}
                        </span>
                      </div>
                      <div
                        className="flex cursor-pointer flex-row gap-[5px]"
                        onClick={() =>
                          updateLocation({
                            isLocationMapOpen:
                              !createMatchForm.location.isLocationMapOpen,
                          })
                        }
                      >
                        <span className="text-[16px] font-medium text-[#757575]">
                          {createMatchForm.location.isLocationMapOpen
                            ? '접기'
                            : '위치 자세히보기'}
                        </span>
                        {createMatchForm.location.isLocationMapOpen ? (
                          <ArrowUpForNotDetail />
                        ) : (
                          <ArrowDownForDetail />
                        )}
                      </div>
                    </div>
                    <p className="text-[16px] text-[#757575]">
                      {createMatchForm.location.selectedPlace
                        .road_address_name ||
                        createMatchForm.location.selectedPlace.address_name}
                    </p>
                    {createMatchForm.location.isLocationMapOpen && (
                      <LocationMap
                        selectedPlace={createMatchForm.location.selectedPlace}
                        width="100%"
                        height="250px"
                        level={3}
                        onClick={handleMapClick}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="rental-fee" className="w-50 text-lg font-bold">
                대관료<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row items-center gap-[10px] text-lg font-medium">
                <Input
                  id="rental-fee"
                  type="number"
                  className="h-[45px]"
                  value={createMatchForm.payment.rentalFee}
                  onChange={e =>
                    updatePayment({ rentalFee: Number(e.target.value) })
                  }
                  placeholder="대관비 총액을 입력해주세요. 매칭 확정 후 절반이 입금됩니다."
                />
                원
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="bank-select" className="w-50 text-lg font-bold">
                계좌번호<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row gap-[15px]">
                <CustomSelect
                  value={createMatchForm.payment.bank}
                  placeholder="은행을 선택해 주세요."
                  options={BANK_LIST}
                  onChange={selectedBank =>
                    updatePayment({ bank: selectedBank })
                  }
                />
                <Input
                  id="account-number"
                  className="h-[45px]"
                  value={createMatchForm.payment.accountNumber}
                  onChange={e =>
                    updatePayment({ accountNumber: e.target.value })
                  }
                  placeholder="대관비 입금용 ex)0000-000-000000"
                  aria-label="계좌번호"
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="uniform-color" className="w-50 text-lg font-bold">
                상의 유니폼 색깔<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex flex-row items-center gap-[10px]">
                <CustomColorPicker
                  uniformColor={createMatchForm.options.uniformColor}
                  setUniformColor={selectedColor =>
                    updateOptions({ uniformColor: selectedColor })
                  }
                />
                <span className="text-[16px] text-[#bdbdbd]">
                  색깔을 선택해 주세요.
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="has-ball" className="w-50 text-lg font-bold">
                공 보유 유무<span className="text-[#ff4e3e]">*</span>
              </label>
              <BinaryRadioGroup
                value={createMatchForm.options.hasBall}
                onChange={v => updateOptions({ hasBall: v })}
              />
            </div>
            <div className="flex w-full flex-row justify-end gap-[15px]">
              <Button
                type="button"
                size="lg"
                variant="hoverHighlight"
                className="w-60"
                onClick={() => navigate(-1)}
              >
                돌아가기
              </Button>
              <Button
                type="submit"
                size="lg"
                className="w-60 bg-[#0043FF] text-[16px] leading-6 font-bold text-white hover:bg-[#0037cc]"
              >
                매치 등록하기
              </Button>
              <div className="absolute right-0 bottom-18 flex flex-row items-center gap-[10px]">
                <input
                  id="agreement"
                  type="checkbox"
                  checked={createMatchForm.options.isAgreed}
                  onChange={() =>
                    updateOptions({
                      isAgreed: !createMatchForm.options.isAgreed,
                    })
                  }
                  className="h-5 w-5 accent-[#0043FF]"
                  required
                />
                <label
                  htmlFor="agreement"
                  className="text-center text-[16px] font-medium"
                >
                  매치 노쇼 이용약관 동의하기
                </label>
                <span className="border-b text-xs leading-[18px] text-[#BDBDBD]">
                  보기
                </span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* 장소 검색 모달 */}
      <PlaceSearchModal
        isOpen={createMatchForm.location.isPlaceSearchOpen}
        onClose={handlePlaceSearchClose}
        onPlaceSelect={handlePlaceSelect}
      />
    </>
  );
};
