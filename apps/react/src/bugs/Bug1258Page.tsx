import React, { useState, useEffect } from 'react';
import { GoAContainer, GoAButton, GoADropdown, GoADropdownItem, GoAFormItem } from '@abgov/react-components';

export default function Bug1258Page() {
  const options = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  const [formControlNative, setFormControlNative] = useState('');
  const [formControlNonNative, setFormControlNonNative] = useState('');

  function onChangeFormControlNative(name, value) {
    setFormControlNative(value)
  }

  function onChangeSetFormControlNonNative(name, value) {
    setFormControlNonNative(value)
  }


  const formControlNativeReset = () => {
    setFormControlNative('');
  };

  const formControlNonNativeReset = () => {
    setFormControlNonNative('');
  };

  return (
    <>
      <GoAContainer>
        <p>For this issue, there are 2 cases</p>
        <p>1 - goa-dropdown is native</p>
        <p>2 - goa-dropdown is not native</p>
        <p>
          For all 2 cases, when an option is selected, then reset, then select
          the same option again, onChange should fire
        </p>
      </GoAContainer>

      <GoAContainer>
        <GoAFormItem label="Dropdown Native With Empty String Value">
          <GoADropdown
            value={formControlNative}
            onChange={onChangeFormControlNative}
            id="dropdown-native"
            native
          >
            {options.map((opt, index) => (
              <GoADropdownItem
                key={index}
                value={opt.value}
                label={opt.label}
              />
            ))}
          </GoADropdown>
        </GoAFormItem>
        <GoAButton
          testId="dropdown-native-reset-button-shadow"
          id="dropdown-native-reset-button"
          onClick={formControlNativeReset}
        >
          Reset
        </GoAButton>
        <p id="dropdown-native-value">
          Value for dropdown-native-value is {formControlNative}
        </p>
      </GoAContainer>

      <GoAContainer>
        <GoAFormItem label="Dropdown Not Native With Empty String Value">
          <GoADropdown
            value={formControlNonNative}
            onChange={onChangeSetFormControlNonNative}
            id="dropdown-non-native"
          >
            {options.map((opt, index) => (
              <GoADropdownItem
                key={index}
                value={opt.value}
                label={opt.label}
              />
            ))}
          </GoADropdown>
        </GoAFormItem>
        <GoAButton
          testId="dropdown-non-native-reset-button-shadow"
          id="dropdown-non-native-reset-button"
          onClick={formControlNonNativeReset}
        >
          Reset
        </GoAButton>
        <p id="dropdown-non-native-value">
          Value for dropdown-non-native-value is {formControlNonNative}
        </p>
      </GoAContainer>
    </>
  );
}
