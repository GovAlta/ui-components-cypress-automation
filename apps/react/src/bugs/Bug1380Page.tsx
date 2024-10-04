import React, { useState } from "react";
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function Bug1380Page() {
  // Initial state for string value and date value
  const [value, setValue] = useState("2020-09-12");
  const [dateValue, setDateValue] = useState(new Date("2020-12-03"));

  // Correct onChange function
  function onChange(name: string, date: string) {
    setValue(date);
  }

  return (
    <div>
      {/* Input with string value */}
      <GoAFormItem label="value">
        <GoAInput
          type="date"
          width="20ch"
          name="item"
          value={value}
          onChange={onChange}
          id="input-string"
        />
      </GoAFormItem>

      <hr />

      {/* Input with Date object value */}
      <GoAFormItem label="dateValue">
        <GoAInput
          type="date"
          width="20ch"
          name="item"
          value={dateValue}
          id="input-date"
        />
      </GoAFormItem>

      <p id="input-value">For Value for input is {value}</p>
    </div>
  );
}
