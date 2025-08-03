import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  // 처음 페이지로 이동
  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1);
    }
  };
  // 이전 페이지로 이동
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // 마지막 페이지로 이동
  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
    }
  };

  // 특정 페이지로 이동
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  // 표시할 페이지 번호들 계산
  const getVisiblePages = () => {
    const visiblePages: (number | 'ellipsis')[] = [];

    if (totalPages <= 7) {
      // 총 페이지가 7개 이하면 모든 페이지 표시
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      // 복잡한 페이지네이션 로직
      if (currentPage <= 4) {
        // 현재 페이지가 앞쪽에 있을 때
        visiblePages.push(1, 2, 3, 4, 5, 'ellipsis', totalPages);
      } else if (currentPage >= totalPages - 3) {
        // 현재 페이지가 뒤쪽에 있을 때
        visiblePages.push(
          1,
          'ellipsis',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        // 현재 페이지가 중간에 있을 때
        visiblePages.push(
          1,
          'ellipsis',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          'ellipsis',
          totalPages
        );
      }
    }

    return visiblePages;
  };

  if (totalPages <= 1) {
    return null; // 페이지가 1개 이하면 pagination 숨김
  }

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="py-1">
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst
            onClick={handleFirstPage}
            className={
              currentPage === 1
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevious}
            className={
              currentPage === 1
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
          />
        </PaginationItem>

        {visiblePages.map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => handlePageClick(page)}
                isActive={page === currentPage}
                className={`cursor-pointer ${
                  page === currentPage
                    ? 'rounded-full border-0 text-[#0043FF]'
                    : ''
                }`}
                style={
                  page === currentPage
                    ? { boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.10)' }
                    : {}
                }
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            className={
              currentPage === totalPages
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast
            onClick={handleLastPage}
            className={
              currentPage === totalPages
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
