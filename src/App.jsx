import React, { useState } from "react";
import Calendar from "./Calendar";

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Calendar Picker</h2>
      <Calendar onDateSelect={setSelectedDate} />
      <h3>
        Selected Date:{" "}
        {selectedDate ? selectedDate.toDateString() : "No date selected"}
      </h3>
    </div>
  );
}

export default App;
