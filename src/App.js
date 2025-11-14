import "./styles.css";
import React from "react";
import Calendar from "./calender";

export default function App() {
  return (
    <div className="App">
      <h1>Calendar</h1>
      <Calendar date={new Date()} />
      <Calendar
        date={
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate()
          )
        }
      />
    </div>
  );
}
