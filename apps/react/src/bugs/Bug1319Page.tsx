import React from 'react';
import { GoADropdown, GoADropdownItem, GoAFormItem } from '@abgov/react-components';
import './Bug1319Page.css';

export default function Bug1307Page() {
  const onChange = (event) => {
    // handle change
    console.log(event.target.value);
  };

    return (
      <div className="full-width">
        <div className="form-item">
          <label>Basic dropdown</label>
          <GoADropdown name="item" value="" onChange={onChange} width="100%" id="dropdown-full">
            <GoADropdownItem value="red" label="Red" />
            <GoADropdownItem value="green" label="Green" />
            <GoADropdownItem value="blue" label="Blue" />
          </GoADropdown>
        </div>

        <div className="form-item">
          <label>Basic dropdown</label>
          <GoADropdown name="item" value="" onChange={onChange} width="50%" id="dropdown-half">
            <GoADropdownItem value="red" label="Red" />
            <GoADropdownItem value="green" label="Green" />
            <GoADropdownItem value="blue" label="Blue" />
          </GoADropdown>
        </div>

        <div className="form-item">
          <label>Basic dropdown</label>
          <GoADropdown name="item" value="" onChange={onChange} width="200px" id="dropdown-fix">
            <GoADropdownItem value="red" label="Red" />
            <GoADropdownItem value="green" label="Green" />
            <GoADropdownItem value="blue" label="Blue" />
          </GoADropdown>
        </div>
      </div>
    );
}
