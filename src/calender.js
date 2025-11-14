import React, { useState } from "react";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildMonthMatrix(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);

  const totalDays = new Date(year, month + 1, 0).getDate();
  const weeks = Array(firstDay.getDay()).fill(null);

  for (let d = 1; d <= totalDays; d++) {
    weeks.push(d);
  }

  return weeks;
}

const Calendar = ({ date }) => {
  const weeks = buildMonthMatrix(date);

  const [selectedDay, setSelectedDay] = useState(date.getDate());

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {date.toLocaleString(undefined, { month: "long" })} {date.getFullYear()}
      </div>

      <div className="calendar-day-names">
        {dayNames.map((dn) => (
          <div key={dn} className="day-name">
            {dn}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {weeks.flat().map((cell, idx) => {
          const isSelected = cell === selectedDay;
          return (
            <div
              key={idx}
              className={`calendar-cell ${!cell ? "empty" : ""} ${
                isSelected ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedDay(cell);
              }}
            >
              {cell || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
