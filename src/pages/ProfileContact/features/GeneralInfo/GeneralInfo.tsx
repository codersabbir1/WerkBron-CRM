import React from "react";
import Head from "./Head";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";

const GeneralInfo: React.FC = () => {
  return (
    <div>
      <ContactInfo />
      <div className="w-full  border rounded-xl relative h-[35vh] lg:h-[37vh] xxl:h-[40vh] bg-[#fff]">
        <Head />
        <div className="w-full overflow-y-auto h-[27vh] xxxl:h-[30vh]">
          <table className="w-full">
            <TableHead />
            <TableBody />
          </table>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default GeneralInfo;
