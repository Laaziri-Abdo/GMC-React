// src/Filter.js
import React from "react";

const Filter = ({ titleFilter, rateFilter, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      {/* <input
        type="number"
        placeholder="Filter by rating"
        value={rateFilter}
        onChange={(e) => onRateChange(e.target.value)}
      /> */}
    </div>
  );
};
export default Filter;
