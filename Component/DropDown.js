import React, { useState } from 'react';
import Body from "../Component/Body";
import ManagerLogin from "../Component/ManagerLogin";
import { Link } from 'react-router-dom';

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
      {/* {selectedOption === 'Employee' ? <Body /> : <ManagerLogin />} */}
    </div>
  );
}

export default DropDown;
