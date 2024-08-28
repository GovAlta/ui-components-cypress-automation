import React, { useState, useEffect } from 'react';
import { GoAFormItem, GoADropdown, GoADropdownItem } from '@abgov/react-components';

export default function Bug1960Page(props) {
  const [initialValue, setInitialValue] = useState(2);

  const handleChange = () => {
    setInitialValue(initialValue * 2);
  };
  return (
    <>
    <GoAFormItem label="Basic dropdown">
      <GoADropdown native name="item"  onChange={handleChange} id="dropdown-on-change">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>
    </GoAFormItem>

    <p id="on-change-initial-value">on change initial value is {initialValue.toString()}</p>

    </>
  )
}
