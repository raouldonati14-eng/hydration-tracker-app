import React from "react";

export default function HydrationTable({ hydrationData }) {
  return (
    <div className="HydrationTable" style={{ marginTop: "20px" }}>
      <h3>Weekly Hydration Log</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Day</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Water Intake (oz)</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(hydrationData).map(([day, entry]) => (
            <tr key={day}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{day}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{entry.water || "-"}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{entry.notes || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
