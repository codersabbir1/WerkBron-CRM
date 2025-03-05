import React from "react";

const Head: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-4 p-4">
      <div className="flex gap-2 bg-[#F4F7FE] py-1 px-[5px] rounded text-sm font-medium">
        <span className="bg-[#fff] text-[#303135]  py-[6px] px-3 rounded cursor-pointer">
          Active Contacts
        </span>
        <span className="py-[6px] px-3 text-[#71747D] cursor-pointer">
          Archived
        </span>
      </div>
      <div className="flex gap-4 items-center text-[#71747D] text-sm ">
        <form action="#">
          <input
            type="text"
            placeholder="Search"
            className="outline-none border min-w-[290px] py-2 px-3 rounded-md"
          />
        </form>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2 4H14M4.66667 8H11.3333M6.66667 12H9.33333"
              stroke="#71747D"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Filter</span>
          <svg
            className="cursor-pointer"
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
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 2V14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
              stroke="#71747D"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Columns</span>
          <svg
            className="cursor-pointer"
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
        <button className="bg-Primary text-[#fff] py-2 px-4 rounded-md">
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default Head;
