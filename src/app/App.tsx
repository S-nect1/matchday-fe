import { ListViewCard } from '@/widgets/match-card';

function App() {
  return (
    <div className="mx-auto w-[80%]">
      <ListViewCard
        location={'한양대학교 대운동장'}
        date={'6월 30일 금 12:00'}
        title={'FC S.D.R의 11VS11 축구매치'}
        rentalFee={50000}
        matchType={'soccer'}
        region={'강남구'}
        teamSize={11}
        locationImg={'https://placehold.co/330x165'}
      />
    </div>
  );
}

export default App;
