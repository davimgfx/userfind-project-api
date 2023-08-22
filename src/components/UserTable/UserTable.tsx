import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserTableInfos } from "../../types/user";
import "./UserTable.scss";

type UserTableInfosProps = {
  filteredUsers: UserTableInfos[];
};

const UserTable: React.FC<UserTableInfosProps> = ({ filteredUsers }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  function formatDate(inputDate: string): string {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <main className="users-infos">
      <table className="users-infos-table">
        <thead className="users-infos-table-title">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="users-infos-table-body">
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.login.uuid}</td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.name.title}</td>
              <td>{formatDate(user.registered.date)}</td>
              <td>{user.dob.age}</td>
              <td>
                <Link
                  to={`${user.login.username}`}
                  className="users-infos-table-body-view-profile">
                  View Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="navigation-buttons">
        {/* navigation right button */}
        <button className="navigation-button" onClick={goToPreviousPage}>
          &lt;
        </button>
        {Array.from({
          length: Math.ceil(filteredUsers.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`${
              currentPage === index + 1 ? "active" : ""
            } navigation-button`}>
            {index + 1}
          </button>
        ))}
        {/* navigation left button */}
        <button className="navigation-button" onClick={goToNextPage}>
          &gt;
        </button>
      </div>
    </main>
  );
};

export default UserTable;
