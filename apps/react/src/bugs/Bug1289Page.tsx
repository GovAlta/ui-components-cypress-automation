import React, { useState } from 'react';
import { GoADropdown, GoADropdownItem } from '@abgov/react-components';
import './Bug1289Page.css'; // Assuming you named the CSS file as such

export default function Bug1289Page() {
  const [selected, setSelected] = useState('');

  const options = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  const onChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="absolute-container">
      <GoADropdown
        name="item"
        value={selected}
        onChange={onChange}
        id="dropdown"
        relative={true}
      >
        {options.map((opt, index) => (
          <GoADropdownItem
            key={index}
            value={opt.value}
            label={opt.label}
          />
        ))}
      </GoADropdown>
    </div>
  );
}
