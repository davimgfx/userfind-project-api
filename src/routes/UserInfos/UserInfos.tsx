import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserInfosContext } from "../../context/UserInfosContext";
import { UserInfosAbout } from "../../components";

import "./UserInfos.scss";
const UserInfos = () => {
  const { id: targetUsername } = useParams();
  const userInfosContext = useContext(UserInfosContext);
  const { data: usersList } = userInfosContext;

  const filteredUser = usersList.find(
    (obj) => obj.login.username === targetUsername
  );

  return (
    <section id="profile" className="profile">
      <Link to="../">
        <button className="button-home">Back</button>
      </Link>
      <header className="profile-main-infos">
        <img
          src={filteredUser?.picture?.large}
          alt="profile-picture"
          className="profile-image"
        />

        <h2 className="profile-name">
          {filteredUser?.name?.first} {filteredUser?.name?.last}
        </h2>
        <p className="profile-title">{filteredUser?.name?.title}</p>
      </header>{" "}
      <div className="profile-bar" />
      <UserInfosAbout filteredUser={filteredUser} />
    </section>
  );
};

export default UserInfos;
