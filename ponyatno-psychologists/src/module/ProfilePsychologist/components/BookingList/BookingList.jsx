import React, { useEffect } from "react";
import { useGetBookingList } from "../../hook/useGetBookingList";
import { useGetProfileById } from "../../hook/useGetProfileById";

const BookingList = () => {
  const { data: getProfile } = useGetProfileById();
  const { data } = useGetBookingList();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            {getProfile.userRole === "User" ? (
              <th className="py-2 px-4">Имя психолога</th>
            ) : (
              <th className="py-2 px-4">Имя пациента</th>
            )}
            {getProfile.userRole === "User" ? (
              <th className="py-2 px-4">Фамилия психолога</th>
            ) : (
              <th className="py-2 px-4">Фамилия пациента</th>
            )}
            {getProfile.userRole === "Psychologists" && (
              <th className="py-2 px-4">Телефон</th>
            )}
            <th className="py-2 px-4">Дата</th>
            <th className="py-2 px-4">Время начала</th>
            <th className="py-2 px-4">Время окончания</th>
            <th className="py-2 px-4">Способ связи</th>
          </tr>
        </thead>
        <tbody>
          {getProfile.userRole === "User"
            ? data &&
              data.$values.map((booking, index) => (
                <tr key={index}>
                  <td className="border py-2 px-4">
                    {booking.bookingPsychologistName}
                  </td>
                  <td className="border py-2 px-4">
                    {booking.bookingPsychologistLastName}
                  </td>

                  <td className="border py-2 px-4">
                    {formatDate(booking.bookingDay)}
                  </td>
                  <td className="border py-2 px-4">{booking.startTime}</td>
                  <td className="border py-2 px-4">{booking.endTime}</td>
                  <td className="border py-2 px-4">
                    {booking.communicationMethod}
                  </td>
                </tr>
              ))
            : getProfile &&
              getProfile.bookingsDto.$values.map((booking, index) => (
                <tr key={index}>
                  <td className="border py-2 px-4">
                    {booking.bookingClientName}
                  </td>
                  <td className="border py-2 px-4">
                    {booking.bookingClientLastName}
                  </td>
                  <td className="border py-2 px-4">
                    {booking.bookingClientPhone}
                  </td>
                  <td className="border py-2 px-4">
                    {formatDate(booking.bookingDay)}
                  </td>
                  <td className="border py-2 px-4">{booking.startTime}</td>
                  <td className="border py-2 px-4">{booking.endTime}</td>
                  <td className="border py-2 px-4">
                    {booking.communicationMethod}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
