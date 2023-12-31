import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserInfosContext } from "../../context/UserInfosContext";
import { UserInfosAbout, UserDoesNotExist } from "../../components";
import { UserSimpleData } from "../../types/user";
import { motion } from "framer-motion";
import "./UserInfos.scss";

const UserInfos = () => {
  const { id: targetUsername } = useParams();
  const userInfosContext = useContext(UserInfosContext);

  if (!userInfosContext || !userInfosContext.data) {
    return null;
  }

  const { data } = userInfosContext;

  const filteredUser = data.find(
    (obj: UserSimpleData) => obj.login.username === targetUsername
  );

  return (
    <section id="profile" className="profile">
      <Link to="../">
        <button className="button-home">Back</button>
      </Link>
      <header className="profile-main-infos">
        {filteredUser ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}>
              <img
                src={filteredUser?.picture?.large}
                alt="profile-picture"
                className="profile-image"
              />
            </motion.div>
            <h2 className="profile-name">
              {filteredUser?.name?.first} {filteredUser?.name?.last}
            </h2>
            <p className="profile-title">{filteredUser?.name?.title}</p>
          </>
        ) : (
          <UserDoesNotExist />
        )}
      </header>{" "}
      <div className="profile-bar" />
      {filteredUser && <UserInfosAbout filteredUser={filteredUser} />}
    </section>
  );
};

export default UserInfos;
