import React from "react";
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function FormExample() {
  return (
    <div>
      {/* Focus Button */}
      <button id="button">focus anchor</button>

      {/* Tuition Input */}
      <GoAFormItem label="Tuition">
        <GoAInput value="" name="tuition" leadingContent="$" id="input">
          <div slot="leadingContent">$</div>
          <div slot="trailingContent">ABCD</div>
        </GoAInput>
      </GoAFormItem>

      <hr />

      {/* Disabled Input */}
      <GoAFormItem label="Disabled">
        <GoAInput
          value=""
          name="disabled"
          leadingContent="$"
          id="disabled"
          disabled={true} // Setting the input as disabled
        >
          <div slot="leadingContent">$</div>
          <div slot="trailingContent">ABCD</div>
        </GoAInput>
      </GoAFormItem>

      <hr />

      {/* Error Input */}
      <GoAFormItem label="Error">
        <GoAInput
          value=""
          name="error"
          leadingContent="$"
          id="error"
          error={true} // Showing error state
        >
          <div slot="leadingContent">$</div>
          <div slot="trailingContent">ABCD</div>
        </GoAInput>
      </GoAFormItem>
    </div>
  );
}
