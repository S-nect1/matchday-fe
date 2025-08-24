import { useNavigate } from 'react-router-dom';

import { PlaceSearchModal } from '@/widgets';

import { MatchTermsAgreement } from '@/features';

import { Button, Card, CardContent, CardHeader, CardTitle } from '@/shared';

import { useCreateMatchForm } from '../model';
import {
  MatchLocationSection,
  MatchOptionsSection,
  MatchPaymentSection,
  MatchScheduleSection,
  MatchTypeSection,
} from './sections';

export const CreateMatchPage = () => {
  const navigate = useNavigate();

  const {
    createMatchForm,
    updateMatchType,
    updateSchedule,
    updateLocation,
    updatePayment,
    updateOptions,
    updateAgreement,
    handlePlaceSelect,
    handleSubmit,
    handlePlaceSearchOpen,
    handlePlaceSearchClose,
  } = useCreateMatchForm();

  return (
    <>
      <Card
        className="mx-auto mt-[50px] mb-[150px] w-[1170px] gap-[50px] rounded-[10px] p-[50px]"
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
            <MatchTypeSection
              matchType={createMatchForm.matchType}
              updateMatchType={updateMatchType}
            />
            <MatchScheduleSection
              schedule={createMatchForm.schedule}
              updateSchedule={updateSchedule}
            />
            <MatchLocationSection
              location={createMatchForm.location}
              updateLocation={updateLocation}
              handlePlaceSearchOpen={handlePlaceSearchOpen}
            />
            <MatchPaymentSection
              payment={createMatchForm.payment}
              updatePayment={updatePayment}
            />
            <MatchOptionsSection
              options={createMatchForm.options}
              updateOptions={updateOptions}
            />
            <MatchTermsAgreement
              isAgreedToNoShowTerms={createMatchForm.isAgreedToNoShowTerms}
              updateAgreement={updateAgreement}
            />
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
            </div>
          </form>
        </CardContent>
      </Card>

      <PlaceSearchModal
        isOpen={createMatchForm.location.isPlaceSearchOpen}
        onClose={handlePlaceSearchClose}
        onPlaceSelect={handlePlaceSelect}
      />
    </>
  );
};
