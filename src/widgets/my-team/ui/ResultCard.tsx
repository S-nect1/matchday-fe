export const ResultCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="result-card relative flex items-center bg-gray-50 p-[30px]">
      {children}
    </div>
  );
};
