import usePageTitle from "@/hooks/usePageTitle";
import React from "react";
const Header: React.FC = () => {
  const { title } = usePageTitle();
  return (
    <header className="bg-[#fff] border-b border-[#D8DCE8] px-4 py-3 flex justify-between items-center">
      <div className="flex justify-between items-center gap-4 w-full">
        <h2 className="text-2xl font-semibold text-[#303135]">{title}</h2>
        <form action="#">
          <input
            placeholder="Search anything..."
            className="border rounded w-[320px] min-h-[40px] px-3 border-[#D8DCE8] outline-none text-[#353536] text-sm"
            type="text"
          />
        </form>
        <div className="flex gap-4 items-center">
          <div className="px-3 py-2 bg-Primary rounded-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M8 12.5H16M12 8.5V16.5M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M10.3 21.5C10.4674 21.8044 10.7135 22.0583 11.0125 22.2352C11.3116 22.412 11.6526 22.5053 12 22.5053C12.3475 22.5053 12.6885 22.412 12.9876 22.2352C13.2866 22.0583 13.5327 21.8044 13.7 21.5M6 8.5C6 6.9087 6.63214 5.38258 7.75736 4.25736C8.88258 3.13214 10.4087 2.5 12 2.5C13.5913 2.5 15.1174 3.13214 16.2426 4.25736C17.3679 5.38258 18 6.9087 18 8.5C18 15.5 21 17.5 21 17.5H3C3 17.5 6 15.5 6 8.5Z"
                stroke="#303135"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="h-10 w-[1px] bg-[#D8DCE8]"></div>
          <h1 className="text-[#303135] text-base font-semibold">John</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
