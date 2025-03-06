import React, { useEffect } from "react";
import Head from "./features/Head";
import TableHead from "./features/TableHead";
import TableBody from "./features/TableBody";
import Footer from "./features/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const ActiveContact: React.FC = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle("Contact");
  }, [setTitle]);
  return (
    <div className="relative border border-[#D8DCE8] rounded-xl h-[84vh] lg:h-[86vh] xl:h-[89vh]">
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
