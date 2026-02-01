import React from "react";

export default function HydrationEntry({ hydrationData, setHydrationData, selectedDay, setSelectedDay }) {
  
  // Handle input changes for daily water intake and notes
  function handleChange(day, field, value) {
    setHydrationData({
      ...hydrationData,
      [day]: { ...hydrationData[day], [field]: value }
    });
  }

  return (
    <div className="HydrationEntry">
      <h3>Daily Hydration Entry</h3>

      {/* Day Selection */}
      <label>
        Select Day:
        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          {Object.keys(hydrationData).map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </label>

      <div className="inputs" style={{ marginTop: "10px" }}>
        {/* Water Intake */}
        <label>
          Water Intake (oz):
          <input
            type="number"
            min="0"
            value={hydrationData[selectedDay].water || ""}
            onChange={(e) => handleChange(selectedDay, "water", e.target.value)}
          />
        </label>

        {/* Notes */}
        <label>
          Notes:
          <input
            type="text"
            value={hydrationData[selectedDay].notes || ""}
            onChange={(e) => handleChange(selectedDay, "notes", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
