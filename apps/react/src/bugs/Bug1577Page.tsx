import React from "react";
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function FormExample() {
  return (
    <div>
      {/* Focus Button */}
      <button id="button">focus anchor</button>

      {/* Tuition Input */}
      <GoAFormItem label="Tuition">
        <GoAInput value="" name="tuition" leadingContent="$" id="input" trailingContent="ABCD" />
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
          trailingContent="ABCD"
        />
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
          trailingContent="ABCD"
        />
      </GoAFormItem>
    </div>
  );
}
