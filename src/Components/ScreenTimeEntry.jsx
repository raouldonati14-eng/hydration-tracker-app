import React from "react";

export default function ScreenTimeEntry({
  screenData,
  setScreenData,
  selectedDay,
  setSelectedDay
}) {
  function handleChange(day, field, value) {
    setScreenData({
      ...screenData,
      [day]: { ...screenData[day], [field]: value }
    });
  }

  return (
    <div>
      <h3>Daily Screen-Time Entry</h3>

      <label>
        Select Day:
        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          {Object.keys(screenData).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </label>

      <div className="inputs">
        <label>
          Screen Time (hours):
          <input
            type="number"
            min="0"
            step="0.5"
            value={screenData[selectedDay].hours}
            onChange={(e) => handleChange(selectedDay, "hours", e.target.value)}
          />
        </label>

        <label>
          Notes:
          <input
            type="text"
            value={screenData[selectedDay].notes}
            onChange={(e) => handleChange(selectedDay, "notes", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
