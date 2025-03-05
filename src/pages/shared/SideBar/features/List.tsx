import React, { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <li className="flex flex-col items-center m-2 p-2 rounded hover:bg-[#4E5976] cursor-pointer">
      {children}
    </li>
  );
};

export default List;
