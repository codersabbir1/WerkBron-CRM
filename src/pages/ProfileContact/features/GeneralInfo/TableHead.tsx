import React from "react";

const TableHead: React.FC = () => {
  const SortIcon = () => (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M14 10.6665L11.3333 13.3332M11.3333 13.3332L8.66667 10.6665M11.3333 13.3332V2.6665M2 5.33317L4.66667 2.6665M4.66667 2.6665L7.33333 5.33317M4.66667 2.6665V13.3332"
          stroke="#71747D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <thead className="bg-[#f4f6fe] text-left text-sm font-medium text-[#71747D]">
      <tr>
        <th className="px-4 py-3 fex">
          <div className="flex gap-1 items-center">
            <span>Job Number</span> <SortIcon />
          </div>
        </th>
        <th colSpan={2} className="px-4 py-3 ">
          <div className="flex gap-1 items-center">
            <span>Position</span> <SortIcon />
          </div>
        </th>
        <th className="px-4 py-3 ">
          <div className="flex gap-1 items-center">
            <span>Sector</span> <SortIcon />
          </div>
        </th>
        <th className="px-4 py-3 ">
          <div className="flex gap-1 items-center">
            <span>Employment Type</span> <SortIcon />
          </div>
        </th>
        <th colSpan={2} className="px-4 py-3 ">
          <div className="flex gap-1 items-center">
            <span>Recruitment Method</span> <SortIcon />
          </div>
        </th>
        <th className="px-4 py-3 ">
          <div className="flex gap-1 items-center">
            <span>Owner</span> <SortIcon />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
