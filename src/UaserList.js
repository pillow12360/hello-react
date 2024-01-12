import React, { useEffect, useState } from "react";

const UaserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("에러");
        }
        return res.json();
      })
      .then((data) => {
        const data2 = data.map((a) => (a.name += "병신"));
        return data2;
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default UaserList;
