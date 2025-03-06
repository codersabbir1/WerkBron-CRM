import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const FooterPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center py-4">
      <ul className="flex list-style-none">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="#303135"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>

        {pages.map((page, index, arr) => (
          <li key={page} className="">
            {/* Render only the current page, the one before, and the one after */}
            {(page === currentPage ||
              page === currentPage - 1 ||
              page === currentPage + 1) && (
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded-md mx-1  ${
                  currentPage === page
                    ? "border border-blue-500 bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )}

            {/* Render ellipsis only once if there are more pages before */}
            {index === 1 && currentPage > 3 && <li className="mx-1">...</li>}

            {/* Render ellipsis only once if there are more pages after */}
            {index === arr.length - 2 && currentPage < totalPages - 2 && (
              <li className="mx-1">...</li>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#303135"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FooterPagination;
