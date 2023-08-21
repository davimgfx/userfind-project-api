import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header, UserTable } from "../../components";
import "./Home.scss";

const Home = () => {
  const { isLoading, error, data } = useQuery(["randomUsers"], () =>
    fetch("https://randomuser.me/api/?results=50").then((res) => res.json())
  );

  const [searchField, setSearchField] = useState("");

  if (isLoading) return <div>...Loading</div>;

  if (error) return `An error has occurred: ${error.message}`;

  const { results: users } = data;

  console.log(users);

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchField)
  );

  return (
    <section id="home">
      <Header onChangeHandler={onSearchChange} />
      <UserTable filteredUsers={filteredUsers} />
    </section>
  );
};

export default Home;
