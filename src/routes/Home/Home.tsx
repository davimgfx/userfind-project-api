import { useContext, useState, ChangeEvent } from "react";
import { Header, UserTable, TableLoading } from "../../components";
import "./Home.scss";
import { motion } from "framer-motion";

import { UserInfosContext } from "../../context/UserInfosContext";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const userInfosContext = useContext(UserInfosContext);

  if (!userInfosContext || !userInfosContext.data) {
    return null;
  }

  const { isLoading, error, data } = userInfosContext;

  if (error) {
    alert(`Some error happend ${error.message}`);
  }

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

  const users = data || [];

  const filteredUsers = Array.isArray(users)
    ? users.filter((user) =>
        `${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(searchField)
      )
    : [];

  return (
    <section id="home">
      <Header onChangeHandler={onSearchChange} />
      {isLoading ? (
        <TableLoading />
      ) : (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1 }}>
          <UserTable filteredUsers={filteredUsers} />
        </motion.div>
      )}
    </section>
  );
};

export default Home;
