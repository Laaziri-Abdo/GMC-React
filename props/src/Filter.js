import React from "react";
const Filter = ({ titleFilter,  onTitleChange}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
    </div>
  );
};
export default Filter;
