import React, { useState } from "react";
import ProfileData from "./components/ProfileData/ProfileData";
import BookingSetings from "./components/BookingSetings/BookingSetings";
import Sidebar from "./components/Sidebar/Sidebar";

const ProfilePsychologist = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-[#73d09496] justify-between ">
      <Sidebar open={open} setOpen={setOpen} />

      {open ? <ProfileData /> : <BookingSetings />}
    </div>
  );
};

export default ProfilePsychologist;
