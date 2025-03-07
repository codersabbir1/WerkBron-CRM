import React, { useEffect, useState } from "react";
import Head from "./features/Head";
import TableHead from "./features/TableHead";
import TableBody from "./features/TableBody";
import Footer from "./features/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const ActiveContact: React.FC = () => {
  const { setTitle } = usePageTitle();
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTitle("Contact");
  }, [setTitle]);
  return (
    <div className="relative border border-[#D8DCE8] rounded-xl h-[84vh] lg:h-[86vh] xl:h-[89vh]">
      <div className="flex justify-between items-center gap-4 p-4">
        <div className="flex gap-2 bg-[#F4F7FE] py-1 px-[5px] rounded text-sm font-medium">
          <span
            onClick={() => setActive(!active)}
            className={`py-[6px] px-3  cursor-pointer ${
              active ? "rounded bg-[#fff] text-[#303135]" : "text-[#71747D]"
            }`}
          >
            Active Contacts
          </span>
          <span
            onClick={() => setActive(!active)}
            className={`py-[6px] px-3  cursor-pointer ${
              !active ? "rounded bg-[#fff] text-[#303135]" : "text-[#71747D]"
            }`}
          >
            Archived
          </span>
        </div>
        <Head />
      </div>
      <div className="w-full overflow-y-auto h-[73vh] xxl:h-[76vh]">
        <table className="w-full">
          <TableHead />
          <TableBody />
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ActiveContact;
