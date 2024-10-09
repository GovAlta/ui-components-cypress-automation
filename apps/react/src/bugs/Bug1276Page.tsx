import React, { useState, useEffect } from 'react';
import { GoAInput, GoATextarea, GoAFormItem } from "@abgov/react-components";

export default function Bug1276Page(props) {
  return (
    <div>
      {/* Input Field */}
      <GoAFormItem label="Input">
        <GoAInput
          name="input"
          width="20ch"
        />
      </GoAFormItem>

      {/* Textarea Field */}
      <GoAFormItem label="Textarea">
        <GoATextarea
          name="textarea"
          width="60ch"
        />
      </GoAFormItem>
    </div>
  )
}
