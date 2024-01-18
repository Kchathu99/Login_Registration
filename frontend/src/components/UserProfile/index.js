import React from 'react';
import './profile.css';

const UserProfile = ({ firstName, lastName, email }) => {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div>
        <strong>First Name:</strong> {firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {lastName}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
    </div>
  );
};

export default UserProfile;
