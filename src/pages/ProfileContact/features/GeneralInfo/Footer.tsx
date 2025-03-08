import FooterPagination from "@/components/FooterPagination";
import React, { useState } from "react"; 

const Footer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <footer className="absolute bottom-0 left-0 w-full border-t px-6 py-[2px] text-xs text-[#71747D] bg-[#fff] z-10">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-2 items-center">
          <span>Show</span>
          <select
            className="py-2 px-4 outline-none border rounded-md cursor-pointer"
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
            <option selected value="10">
              10
            </option>
          </select>
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
