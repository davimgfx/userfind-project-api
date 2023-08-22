import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header, UserTable, TableLoading } from "../../components";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const { isLoading, error, data } = useQuery(["randomUsers"], () =>
    fetch("https://randomuser.me/api/?results=50").then((res) => res.json())
  );

  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

  if (error) return `An error has occurred: ${error.message}`;

  const users = data?.results || [];

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchField)
  );

  return (
    <section id="home">
      <Header onChangeHandler={onSearchChange} />
      {isLoading ? (
        <TableLoading />
      ) : (
        <>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}>
            <UserTable filteredUsers={filteredUsers} />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Home;
