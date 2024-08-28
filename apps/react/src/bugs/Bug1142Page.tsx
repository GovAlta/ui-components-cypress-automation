import React, { useEffect, useState } from 'react';
import { GoAContainer, GoAGrid, GoAFormItem, GoADropdown, GoADropdownItem, GoAButton } from '@abgov/react-components';

const Bug1142PageComponent: React.FC = () => {
  const optionsEmpty = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  const optionsNull = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  const [formControlEmptyNative, setFormControlEmptyNative] = useState<string | null>('');
  const [formControlEmptyNonNative, setFormControlEmptyNonNative] = useState<string | null>('');
  const [formControlNullNative, setFormControlNullNative] = useState<string | null>('');
  const [formControlNullNonNative, setFormControlNullNonNative] = useState<string | null>('');
  const [formControlNative, setFormControlNative] = useState<string | null>('');


  const resetFormControlEmptyNative = () => setFormControlEmptyNative('');
  const resetFormControlEmptyNonNative = () => setFormControlEmptyNonNative('');
  const resetFormControlNullNative = () => setFormControlNullNative('');
  const resetFormControlNullNonNative = () => setFormControlNullNonNative('');
  const resetFormControlNative = () => setFormControlNative('');


  function onChangeEmptyNative(name, value) {
    setFormControlEmptyNative(value)
  }

  function onChangeEmptyNonNative(name, value) {
    setFormControlEmptyNonNative(value)
  }

  function onChangeNullNative(name, value) {
    setFormControlNullNative(value)
  }

  function onChangeNullNonNative(name, value) {
    setFormControlNullNonNative(value)
  }

  return (
    <>
      <div>For this issue, there are 4 cases:</div>
      <ul>
        <li>1 - GoADropdown is native and has an option of ''</li>
        <li>2 - GoADropdown is not native and has an option of ''</li>
        <li>3 - GoADropdown is native and does not have an option of ''</li>
        <li>4 - GoADropdown is not native and does not have an option of ''</li>
      </ul>
      <div>For all 4 cases, when reset is clicked, the dropdown should display an option of ''</div>

      <GoAContainer>
        <GoAGrid>
          <GoAFormItem label="Dropdown Native With Empty String Value">
            <GoADropdown
              value={formControlEmptyNative}
              onChange={onChangeEmptyNative}
              id="dropdown-empty-native"
              native
            >
              <GoADropdownItem value="" label=""></GoADropdownItem>
              <GoADropdownItem value="opt1" label="Option 1"></GoADropdownItem>
              <GoADropdownItem value="opt2" label="Option 2"></GoADropdownItem>
              <GoADropdownItem value="opt3" label="Option 3"></GoADropdownItem>
              <GoADropdownItem value="opt4" label="Option 4"></GoADropdownItem>
            </GoADropdown>
          </GoAFormItem>
          <GoAButton testId="dropdown-empty-native-reset-button-shadow" id="dropdown-empty-native-reset-button"   onClick={resetFormControlEmptyNative}>Reset</GoAButton>
        </GoAGrid>
      </GoAContainer>

      <GoAContainer>
        <GoAGrid>
          <GoAFormItem label="Dropdown Not Native With Empty String Value">
            <GoADropdown
              value={formControlEmptyNonNative}
              onChange={onChangeEmptyNonNative}
              id="dropdown-empty-non-native"

            >
            <GoADropdownItem value="" label=""></GoADropdownItem>
            <GoADropdownItem value="opt1" label="Option 1"></GoADropdownItem>
            <GoADropdownItem value="opt2" label="Option 2"></GoADropdownItem>
            <GoADropdownItem value="opt3" label="Option 3"></GoADropdownItem>
            <GoADropdownItem value="opt4" label="Option 4"></GoADropdownItem>
            </GoADropdown>
          </GoAFormItem>
          <GoAButton  testId="dropdown-empty-non-native-reset-button-shadow" id="dropdown-empty-non-native-reset-button"  onClick={resetFormControlEmptyNonNative}>Reset</GoAButton>
        </GoAGrid>
      </GoAContainer>

      <GoAContainer>
        <GoAGrid>
          <GoAFormItem label="Dropdown Native Without Empty String Value">
            <GoADropdown
              value={formControlNullNative}
              onChange={onChangeNullNative}
              id="dropdown-null-native"

              native
            >
            <GoADropdownItem value="opt1" label="Option 1"></GoADropdownItem>
            <GoADropdownItem value="opt2" label="Option 2"></GoADropdownItem>
            <GoADropdownItem value="opt3" label="Option 3"></GoADropdownItem>
            <GoADropdownItem value="opt4" label="Option 4"></GoADropdownItem>
            </GoADropdown>
          </GoAFormItem>
          <GoAButton onClick={resetFormControlNullNative}  testId="dropdown-null-native-reset-button-shadow" id="dropdown-null-native-reset-button" >Reset</GoAButton>
        </GoAGrid>
      </GoAContainer>

      <GoAContainer>
        <GoAGrid>
          <GoAFormItem label="Dropdown Not Native Without Empty String Value">
            <GoADropdown
              value={formControlNullNonNative}
              onChange={onChangeNullNonNative}
              id="dropdown-null-non-native"

            >
            <GoADropdownItem value="opt1" label="Option 1"></GoADropdownItem>
            <GoADropdownItem value="opt2" label="Option 2"></GoADropdownItem>
            <GoADropdownItem value="opt3" label="Option 3"></GoADropdownItem>
            <GoADropdownItem value="opt4" label="Option 4"></GoADropdownItem>
            </GoADropdown>
          </GoAFormItem>
          <GoAButton onClick={resetFormControlNullNonNative} testId="dropdown-null-non-native-reset-button-shadow" id="dropdown-null-non-native-reset-button" >Reset</GoAButton>
        </GoAGrid>
      </GoAContainer>

      <GoAContainer>
        <GoAGrid>
          <div>
            <h2>Native Select</h2>
            <select >
              <option value="opt1">Option 1</option>
              <option value="opt2">Option 2</option>
              <option value="opt3">Option 3</option>
              <option value="opt4">Option 4</option>
            </select>
          </div>
          <GoAButton onClick={resetFormControlNative}>Reset</GoAButton>
        </GoAGrid>
      </GoAContainer>
    </>
  );
};

export default Bug1142PageComponent;
