import React, { useState, useEffect } from 'react';
import { GoADropdown, GoADropdownItem, GoAFormItem } from '@abgov/react-components';

const Bug1378Page = () => {

  const options = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  const [onChangeInitialValue, setOnChangeInitialValue] = useState(2);


  const handleChange = (event) => {
    setOnChangeInitialValue(onChangeInitialValue * 2);
  };


  return (
    <div>
      <GoAFormItem label="On Change Function">
        <GoADropdown
          name="onChange"
          value=""
          onChange={handleChange}
          id="dropdown-on-change"
        >
          {options.map(opt => (
            <GoADropdownItem key={opt.value} value={opt.value} label={opt.label} />
          ))}
        </GoADropdown>
      </GoAFormItem>

      <p id="on-change-initial-value">
        on change initial value is {onChangeInitialValue.toString()}
      </p>

    </div>
  );
};

export default Bug1378Page;
