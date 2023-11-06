import React, { useState } from 'react';
import Avatar from './components/Avatar/Avatar';
import ProfileData from './components/ProfileData/ProfileData';
import BookingSetings from './components/BookingSetings/BookingSetings';
import Calendar from './components/Calendar/Calendar';

const ProfilePsychologist = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-[#73d09496] p-3 ">
      <Avatar />
      <div className="flex flex-col">
        <button className="btn-default" onClick={() => setOpen(true)}>
          Настройки Профиля
        </button>
        <button className="btn-default" onClick={() => setOpen(false)}>
          Настройки рабочего времени
        </button>
      </div>

      {open ? <ProfileData /> : <BookingSetings />}
    </div>
  );
};

export default ProfilePsychologist;
