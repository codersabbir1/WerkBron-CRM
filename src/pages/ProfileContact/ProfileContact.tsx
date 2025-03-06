import usePageTitle from "@/hooks/usePageTitle";
import React, { useEffect, useState } from "react";
import UserInfo from "./features/UserInfo";

const ProfileContact: React.FC = () => {
  const { setTitle } = usePageTitle();
  const [active, setActive] = useState("general");
  const handleButton = (value: string) => {
    setActive(value);
  };

  useEffect(() => {
    setTitle("Contact Profile");
  }, [setTitle]);
  return (
    <div>
      <div className="border rounded-md w-full overflow-hidden">
        {/* UserInfo  */}
        <UserInfo />
        <div className="bg-[#F4F7FE]">
          <ul className="flex items-center p-1 text-[#71747D] text-sm font-medium">
            <li
              onClick={() => handleButton("general")}
              className={`cursor-pointer py-[6px] px-3 ${
                active == "general" ? "bg-[#fff] rounded !text-[#303135]" : ""
              } `}
            >
              General
            </li>
            <li
              onClick={() => handleButton("mailing")}
              className={`cursor-pointer py-[6px] px-3 ${
                active == "mailing" ? "bg-[#fff] rounded !text-[#303135]" : ""
              } `}
            >
              Mailing
            </li>
            <li
              onClick={() => handleButton("meeting")}
              className={`cursor-pointer py-[6px] px-3 ${
                active == "meeting" ? "bg-[#fff] rounded !text-[#303135]" : ""
              } `}
            >
              Meeting
            </li>
            <li
              onClick={() => handleButton("files")}
              className={`cursor-pointer py-[6px] px-3 ${
                active == "files" ? "bg-[#fff] rounded !text-[#303135]" : ""
              } `}
            >
              Files
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileContact;
