import React from "react";
import { GoAInput, GoADropdown, GoADropdownItem, GoAButton  } from "@abgov/react-components";

export default function Bug1867Page(props) {

  const onClick = (event: React.MouseEvent) => {
    console.log("onClick");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log("onChange");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="form-item">
        <label>Street Address</label>
        <GoAInput name="full" type="text" onChange={onChange} width="100%" />
      </div>

      <div className="form-item">
        <label>Suite or unit #</label>
        <GoAInput name="half" type="text" onChange={onChange} width="50%" />
      </div>

      <div className="form-item">
        <label>City/town</label>
        <GoAInput name="fix" type="text" onChange={onChange} width="260px" />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="form-item">
          <label>Province/territory</label>
          <GoADropdown name="province" defaultValue="alberta" onChange={onChange}>
            <GoADropdownItem label="Alberta" value="alberta" />
            <GoADropdownItem label="BC" value="bc" />
            <GoADropdownItem label="Manitoba" value="manitoba" />
            <GoADropdownItem label="New Brunswick" value="new-brunswick" />
            <GoADropdownItem label="Newfoundland and Labrador" value="newfoundland" />
            <GoADropdownItem label="Nova Scotia" value="nova-scotia" />
            <GoADropdownItem label="Ontario" value="ontario" />
            <GoADropdownItem label="Prince Edward Island" value="prince-edward-island" />
            <GoADropdownItem label="Quebec" value="quebec" />
            <GoADropdownItem label="Saskatchewan" value="saskatchewan" />
          </GoADropdown>
        </div>

        <div className="form-item">
          <label>Postal Code</label>
          <GoAInput name="postalCode" type="text" onChange={onChange} width="100%" />
        </div>
      </div>

      <div style={{ marginTop: "32px", display: "flex", alignItems: "flex-start" }}>
        <GoAButton type="primary" onClick={onClick}>Submit and continue</GoAButton>
        <GoAButton type="secondary" onClick={onClick}>Cancel</GoAButton>
      </div>
    </div>
  );
};
