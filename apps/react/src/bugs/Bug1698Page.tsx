import React from 'react';
import { GoADropdown, GoADropdownItem } from '@abgov/react-components';
import './Bug1698Page.css';

const Bug1698Page = () => {
  return (
    <div>
    <div className="container">
      <GoADropdown name="item" value="" width="100%" id="dropdown-full">
        <GoADropdownItem value="red" label="Red" />
        <GoADropdownItem value="green" label="Green" />
        <GoADropdownItem value="blue" label="Blue" />
      </GoADropdown>
    </div>
    <div className="container">
      <GoADropdown name="item" value="" width="50%" id="dropdown-half">
        <GoADropdownItem value="red" label="Red" />
        <GoADropdownItem value="green" label="Green" />
        <GoADropdownItem value="blue" label="Blue" />
      </GoADropdown>
    </div>
    <div className="container">
      <GoADropdown name="item" value="" width="25%" id="dropdown-quarter">
        <GoADropdownItem value="red" label="Red" />
        <GoADropdownItem value="green" label="Green" />
        <GoADropdownItem value="blue" label="Blue" />
      </GoADropdown>
    </div>
</div>
  );
};

export default Bug1698Page;
