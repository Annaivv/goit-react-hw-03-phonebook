import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

export default Filter;
