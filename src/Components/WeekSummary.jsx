import React from "react";

export default function WeekSummary({
  screenData = {},
  completionPoints = 0
}) {
  const entries = Object.values(screenData || {});

  if (entries.length === 0) {
    return <p>No data yet for this week.</p>;
  }

  const completedDays = entries.filter(
    entry => entry?.hours || entry?.notes
  ).length;

  const avgHours =
    completedDays > 0
      ? (
          entries.reduce(
            (sum, entry) => sum + Number(entry?.hours || 0),
            0
          ) / entries.length
        ).toFixed(1)
      : "-";

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Weekly Summary</h3>

      <p>
        <strong>Days Completed:</strong> {completedDays} / 5
      </p>

      <p>
        <strong>Average Screen Time:</strong> {avgHours} hrs/day
      </p>

      <p>
        <strong>Completion Points:</strong> {completionPoints} / 10
      </p>

      <p style={{ fontStyle: "italic", marginTop: "10px" }}>
        This challenge is about awareness and balance — not perfection.
      </p>
    </div>
  );
}