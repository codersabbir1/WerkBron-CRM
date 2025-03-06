import React from "react";

const UserInfo: React.FC = () => {
  return (
    <div>
      <div className="p-6 w-full flex gap-4 justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            className="w-10 h-10 rounded-full overflow-hidden"
            src="/img/Ellipse.png"
            alt=""
          />
          <div className="text-[#111827]">
            <h1 className="text-lg font-semibold">Steven Lambert</h1>
            <p className="text-sm font-medium">HR Manager</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3.00024H5C4.46957 3.00024 3.96086 3.21096 3.58579 3.58603C3.21071 3.9611 3 4.46981 3 5.00024V19.0002C3 19.5307 3.21071 20.0394 3.58579 20.4145C3.96086 20.7895 4.46957 21.0002 5 21.0002H19C19.5304 21.0002 20.0391 20.7895 20.4142 20.4145C20.7893 20.0394 21 19.5307 21 19.0002V12.0002M18.3751 2.62523C18.7729 2.2274 19.3125 2.00391 19.8751 2.00391C20.4377 2.00391 20.9773 2.2274 21.3751 2.62523C21.7729 3.02305 21.9964 3.56262 21.9964 4.12523C21.9964 4.68784 21.7729 5.2274 21.3751 5.62523L12.3621 14.6392C12.1246 14.8765 11.8313 15.0501 11.5091 15.1442L8.63609 15.9842C8.55004 16.0093 8.45883 16.0108 8.372 15.9886C8.28517 15.9663 8.20592 15.9212 8.14254 15.8578C8.07916 15.7944 8.03398 15.7151 8.01174 15.6283C7.98949 15.5415 7.991 15.4503 8.01609 15.3642L8.85609 12.4912C8.95062 12.1693 9.12463 11.8763 9.36209 11.6392L18.3751 2.62523Z"
              stroke="#71747D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 8V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V8M10 12H14M3 3H21C21.5523 3 22 3.44772 22 4V7C22 7.55228 21.5523 8 21 8H3C2.44772 8 2 7.55228 2 7V4C2 3.44772 2.44772 3 3 3Z"
              stroke="#71747D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
