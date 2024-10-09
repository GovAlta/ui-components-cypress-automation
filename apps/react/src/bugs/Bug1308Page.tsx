import React, { useState, useEffect } from 'react';
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function Bug1308Page(props) {


  return (
    <div>
      <GoAFormItem label="Tuition">
        <GoAInput
          name="tuition"
          leadingContent="$"
          trailingContent="ABCDE"
          id="input"
        >
        </GoAInput>
      </GoAFormItem>
    </div>
  );
}
