import React, { useState } from 'react';
import { GoAContainer, GoADropdown, GoADropdownItem } from '@abgov/react-components';

export default function Bug1266Page() {
  const [monthCtrl, setMonthCtrl] = useState('');

  const months = [
    { number: 1, name: 'January' },
    { number: 2, name: 'February' },
    { number: 3, name: 'March' },
    { number: 4, name: 'April' },
    { number: 5, name: 'May' },
    { number: 6, name: 'June' },
    { number: 7, name: 'July' },
    { number: 8, name: 'August' },
    { number: 9, name: 'September' },
    { number: 10, name: 'October' },
    { number: 11, name: 'November' },
    { number: 12, name: 'December' }
  ];

  function onChange(name, value) {
    setMonthCtrl(value)
  }

  return (
    <GoAContainer>
      <GoADropdown
        name="selectMonth"
        value={monthCtrl}
        onChange={onChange}
        id="monthCtrl"
      >
        {months.map((month, index) => (
          <GoADropdownItem
            key={index}
            value={month.number}
            label={month.name}
          />
        ))}
      </GoADropdown>

      <p id="dropdown-item-value">
        The dropdown-item-value is {monthCtrl}
      </p>
    </GoAContainer>
  );
}
