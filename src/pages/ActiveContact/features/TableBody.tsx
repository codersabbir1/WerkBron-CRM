import React from "react";

const TableBody: React.FC = () => {
  return (
    <tbody className="text-[#303135] text-sm">
      {[...Array(5)].map((_, index) => (
        <tr key={index}>
          <td className="p-4">John Doe</td>
          <td className="p-4">johndoe@example.com</td>
          <td className="p-4">555-123-4567</td>
          <td className="p-4">Active</td>
          <td className="p-4">2022-01-01</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
