import React, { useState, useEffect } from 'react';
import { GoAFormItem, GoADropdown, GoADropdownItem } from "@abgov/react-components";

export default function Bug1244Page(props) {
  return (
    <>
    <GoAFormItem label="Basic dropdown">
      <GoADropdown name="item" value="" native={true}>
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>
    </GoAFormItem>
    </>
  )
}
