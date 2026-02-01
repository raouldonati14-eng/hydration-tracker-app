import React, { useState } from "react";
import "./styles/app.css";

// Components
import Header from "./Components/Header";
import StudentInfo from "./Components/StudentInfo";
import HydrationEntry from "./Components/HydrationEntry";
import HydrationTable from "./Components/HydrationTable";
import WeekSummary from "./Components/WeekSummary";

// Week template
import weekTemplate from "./data/WeekTemplate";

function App() {
  // -------------------------------
  // State
  // -------------------------------
  const [studentName, setStudentName] = useState("");
  const [hydrationData, setHydrationData] = useState({ ...weekTemplate });
  const [selectedDay, setSelectedDay] = useState("Day 1");

  // -------------------------------
  // Download CSV Function
  // -------------------------------
  function downloadHydrationCSV() {
    const rows = [["Student", "Day", "Water Intake (oz)", "Notes"]];
    Object.entries(hydrationData).forEach(([day, entry]) => {
      rows.push([
        studentName || "Unknown",
        day,
        entry.water || "",
        entry.notes || ""
      ]);
    });

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(r => r.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "weekly_hydration_log.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // -------------------------------
  // Calculate Completion Points
  // -------------------------------
  function calculateCompletionPoints() {
    const totalDays = Object.keys(hydrationData).length;
    const completedDays = Object.values(hydrationData).filter(
      (entry) => entry.water || entry.notes
    ).length;

    return ((completedDays / totalDays) * 10).toFixed(1);
  }

  // -------------------------------
  // Render
  // -------------------------------
  return (
    <div className="app">
      <Header />
      <StudentInfo studentName={studentName} setStudentName={setStudentName} />

      <HydrationEntry
        hydrationData={hydrationData}
        setHydrationData={setHydrationData}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <HydrationTable hydrationData={hydrationData} />

      <WeekSummary
        hydrationData={hydrationData}
        completionPoints={calculateCompletionPoints()}
      />

      {/* Download CSV Button */}
      <div className="download-section" style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={downloadHydrationCSV}
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "6px",
            backgroundColor: "#1E90FF",
            color: "#fff",
            border: "none"
          }}
        >
          Download CSV
        </button>
      </div>
    </div>
  );
}

export default App;
