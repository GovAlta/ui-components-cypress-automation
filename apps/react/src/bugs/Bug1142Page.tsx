import React, { useState, useEffect } from 'react';
import { GoAFormItem, GoADropdown, GoADropdownItem } from "@abgov/react-components";

export default function Bug1142Page(props) {
  return (
    <>
    <GoAFormItem label="Basic dropdown">
      <GoADropdown name="item" value="" id="dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>
    </GoAFormItem>
    </>
  )
}
