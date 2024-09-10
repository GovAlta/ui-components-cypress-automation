

import React, { useState, useEffect } from 'react';
import { GoAInput, GoAFormItem } from "@abgov/react-components";

export default function Bug976Page(props) {



  return (
    <div>
      <GoAFormItem label="Tuition">
        <GoAInput
          name="tuition"
          leadingContent="$"
          trailingContent="ABCDE"
          id="input"
disabled={true}
        >
        </GoAInput>
      </GoAFormItem>
    </div>
  );
}
