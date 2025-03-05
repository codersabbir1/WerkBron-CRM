import React from "react";

interface User {
  img: string;
  fullName: string;
  status: string;
  jobTitle: string;
  company: string;
  phone: string;
  email: string;
  owner: string;
}

const userData: User[] = [
  {
    img: "/img/Ellipse.png",
    fullName: "Steven Lambert",
    status: "Active",
    jobTitle: "HR Manager",
    company: "Company A",
    phone: "0123 456 789",
    email: "slambert@mail.com",
    owner: "John Doe",
  },
  {
    img: "/img/Ellipse.png",
    fullName: "Steven Lambert",
    status: "On Leave",
    jobTitle: "HR Manager",
    company: "Company A",
    phone: "0123 456 789",
    email: "slambert@mail.com",
    owner: "John Doe",
  },
  {
    img: "/img/Ellipse.png",
    fullName: "Steven Lambert",
    status: "Sick",
    jobTitle: "HR Manager",
    company: "Company A",
    phone: "0123 456 789",
    email: "slambert@mail.com",
    owner: "John Doe",
  },
  {
    img: "/img/Ellipse.png",
    fullName: "Steven Lambert",
    status: "Active",
    jobTitle: "HR Manager",
    company: "Company A",
    phone: "0123 456 789",
    email: "slambert@mail.com",
    owner: "John Doe",
  },
  {
    img: "/img/Ellipse.png",
    fullName: "Steven Lambert",
    status: "On Leave",
    jobTitle: "HR Manager",
    company: "Company A",
    phone: "0123 456 789",
    email: "slambert@mail.com",
    owner: "John Doe",
  },
  {
    img: "/img/Ellipse.png",
    fullName: "Steven Lambert",
    status: "Sick",
    jobTitle: "HR Manager",
    company: "Company A",
    phone: "0123 456 789",
    email: "slambert@mail.com",
    owner: "John Doe",
  },
];

const TableBody: React.FC = () => {
  return (
    <tbody className="text-[#303135] text-sm">
      {userData.map((user, index) => (
        <tr key={index} className="border-b">
          <td className="p-4">
            <div className="flex items-center gap-2">
              <img
                className="rounded-full w-8 h-8"
                src={user.img}
                alt={user.fullName}
              />
              <span>{user.fullName}</span>
            </div>
          </td>
          <td className="p-4">{user.status}</td>
          <td className="p-4">{user.jobTitle}</td>
          <td className="p-4">{user.company}</td>
          <td className="p-4">{user.phone}</td>
          <td className="p-4">{user.email}</td>
          <td className="p-4">{user.owner}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
