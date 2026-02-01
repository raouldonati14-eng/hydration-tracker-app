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
  const [studentName, setStudentName] = useState("");
  const [moodData, setMoodData] = useState({ ...weekTemplate });
  const [selectedDay, setSelectedDay] = useState("Day 1");

  // Calculate completion points out of 10
  function calculateCompletionPoints() {
    const totalDays = Object.keys(moodData).length;
    const completedDays = Object.values(moodData).filter(
      (entry) => entry.mood || entry.emotion || entry.stress || entry.notes
    ).length;

    return ((completedDays / totalDays) * 10).toFixed(1);
  }

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
    </div>
  );
}

export default App;