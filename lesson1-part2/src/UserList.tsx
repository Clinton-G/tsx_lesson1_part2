import React from 'react';

const UserList: React.FC = () => {
  const users = [
    { name: 'John', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'David', age: 35 },
  ];

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
