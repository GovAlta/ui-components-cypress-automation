import React from 'react';
import { GoATabs, GoATab, GoADropdown, GoADropdownItem, GoAFormItem } from '@abgov/react-components';

const Bug1494Page = () => {
  const onChange = (event) => {
    // handle change
    console.log("abc");
  };


  return (
    <GoATabs>
      <GoATab heading="Tab Item 1">
        <GoAFormItem label="dropdown-one">
          <GoADropdown name="item-one" value="" id="dropdown-one" filterable testid="dropdown-one-input" onChange={onChange} >
            <GoADropdownItem value="red" label="Red" />
            <GoADropdownItem value="green" label="Green" />
            <GoADropdownItem value="blue" label="Blue" />
            <GoADropdownItem value="black" label="Black" />
            <GoADropdownItem value="blonde" label="Blonde" />
          </GoADropdown>
        </GoAFormItem>
        <br />
        <br />
        <br />
        <GoAFormItem label="dropdown-two">
          <GoADropdown name="item-two" value="" id="dropdown-two" onChange={onChange} >
            <GoADropdownItem value="red" label="Red" />
            <GoADropdownItem value="green" label="Green" />
            <GoADropdownItem value="blue" label="Blue" />
          </GoADropdown>
        </GoAFormItem>
      </GoATab>
      <GoATab heading="Tab Item 2">
        Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </GoATab>
      <GoATab heading="Tab Item 3">
        Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </GoATab>
    </GoATabs>
  );
};

export default Bug1494Page;
