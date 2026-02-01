import React, { useState } from "react";
import "./styles/app.css";

// Components
import Header from "./Components/Header";
import StudentInfo from "./Components/StudentInfo";
import MoodEntry from "./Components/MoodEntry";
import MoodTable from "./Components/MoodTable";
import WeekSummary from "./Components/WeekSummary";

// Week template
import weekTemplate from "./data/WeekTemplate";

function App() {
  // -------------------------------
  // State
  // -------------------------------
  const [studentName, setStudentName] = useState("");
  const [moodData, setMoodData] = useState({ ...weekTemplate });
  const [selectedDay, setSelectedDay] = useState("Day 1");

  // -------------------------------
  // Download CSV Function
  // -------------------------------
  function downloadMoodCSV() {
    const rows = [["Student", "Day", "Mood", "Emotion", "Stress", "Notes"]];
    Object.entries(moodData).forEach(([day, entry]) => {
      rows.push([
        studentName || "Unknown",
        day,
        entry.mood || "",
        entry.emotion || "",
        entry.stress || "",
        entry.notes || ""
      ]);
    });

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(r => r.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "weekly_mood_journal.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // -------------------------------
  // Calculate Completion Points
  // -------------------------------
  function calculateCompletionPoints() {
    const totalDays = Object.keys(moodData).length;
    const completedDays = Object.values(moodData).filter(
      (entry) => entry.mood || entry.emotion || entry.stress || entry.notes
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

      <MoodEntry
        moodData={moodData}
        setMoodData={setMoodData}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <MoodTable moodData={moodData} />

      <WeekSummary
        moodData={moodData}
        completionPoints={calculateCompletionPoints()}
      />

      {/* Download CSV Button */}
      <div className="download-section" style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={downloadMoodCSV}
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