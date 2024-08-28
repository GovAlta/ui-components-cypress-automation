import React from 'react';
import { GoADropdown, GoADropdownItem } from '@abgov/react-components';
import './Bug1702Page.css';

const Bug1702Page = () => {
  const onChange = (event) => {
    // handle change
    console.log("abc");
  };
  return (
    <div>
    <div className="container">
      <GoADropdown name="item" value="" width="100%" id="dropdown-full" onChange={onChange} >
        <GoADropdownItem value="red" label="Red" />
        <GoADropdownItem value="green" label="Green" />
        <GoADropdownItem value="blue" label="Blue" />
      </GoADropdown>
    </div>
    <div className="container">
      <GoADropdown name="item" value="" width="50%" id="dropdown-half" onChange={onChange} >
        <GoADropdownItem value="red" label="Red" />
        <GoADropdownItem value="green" label="Green" />
        <GoADropdownItem value="blue" label="Blue" />
      </GoADropdown>
    </div>
    <div className="container">
      <GoADropdown name="item" value="" width="25%" id="dropdown-quarter" onChange={onChange} >
        <GoADropdownItem value="red" label="Red" />
        <GoADropdownItem value="green" label="Green" />
        <GoADropdownItem value="blue" label="Blue" />
      </GoADropdown>
    </div>
</div>
  );
};

export default Bug1702Page;
