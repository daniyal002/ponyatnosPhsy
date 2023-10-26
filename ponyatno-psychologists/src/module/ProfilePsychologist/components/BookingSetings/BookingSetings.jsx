import React from 'react';

const BookingSetings = () => {
  return (
    <div>
      <form>
        <div>
          <h3>Понедельник</h3>
          <div>
            <label htmlFor="timeFromMonday">Время от</label>
            <input type="time" id="timeFromMonday" />
          </div>

          <div>
            <label htmlFor="timeToMonday">Время до</label>
            <input type="time" id="timeToMonday" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingSetings;
