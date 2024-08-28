import React, { useState, useEffect } from 'react';
import { GoAContainer, GoADropdown, GoADropdownItem } from "@abgov/react-components";
import './Bug1739Page.css';

export default function Bug1739Page(props) {
  return (
    <>

    <GoAContainer accent="thick" padding="relaxed" width="full">
      <h2>
        Container One
      </h2>
      <GoADropdown name="item" value="" id="dropdown">
          <GoADropdownItem value="red" label="Red"></GoADropdownItem>
          <GoADropdownItem value="green" label="Green"></GoADropdownItem>
          <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
        </GoADropdown>
    </GoAContainer>
    <GoAContainer accent="thick" padding="relaxed" width="full" class="container2">
      <h2 class="heading2">
        Container Two
      </h2>
      <p class="text2">
        Add things inside me
      </p>
    </GoAContainer>


    </>
  )
}
