import React, { useState, useEffect } from 'react';
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function Bug1149Page(props) {
  return (
    <div>
      <GoAFormItem label="Basic">
        <GoAInput
          trailingIcon="calendar" // Trailing icon set to "calendar"
          width="20ch"
          name="item"
        />
      </GoAFormItem>
    </div>
  )
}
