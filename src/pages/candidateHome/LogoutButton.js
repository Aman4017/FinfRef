import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const LogoutButton = () => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  return (
    <div className="logout-button">
      <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
