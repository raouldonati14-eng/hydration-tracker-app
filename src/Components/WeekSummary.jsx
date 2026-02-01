import React from "react";

export default function WeekSummary({ moodData, completionPoints }) {
  const entries = Object.values(moodData);

  const completedDays = entries.filter(
    (entry) => entry.mood || entry.emotion || entry.stress || entry.notes
  ).length;

  const moods = entries
    .map((e) => Number(e.mood))
    .filter((m) => !isNaN(m));

  const avgMood =
    moods.length > 0
      ? (moods.reduce((a, b) => a + b, 0) / moods.length).toFixed(1)
      : "-";

  return (
    <div className="WeekSummary">
      <h3>Weekly Reflection Summary</h3>

      <p>
        <strong>Days Completed:</strong> {completedDays} / 5
      </p>

      <p>
        <strong>Average Mood Rating:</strong> {avgMood} / 5
      </p>

      <p>
        <strong>Completion Points:</strong> {completionPoints} / 10
      </p>

      <p style={{ marginTop: "10px", fontStyle: "italic" }}>
        This journal is about awareness, honesty, and reflection — not perfection.
      </p>
    </div>
  );
}