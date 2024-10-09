import React from 'react';
import { GoADropdown, GoADropdownItem, GoAFormItem } from '@abgov/react-components';

export default function Bug1307Page() {
  const onChange = (event) => {
    // handle change
  };

  return (
    <GoAFormItem label="Basic dropdown">
      <GoADropdown name="item" onChange={onChange} id="dropdown">
        <GoADropdownItem value="red" label="Red" />
        <GoADropdownItem value="green" label="Green" />
        <GoADropdownItem value="blue" label="Blue" />
      </GoADropdown>
    </GoAFormItem>
  );
}
