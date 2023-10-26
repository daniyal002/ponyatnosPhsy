import React from 'react';
import Avatar from './components/Avatar/Avatar';
import ProfileData from './components/ProfileData/ProfileData';
import BookingSetings from './components/BookingSetings/BookingSetings';
import Calendar from './components/Calendar/Calendar';

const ProfilePsychologist = () => {
  return (
    <div className="flex bg-[#73d09496] p-3 justify-around">
      <Avatar />
      <ProfileData />
      <Calendar />
    </div>
  );
};

export default ProfilePsychologist;
