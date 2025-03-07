import React from "react";

const GeneralInfo: React.FC = () => {
  return (
    <div>
      <div className="my-4 grid grid-cols-12 gap-4">
        <div className="col-span-5 border px-6 py-4 rounded-xl">
          <table className=" w-full">
            <thead className="text-left text-base font-semibold">
              <tr>
                <th className="pb-4" colSpan={2}>
                  Contact Information
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  First Name
                </td>
                <td className="text-[#303135] text-sm font-semibold">Steven</td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Last Name
                </td>
                <td className="text-[#303135] text-sm font-semibold">
                  Lambert
                </td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Initials
                </td>
                <td className="text-[#303135] text-sm font-semibold">S. L.</td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Status
                </td>
                <td className="text-[#303135] text-sm font-semibold">Active</td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Job Title
                </td>
                <td className="text-[#303135] text-sm font-semibold">
                  HR Manager
                </td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Phone Number
                </td>
                <td className="text-[#303135] text-sm font-semibold">
                  0123 456 789
                </td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Email
                </td>
                <td className="text-[#303135] text-sm font-semibold">
                  slambert@mail.com
                </td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Gender
                </td>
                <td className="text-[#303135] text-sm font-semibold">Male</td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Date of birth
                </td>
                <td className="text-[#303135] text-sm font-semibold">-</td>
              </tr>
              <tr>
                <td className="text-[#71747D] text-sm font-medium py-2">
                  Owner
                </td>
                <td className="text-[#303135] text-sm font-semibold">
                  John Doe
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-4 border px-6 py-4 rounded-xl">
          <h1 className="pb-4">Company</h1>
          <div className="flex items-center gap-2">
            <div className="rounded-full border w-10 h-10 flex items-center justify-center">
              <img className="max-w-full" src="/img/Frame 37827.png" alt="" />
            </div>
            <div className="text-[#303135] text-sm">
              <h1 className="font-semibold">Company Z</h1>
              <p className="font-medium">Relation</p>
            </div>
          </div>
          <div className="text-[#71747D] text-sm font-medium mt-3 space-y-1">
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.6666 4.6665L8.68665 8.4665C8.48083 8.59545 8.24286 8.66384 7.99998 8.66384C7.7571 8.66384 7.51913 8.59545 7.31331 8.4665L1.33331 4.6665M2.66665 2.6665H13.3333C14.0697 2.6665 14.6666 3.26346 14.6666 3.99984V11.9998C14.6666 12.7362 14.0697 13.3332 13.3333 13.3332H2.66665C1.93027 13.3332 1.33331 12.7362 1.33331 11.9998V3.99984C1.33331 3.26346 1.93027 2.6665 2.66665 2.6665Z"
                    stroke="#71747D"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>pjohn123@mail.com</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1192_4472)">
                    <path
                      d="M14.6666 11.2802V13.2802C14.6674 13.4659 14.6294 13.6497 14.555 13.8198C14.4806 13.9899 14.3715 14.1426 14.2347 14.2681C14.0979 14.3937 13.9364 14.4892 13.7605 14.5487C13.5846 14.6082 13.3982 14.6303 13.2133 14.6136C11.1619 14.3907 9.19131 13.6897 7.45998 12.5669C5.84919 11.5433 4.48353 10.1777 3.45998 8.56689C2.33329 6.8277 1.63214 4.84756 1.41331 2.78689C1.39665 2.60254 1.41856 2.41673 1.47764 2.24131C1.53673 2.06589 1.63169 1.90469 1.75649 1.76797C1.88128 1.63126 2.03318 1.52203 2.2025 1.44724C2.37183 1.37245 2.55487 1.33374 2.73998 1.33356H4.73998C5.06351 1.33038 5.37717 1.44495 5.62248 1.65592C5.8678 1.86689 6.02803 2.15986 6.07331 2.48023C6.15772 3.12027 6.31428 3.74871 6.53998 4.35356C6.62967 4.59218 6.64908 4.8515 6.59591 5.10081C6.54274 5.35012 6.41922 5.57897 6.23998 5.76023L5.39331 6.60689C6.34235 8.27592 7.72428 9.65786 9.39331 10.6069L10.24 9.76023C10.4212 9.58099 10.6501 9.45746 10.8994 9.40429C11.1487 9.35112 11.408 9.37053 11.6466 9.46023C12.2515 9.68593 12.8799 9.84248 13.52 9.92689C13.8438 9.97258 14.1396 10.1357 14.351 10.3852C14.5624 10.6348 14.6748 10.9533 14.6666 11.2802Z"
                      stroke="#71747D"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1192_4472">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>0987 654 321</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1192_4486)">
                    <path
                      d="M14.6666 8.00016C14.6666 11.6821 11.6819 14.6668 7.99998 14.6668M14.6666 8.00016C14.6666 4.31826 11.6819 1.3335 7.99998 1.3335M14.6666 8.00016H1.33331M7.99998 14.6668C4.31808 14.6668 1.33331 11.6821 1.33331 8.00016M7.99998 14.6668C6.28814 12.8694 5.33331 10.4823 5.33331 8.00016C5.33331 5.51799 6.28814 3.13093 7.99998 1.3335M7.99998 14.6668C9.71182 12.8694 10.6666 10.4823 10.6666 8.00016C10.6666 5.51799 9.71182 3.13093 7.99998 1.3335M1.33331 8.00016C1.33331 4.31826 4.31808 1.3335 7.99998 1.3335"
                      stroke="#71747D"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1192_4486">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>company.com</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.3334 6.66683C13.3334 10.6668 8.00002 14.6668 8.00002 14.6668C8.00002 14.6668 2.66669 10.6668 2.66669 6.66683C2.66669 5.25234 3.22859 3.89579 4.22878 2.89559C5.22898 1.8954 6.58553 1.3335 8.00002 1.3335C9.41451 1.3335 10.7711 1.8954 11.7713 2.89559C12.7715 3.89579 13.3334 5.25234 13.3334 6.66683Z"
                    stroke="#71747D"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.00002 8.66683C9.10459 8.66683 10 7.7714 10 6.66683C10 5.56226 9.10459 4.66683 8.00002 4.66683C6.89545 4.66683 6.00002 5.56226 6.00002 6.66683C6.00002 7.7714 6.89545 8.66683 8.00002 8.66683Z"
                    stroke="#71747D"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Amsterdam</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 border px-6 py-4 rounded-xl">
          <h1 className="pb-4">Recent Activity</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#303135] text-sm font-semibold">Today</h1>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#303135] text-sm font-medium">
                  John Doe change the status into Active
                </h2>
                <p className="text-[#71747D] text-xs">12:48</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#303135] text-sm font-semibold">
                Yesterday
              </h1>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#303135] text-sm font-medium">
                  John Doe archived this contact with status Not Active
                </h2>
                <p className="text-[#71747D] text-xs">21:43</p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#303135] text-sm font-medium">
                  John Doe created the contact
                </h2>
                <p className="text-[#71747D] text-xs">12:48</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
