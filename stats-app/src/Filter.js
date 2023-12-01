import React from "react"
const Filter = ({ titleFilter, onTitleChange }) => {
    return (
        <>
            <input type='text' placeholder="Filter by title"
                value={titleFilter} onChange={(e)=>onTitleChange(e.target.value)} />
            </>
            )
};
            export default Filter;