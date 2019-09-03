import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('./api/v1/users').then(({ data: { list } }) => setUsers(list));
  }, []);

  return (
    <div>
      <h1>Hello, React.</h1>
      <p>User List</p>
      {users.map(user => (
        <p key={user.id}>{user.id}: {user.name}（{user.age}）</p>
      ))}
    </div>
  );
}
