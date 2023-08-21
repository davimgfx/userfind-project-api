import "./UserTable.scss";
import { Link } from "react-router-dom";

const UserTable = ({ filteredUsers }) => {
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
          {filteredUsers.map((user, index) => (
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
    </main>
  );
};

export default UserTable;
