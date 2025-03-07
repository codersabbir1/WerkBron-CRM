import React from "react";

interface User {
  jobNumber: string;
  position: string;
  status: string;
  employeeType: string;
  recruitmentMethod: string;
  owner: string;
}

const userData: User[] = [
  {
    jobNumber: "#123456",
    position: "Project Leader",
    status: "Architecture",
    employeeType: "Full time",
    recruitmentMethod: "Recruitment",
    owner: "John Doe",
  },
  {
    jobNumber: "#123456",
    position: "Project Leader",
    status: "Architecture",
    employeeType: "Full time",
    recruitmentMethod: "Recruitment",
    owner: "John Doe",
  },
  {
    jobNumber: "#123456",
    position: "Project Leader",
    status: "Architecture",
    employeeType: "Full time",
    recruitmentMethod: "Recruitment",
    owner: "John Doe",
  },
  {
    jobNumber: "#123456",
    position: "Project Leader",
    status: "Architecture",
    employeeType: "Full time",
    recruitmentMethod: "Recruitment",
    owner: "John Doe",
  },
  {
    jobNumber: "#123456",
    position: "Project Leader",
    status: "Architecture",
    employeeType: "Full time",
    recruitmentMethod: "Recruitment",
    owner: "John Doe",
  },
];

const TableBody: React.FC = () => {
  return (
    <tbody className="text-[#303135] text-sm">
      {userData.map((user, index) => (
        <tr key={index} className="border-b">
          <td className="p-4">{user.jobNumber}</td>
          <td colSpan={2} className="p-4">
            {user.position}
          </td>
          <td className="p-4">{user.status}</td>
          <td className="p-4">{user.employeeType}</td>
          <td colSpan={2} className="p-4">
            {user.recruitmentMethod}
          </td>
          <td className="p-4">{user.owner}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
