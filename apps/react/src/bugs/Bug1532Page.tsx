import React, { useState } from "react";
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function Bug1532Page() {
  const [value, setValue] = useState("");

  function onChange(name, value) {
    setValue(value);
  }

  return (
    <div>
      <GoAFormItem label="Basic">
        <GoAInput
          type="number"
          width="20ch"
          name="item"
          value={value}
          onChange={onChange}
          id="input"
        />
      </GoAFormItem>

      <p id="input-value">For Value for input is {value}</p>
    </div>
  );
}
