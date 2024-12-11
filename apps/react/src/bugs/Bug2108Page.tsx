import React, { useState, useEffect } from 'react';
import { GoAFormItem, GoADropdown, GoADropdownItem,  } from "@abgov/react-components";

export default function Bug2108Page(props) {
  return (
    <>
    <GoAFormItem label="Dropdown" requirement="optional">
      <GoADropdown
        name="dropdown-30ch"
        width="30ch"
        placeholder="Select a value"
        onChange={function (name: string, values: string[] | string): void {
          throw new Error("Function not implemented. ");
        }}
      >
        <GoADropdownItem key="_none_" name="none" value="none" label="None" />
        <GoADropdownItem key="_some_" name="some" value="some" label="Some Long Value Some Long Value" />
      </GoADropdown>
    </GoAFormItem>


    <GoAFormItem label="Dropdown" requirement="optional">
      <GoADropdown
      name="dropdown-30ch-no-item"
        width="30ch"
        placeholder="Select a value"
        onChange={function (name: string, values: string[] | string): void {
          throw new Error("Function not implemented. ");
        }}
      >

      </GoADropdown>
    </GoAFormItem>

    <GoAFormItem label="Dropdown" requirement="optional">
      <GoADropdown
      name="dropdown-no-width-no-item"
        placeholder="Select a value"
        onChange={function (name: string, values: string[] | string): void {
          throw new Error("Function not implemented. ");
        }}
      >

      </GoADropdown>
    </GoAFormItem>

    <GoAFormItem label="Dropdown" requirement="optional">
      <GoADropdown
        name="dropdown-no-width-with-item"
        width="10ch"
        placeholder="Select a value"
        onChange={function (name: string, values: string[] | string): void {
          throw new Error("Function not implemented. ");
        }}
      >
      <GoADropdownItem key="_none_" name="none" value="none" label="None" />
      <GoADropdownItem key="_some_" name="some" value="some" label="Some Long Value Some Long Value" />
      </GoADropdown>
    </GoAFormItem>

    <GoAFormItem label="Dropdown" requirement="optional">
      <GoADropdown
      name="dropdown-10ch"
        width="10ch"
        placeholder="Select a value"
        onChange={function (name: string, values: string[] | string): void {
          throw new Error("Function not implemented. ");
        }}
      >
      <GoADropdownItem key="_none_" name="none" value="none" label="None" />
      <GoADropdownItem key="_some_" name="some" value="some" label="Some Long Value Some Long Value" />
      </GoADropdown>
    </GoAFormItem>

    <GoAFormItem label="Dropdown" requirement="optional">
      <GoADropdown
      name="dropdown-50"
        width="50%"
        placeholder="Select a value"
        onChange={function (name: string, values: string[] | string): void {
          throw new Error("Function not implemented. ");
        }}
      >
        <GoADropdownItem key="_none_" name="none" value="none" label="None" />
        <GoADropdownItem key="_some_" name="some" value="some" label="Some Long Value Some Long Value" />
      </GoADropdown>
    </GoAFormItem>
    <GoAFormItem label="Dropdown" requirement="optional">
      <GoADropdown
      name="dropdown-100"
        width="100%"
        placeholder="Select a value"
        onChange={function (name: string, values: string[] | string): void {
          throw new Error("Function not implemented. ");
        }}
      >
        <GoADropdownItem key="_none_" name="none" value="none" label="None" />
        <GoADropdownItem key="_some_" name="some" value="some" label="Some Long Value Some Long Value" />
      </GoADropdown>
    </GoAFormItem>

    </>
  )
}
