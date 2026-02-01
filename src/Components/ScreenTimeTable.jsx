import React from "react";

export default function ScreenTimeTable({ screenData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Screen Time (hrs)</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(screenData).map(([day, entry]) => (
          <tr key={day}>
            <td>{day}</td>
            <td>{entry.hours || "-"}</td>
            <td>{entry.notes || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
