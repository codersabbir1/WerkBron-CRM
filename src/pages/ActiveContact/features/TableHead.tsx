import React from "react";

const TableHead: React.FC = () => {
  return (
    <thead className="bg-[#f4f6fe] text-left text-sm font-medium text-[#71747D]">
      <tr>
        <th className="px-4 py-3">Name</th>
        <th className="px-4 py-3">Email</th>
        <th className="px-4 py-3">Phone</th>
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">Last Contacted</th>
      </tr>
    </thead>
  );
};

export default TableHead;
