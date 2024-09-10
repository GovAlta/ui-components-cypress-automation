import React, { useState, useEffect } from 'react';
import { GoAContainer, GoAIconButton, GoADropdown, GoADropdownItem, GoAFormItem } from '@abgov/react-components';

export default function Bug1237Page(props) {

  const options = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];


  const [formControlNative, setFormControlNative] = useState<string | null>('');
  const [formControlNonNative, setFormControlNonNative] = useState<string | null>('');
  const [formControl, setFormControl] = useState<string | null>('');


  const resetFormControl = () => setFormControl('');
  const resetFormControlNative = () => setFormControlNative('');
  const resetFormControlNonNative = () => setFormControlNonNative('');


  function onChange(name, value) {
    setFormControl(value)
  }

  function onChangeNative(name, value) {
    setFormControlNative(value)
  }

  function onChangelNonNative(name, value) {
    setFormControlNonNative(value)
  }


  return (
    <>
    <GoAContainer>
      <p> When Enter Key is pressed, option is selected, and dropdown is closed</p>
    </GoAContainer>


    <GoAContainer>

      <GoAFormItem label="Dropdown Native">
        <GoADropdown
          value={formControlNative}
          onChange={onChangeNative}
          native={true}
          id="dropdown-native"
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

      <GoAFormItem label="Dropdown Non Native">
        <GoADropdown
          value={formControlNonNative}
          onChange={onChangelNonNative}
          id="dropdown-non-native"
          name='dropdown-non-native'
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

      <GoAFormItem label="Select">


      <select   value={formControlNative}  onChange={onChange} id="select">
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </GoAFormItem>

    </GoAContainer>

    </>
  )
}
