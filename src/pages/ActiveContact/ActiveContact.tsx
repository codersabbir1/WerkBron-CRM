import React from "react";
import Head from "./features/Head";
import TableHead from "./features/TableHead";
import TableBody from "./features/TableBody";

const ActiveContact: React.FC = () => {
  return (
    <div className="border border-[#D8DCE8] rounded-xl h-[84vh]">
      <Head />
      <table className="w-full">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default ActiveContact;
// 10.10
