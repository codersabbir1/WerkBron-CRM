import FooterPagination from "@/components/FooterPagination";
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <footer className="absolute bottom-0 left-0 w-full border-t px-6 py-[2px] text-xs text-[#71747D] bg-[#fff] z-10 rounded-b-xl">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-2 items-center">
          <span>Show</span>
          <div className="relative w-fit">
            <select
              className="py-2 px-4 pr-10 outline-none border border-[#D8DCE8] rounded-[6px] cursor-pointer shadow-sm text-sm font-medium appearance-none bg-white"
              name=""
              id=""
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option selected value="200">
                200
              </option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#71747D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <span>of 628 total entries</span>
        </div>
        <FooterPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </footer>
  );
};

export default Footer;
