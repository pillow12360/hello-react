import React from "react";

const MessageCard = ({ message, userProfile }) => {
  return (
    <div>
      {userProfile}
      <p>{message}</p>
    </div>
  );
};

export default MessageCard;
