import React, { useState, useEffect } from 'react';
import { GoADropdown, GoADropdownItem } from "@abgov/react-components";
import './Bug1734Page.css';

export default function Bug1734Page(props) {
  return (
    <>
    <div class="full-height-minus-40px">SPACE TAKER</div>
    <GoADropdown name="item" value="" id="dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>

    </>
  )
}
