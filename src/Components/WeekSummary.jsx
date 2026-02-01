import React from "react";

export default function WeekSummary({ hydrationData, completionPoints }) {
  const entries = Object.values(hydrationData);

  const completedDays = entries.filter(
    (entry) => entry.water || entry.notes
  ).length;

  const totalWater = entries
    .map((e) => Number(e.water))
    .filter((w) => !isNaN(w))
    .reduce((a, b) => a + b, 0);

  const avgWater =
    completedDays > 0
      ? (totalWater / completedDays).toFixed(1)
      : "-";

  return (
    <div className="WeekSummary">
      <h3>Weekly Hydration Summary</h3>

      <p>
        <strong>Days Logged:</strong> {completedDays} / 5
      </p>

      <p>
        <strong>Average Water Intake:</strong> {avgWater} oz per day
      </p>

      <p>
        <strong>Completion Score:</strong> {completionPoints} / 10
      </p>

      <p style={{ marginTop: "10px", fontStyle: "italic" }}>
        Hydration builds awareness and healthy habits — consistency matters more than perfection.
      </p>
    </div>
  );
}
