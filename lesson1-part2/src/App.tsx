import React from 'react';
import ColorList from './ColorList';
import EvenNumbers from './EvenNumbers';
import UserList from './UserList';

const App: React.FC = () => {
  return (
    <div>
      <ColorList />
      <EvenNumbers />
      <UserList />
    </div>
  );
};

export default App;
