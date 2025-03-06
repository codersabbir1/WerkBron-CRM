import React from "react";
import Head from "./features/Head";
import TableHead from "./features/TableHead";
import TableBody from "./features/TableBody";
import Footer from "./features/Footer";

const ActiveContact: React.FC = () => {
  return (
    <div className="relative border border-[#D8DCE8] rounded-xl h-[84vh]">
      <Head />
      <table className="w-full">
        <TableHead />
        <TableBody />
      </table>
      <Footer />
    </div>
  );
};

export default ActiveContact;
