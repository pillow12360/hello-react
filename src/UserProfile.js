import React from "react";

const UserProfile = ({ username, avatar }) => {
  return (
    <div>
      <h2>{username}님</h2>
      <p>{avatar}</p>
    </div>
  );
};

export default UserProfile;
