import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex text-sm font-monserat font-bold">
        <li>
          <a
            href="#"
            onClick={
              currentPage > 1
                ? () => handlePageChange(currentPage - 1)
                : undefined
            }
            className={`flex items-center justify-center border-2 border-r-0 border-[#BDBDBD] px-5 py-8 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 1
                ? 'cursor-not-allowed bg-[#F3F3F3] text-[#BDBDBD] hover:bg-[#F3F3F3] hover:text-[#BDBDBD]'
                : ''
            }`}
          >
            First
          </a>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => handlePageChange(index + 1)}
              className={`flex items-center justify-center py-8 px-5 h-8 leading-tight ${
                currentPage === index + 1
                  ? 'text-white bg-primary-color border-y-2 border-[#BDBDBD] hover:bg-blue-100 hover:text-blue-700'
                  : 'text-primary-color bg-white border-y-2 border-x border-[#BDBDBD] hover:bg-primary-color hover:text-white'
              }`}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex items-center justify-center px-5 py-8 h-8 leading-tight text-primary-color bg-white border-2 border-l-0 border-[#BDBDBD] rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
