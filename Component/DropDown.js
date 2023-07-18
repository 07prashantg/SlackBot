import React, { useState } from 'react';

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('Employee');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select className="dropdown" id="loginDropdown" value={selectedOption} onChange={handleChange}>
        <option value="Employee">Employee</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  );
}

export default DropDown;