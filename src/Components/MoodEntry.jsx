import React from "react";

export default function MoodEntry({ moodData, setMoodData, selectedDay, setSelectedDay }) {
  function handleChange(day, field, value) {
    setMoodData({
      ...moodData,
      [day]: { ...moodData[day], [field]: value }
    });
  }

  return (
    <div className="MoodEntry">
      <h3>Mood Entry</h3>

      <label>
        Select Day:
        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          {Object.keys(moodData).map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </label>

      <div className="inputs">
        <label>
          Mood (1-5):
          <input
            type="number"
            min="1"
            max="5"
            value={moodData[selectedDay].mood || ""}
            onChange={(e) => handleChange(selectedDay, "mood", e.target.value)}
          />
        </label>

        <label>
          Emotion:
          <input
            type="text"
            value={moodData[selectedDay].emotion || ""}
            onChange={(e) => handleChange(selectedDay, "emotion", e.target.value)}
          />
        </label>

        <label>
          Stress Level (1-5):
          <input
            type="number"
            min="1"
            max="5"
            value={moodData[selectedDay].stress || ""}
            onChange={(e) => handleChange(selectedDay, "stress", e.target.value)}
          />
        </label>

        <label>
          Notes:
          <input
            type="text"
            value={moodData[selectedDay].notes || ""}
            onChange={(e) => handleChange(selectedDay, "notes", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}