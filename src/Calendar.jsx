import React, { useState } from "react";

function Calendar({ onDateSelect }) {
  const [currentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++)
    days.push(new Date(year, month, i));

  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <h4>
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h4>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 40px)" }}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} style={{ fontWeight: "bold" }}>{d}</div>
        ))}

        {days.map((date, i) => (
          <button
            key={i}
            onClick={() => date && onDateSelect(date)}
            style={{
              height: "40px",
              border: "1px solid #ccc",
              background: date ? "white" : "transparent",
              cursor: date ? "pointer" : "default",
            }}
          >
            {date ? date.getDate() : ""}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
