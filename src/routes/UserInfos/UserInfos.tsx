import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserInfosContext } from "../../context/UserInfosContext";
import { UserInfosAbout, UserDoesNotExist } from "../../components";
import { UserSimpleData } from "../../types/user";

import "./UserInfos.scss";

const UserInfos = () => {
  const { id: targetUsername } = useParams();
  const userInfosContext = useContext(UserInfosContext);

  if (!userInfosContext) {
    return null;
  }

  const { data: usersList } = userInfosContext;

  const filteredUser = usersList.find(
    (obj: UserSimpleData) => obj.login.username === targetUsername
  );
  console.log(filteredUser);
  return (
    <section id="profile" className="profile">
      <Link to="../">
        <button className="button-home">Back</button>
      </Link>
      <header className="profile-main-infos">
        {filteredUser ? (
          <>
            <img
              src={filteredUser?.picture?.large}
              alt="profile-picture"
              className="profile-image"
            />

            <h2 className="profile-name">
              {filteredUser?.name?.first} {filteredUser?.name?.last}
            </h2>
            <p className="profile-title">{filteredUser?.name?.title}</p>
          </>
        ) : (<UserDoesNotExist />)}
      </header>{" "}
      <div className="profile-bar" />
      {filteredUser && <UserInfosAbout filteredUser={filteredUser} />}
    </section>
  );
};

export default UserInfos;
