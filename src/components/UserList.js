import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);

  return (
    <div>
      <h5>Active Users</h5>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
