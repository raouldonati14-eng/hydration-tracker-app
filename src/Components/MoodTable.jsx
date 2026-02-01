import React from "react";

export default function MoodTable({ moodData }) {
  return (
    <div className="MoodTable">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Mood</th>
            <th>Emotion</th>
            <th>Stress</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(moodData).map(([day, entry]) => (
            <tr key={day}>
              <td>{day}</td>
              <td>{entry.mood || "-"}</td>
              <td>{entry.emotion || "-"}</td>
              <td>{entry.stress || "-"}</td>
              <td>{entry.notes || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}