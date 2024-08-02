import React from 'react';

interface UserProfileProps {
  name: string;
  age: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserProfile;
