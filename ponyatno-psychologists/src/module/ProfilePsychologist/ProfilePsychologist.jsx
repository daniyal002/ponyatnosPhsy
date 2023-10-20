import React from 'react';
import Avatar from './components/Avatar/Avatar';
import ProfileData from './components/ProfileData/ProfileData';

const ProfilePsychologist = () => {
  return (
    <div className="flex bg-[#73d09496] p-3 justify-around">
      <Avatar />
      <ProfileData />
    </div>
  );
};

export default ProfilePsychologist;
