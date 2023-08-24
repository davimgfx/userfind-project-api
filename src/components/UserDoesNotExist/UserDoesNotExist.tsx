import "./UserDoesNotExist.scss";

const UserDoesNotExist = () => {
  return (
    <>
      <div className="empty-image" />
      <h2 className="name-do-not-find">User not found or doesn't exist</h2>
      <p className="title-do-not-find">Try another user</p>
    </>
  );
};

export default UserDoesNotExist;
