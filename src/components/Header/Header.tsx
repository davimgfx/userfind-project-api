import React, { useState } from "react";
import "./Header.scss";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["randomUsers"],
    queryFn: () =>
      fetch("https://randomuser.me/api/?results=50").then((res) => res.json()),
  });
  
  const [usersList, setUsersList] = useState([]);
  const [searchField, setSearchField] = useState("");

  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  const { results: users } = data;

  if (data && usersList.length === 0) {
    setUsersList(users);
  }

  const filteredUsers = usersList.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <header className="header">
        <h2 className="header-title">List Users</h2>
        <input
          type="text"
          placeholder="Search user..."
          className="header-search-bar"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <div className="header-bar" />
      </header>

      <main>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p>Email: {user.email}</p>
            <img src={user.picture.medium} alt={`User ${index + 1}`} />
          </li>
        ))}
      </main>
    </>
  );
};

export default Header;
