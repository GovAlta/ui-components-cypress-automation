import React from "react";
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function Bug1796Page() {
  const onClick = (event: React.MouseEvent) => {
    console.log("onClick");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChange");
  };

  return (
    <div>
      {/* Regular Label */}
      <div id="regular-label">
        <GoAFormItem label="Basic" labelSize="regular">
          <GoAInput name="item" width="20ch" onChange={onChange} />
        </GoAFormItem>
      </div>
      <hr />

      {/* Regular Label with Help Text */}
      <div id="regular-label-help">
        <GoAFormItem label="Basic" labelSize="regular" helpText="Help Text">
          <GoAInput name="item" width="20ch" onChange={onChange} />
        </GoAFormItem>
      </div>
      <hr />

      {/* Regular Label with Help and Error Text */}
      <div id="regular-label-help-error">
        <GoAFormItem
          label="Basic"
          labelSize="regular"
          helpText="Help Text"
          error="Error Text"
        >
          <GoAInput name="item" width="20ch" onChange={onChange} />
        </GoAFormItem>
      </div>
      <hr />

      {/* Large Label */}
      <div id="large-label">
        <GoAFormItem label="Basic" labelSize="large">
          <GoAInput name="item" width="20ch" onChange={onChange} />
        </GoAFormItem>
      </div>
      <hr />

      {/* Large Label with Help Text */}
      <div id="large-label-help">
        <GoAFormItem label="Basic" labelSize="large" helpText="Help Text">
          <GoAInput name="item" width="20ch" onChange={onChange} />
        </GoAFormItem>
      </div>
      <hr />

      {/* Large Label with Help and Error Text */}
      <div id="large-label-help-error">
        <GoAFormItem
          label="Basic"
          labelSize="large"
          helpText="Help Text"
          error="Error Text"
        >
          <GoAInput name="item" width="20ch" onChange={onChange} />
        </GoAFormItem>
      </div>
    </div>
  );
}
