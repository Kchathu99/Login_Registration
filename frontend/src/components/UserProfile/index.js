import React from 'react';
import './profile.css';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div>
        <strong>First Name:</strong>
      </div>
      <div>
        <strong>Last Name:</strong> 
      </div>
      <div>
        <strong>Email:</strong>
      </div>
    </div>
  );
};

export default UserProfile;
