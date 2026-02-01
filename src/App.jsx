import React, { useState } from "react";
import "./styles/app.css";

import Header from "./Components/Header";
import StudentInfo from "./Components/StudentInfo";
import ScreenTimeEntry from "./Components/ScreenTimeEntry";
import ScreenTimeTable from "./Components/ScreenTimeTable";
import WeekSummary from "./Components/WeekSummary"; // ✅ Make sure this matches filename

import weekTemplate from "./data/WeekTemplate";

function App() {
  const [studentName, setStudentName] = useState("");
  const [screenData, setScreenData] = useState({ ...weekTemplate });
  const [selectedDay, setSelectedDay] = useState("Day 1");

  // CSV DOWNLOAD ✅
  function downloadCSV() {
    const rows = [["Student", "Day", "Screen Time (hrs)", "Notes"]];

    Object.entries(screenData).forEach(([day, entry]) => {
      rows.push([
        studentName || "Unknown",
        day,
        entry.hours || "",
        entry.notes || ""
      ]);
    });

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map(r => r.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "screen_time_challenge.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function calculateCompletionPoints() {
    const completed = Object.values(screenData).filter(
      e => e.hours || e.notes
    ).length;

    return ((completed / 5) * 10).toFixed(1);
  }
const completionPoints = calculateCompletionPoints();
  return (
    <div className="app">
      <Header />
      <StudentInfo studentName={studentName} setStudentName={setStudentName} />

      <ScreenTimeEntry
        screenData={screenData}
        setScreenData={setScreenData}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <ScreenTimeTable screenData={screenData} />

     <WeekSummary
  screenData={screenData}
  completionPoints={calculateCompletionPoints()}
/>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={downloadCSV}>
          Download CSV
        </button>
      </div>
    </div>
  );
}

export default App;
