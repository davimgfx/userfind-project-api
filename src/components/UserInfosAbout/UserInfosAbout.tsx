import React, { useState } from "react";
import "./UserMoreInfos.scss";

const UserInfosAbout = ({ filteredUser }) => {
  const [activeTab, setActiveTab] = useState("info");
  console.log(filteredUser);
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  function formatDate(inputDate: string): string {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <main>

      <div className="user-about-options">
        <h2
          className={`user-about-option ${
            activeTab === "info" ? "activity-option" : ""
          }`}
          onClick={() => handleTabClick("info")}>
          Info
        </h2>
        <h2
          className={`user-about-option ${
            activeTab === "location" ? "activity-option" : ""
          }`}
          onClick={() => handleTabClick("location")}>
          Location
        </h2>
        <h2
          className={`user-about-option ${
            activeTab === "login" ? "activity-option" : ""
          }`}
          onClick={() => handleTabClick("login")}>
          Login
        </h2>
      </div>
      <section className="user-infos">
        {activeTab === "info" && (
          <>
            <div>
              <h2>First Name</h2> <p>{filteredUser.name.first}</p>
            </div>
            <div>
              <h2>Last Name</h2> <p>{filteredUser.name.last}</p>
            </div>
            <div>
              <h2>Email</h2> <p>{filteredUser.email}</p>
            </div>
            <div>
              <h2>Cell</h2> <p>{filteredUser.cell}</p>
            </div>
            <div>
              <h2>Gender</h2> <p>{filteredUser.gender}</p>
            </div>
          </>
        )}
        {activeTab === "location" && (
          <>
            <div>
              <h2>Country</h2> <p>{filteredUser.location.country}</p>
            </div>
            <div>
              <h2>City</h2> <p>{filteredUser.location.city}</p>
            </div>
            <div>
              <h2>State</h2> <p>{filteredUser.location.state}</p>
            </div>
            <div>
              <h2>Postcode</h2> <p>{filteredUser.location.postcode}</p>
            </div>
            <div>
              <h2>Street</h2>{" "}
              <p>
                {filteredUser.location.street.name}{" "}
                {filteredUser?.location?.street?.number}
              </p>
            </div>
          </>
        )}
        {activeTab === "login" && (
          <>
            <div>
              <h2>Create at</h2>
              <p>{formatDate(filteredUser.registered.date)}</p>
            </div>
            <div>
              <h2>Username</h2> <p>{filteredUser.login.username}</p>
            </div>
            <div>
              <h2>Password</h2> <p>{filteredUser.login.password}</p>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default UserInfosAbout;
