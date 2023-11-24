import React, { useState } from "react";
import ProfileData from "./components/ProfileData/ProfileData";
import BookingSetings from "./components/BookingSetings/BookingSetings";
import BookingList from "./components/BookingList/BookingList";
import { useGetProfileById } from "./hook/useGetProfileById";

const ProfilePsychologist = () => {
  const [openBookingSetings, setOpenBookingSetings] = useState(false);
  const [openProfile, setOpenProfile] = useState(true);
  const [openBookingList, setOpenBookingList] = useState(false);
  const { data } = useGetProfileById();

  if (openBookingSetings && data && data.userRole !== "User") {
    return (
      <div className="flex  flex-col justify-between ">
        {/* <Sidebar open={open} setOpen={setOpen} /> */}
        <div className="flex flex-col gap-x-3 gap-y-3 justify-center bg-[#004E64] p-3 md:flex-row">
          <button
            onClick={() => {
              setOpenProfile(true);
              setOpenBookingSetings(false);
              setOpenBookingList(false);
            }}
            className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
          >
            Профиль
          </button>
          {data.userRole !== "User" && (
            <button
              onClick={() => {
                setOpenProfile(false);
                setOpenBookingSetings(true);
                setOpenBookingList(false);
              }}
              className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
            >
              Настройка рабочего времени
            </button>
          )}
          <button
            onClick={() => {
              setOpenProfile(false);
              setOpenBookingSetings(false);
              setOpenBookingList(true);
            }}
            className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
          >
            {data.userRole !== "User"
              ? "Записи пациентов"
              : "Записи к психологу"}
          </button>
        </div>
        <BookingSetings />
      </div>
    );
  }

  if (openProfile && data) {
    return (
      <div className="flex  flex-col justify-between ">
        {/* <Sidebar open={open} setOpen={setOpen} /> */}
        <div className="flex flex-col gap-x-3 gap-y-3 justify-center bg-[#004E64] p-3 md:flex-row">
          <button
            onClick={() => {
              setOpenProfile(true);
              setOpenBookingSetings(false);
              setOpenBookingList(false);
            }}
            className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
          >
            Профиль
          </button>
          {data.userRole !== "User" && (
            <button
              onClick={() => {
                setOpenProfile(false);
                setOpenBookingSetings(true);
                setOpenBookingList(false);
              }}
              className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
            >
              Настройка рабочего времени
            </button>
          )}
          <button
            onClick={() => {
              setOpenProfile(false);
              setOpenBookingSetings(false);
              setOpenBookingList(true);
            }}
            className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
          >
             {data.userRole !== "User"
              ? "Записи пациентов"
              : "Записи к психологу"}
          </button>
        </div>
        <ProfileData />
      </div>
    );
  }

  if (openBookingList && data) {
    return (
      <div className="flex  flex-col justify-between ">
        {/* <Sidebar open={open} setOpen={setOpen} /> */}
        <div className="flex flex-col gap-x-3 gap-y-3 justify-center bg-[#004E64] p-3 md:flex-row">
          <button
            onClick={() => {
              setOpenProfile(true);
              setOpenBookingSetings(false);
              setOpenBookingList(false);
            }}
            className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
          >
            Профиль
          </button>
          {data.userRole !== "User" && (
            <button
              onClick={() => {
                setOpenProfile(false);
                setOpenBookingSetings(true);
                setOpenBookingList(false);
              }}
              className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
            >
              Настройка рабочего времени
            </button>
          )}
          <button
            onClick={() => {
              setOpenProfile(false);
              setOpenBookingSetings(false);
              setOpenBookingList(true);
            }}
            className="text-white bg-green-pon p-3 rounded-lg text-[18px] font-semibold"
          >
             {data.userRole !== "User"
              ? "Записи пациентов"
              : "Записи к психологу"}
          </button>
        </div>
        <BookingList />
      </div>
    );
  }
};

export default ProfilePsychologist;
