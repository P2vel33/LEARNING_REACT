import React from "react";

const MySelect = ({ setSort }) => {
  return (
    <select onChange={(event) => setSort(event.target.value)}>
      <option value="" disabled selected>
        Sort
      </option>
      <option value="title">of name</option>
      <option value="body">of description</option>
    </select>
  );
};

export default MySelect;
