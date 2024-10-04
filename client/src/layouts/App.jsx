import React, { useState } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

const App = () => {
  const [guestPhoto, setGuestPhoto] = useState(null);

  const handlePhotoUpdate = (newPhoto) => {
    setGuestPhoto(newPhoto); // Update the guest photo state when changed
  };

  return (
    <div>
      <Navbar guestPhoto={guestPhoto} />
      <Profile onPhotoUpdate={handlePhotoUpdate} />
    </div>
  );
};

export default App;
