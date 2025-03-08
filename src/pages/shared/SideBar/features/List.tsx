import React, { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
  title?: string;
}

const List: React.FC<ListProps> = ({ children, title = "" }) => {
  return (
    <li className="flex items-center m-2 p-2 rounded hover:bg-[#4E5976] cursor-pointer gap-2">
      {children}
      {title.length > 0 && (
        <p className="text-[#fff] text-sm font-medium">{title}</p>
      )}
    </li>
  );
};

export default List;
