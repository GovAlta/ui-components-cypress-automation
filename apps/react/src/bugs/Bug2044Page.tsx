import React, { useState, useEffect } from 'react';
import { GoADatePicker } from "@abgov/react-components";

export default function Bug2044Page() {
  const [value, setValue] = useState<Date | undefined>(undefined);

  function onChange() {
    return null;
  }

  return (
    <GoADatePicker disabled={true} onChange={onChange} value={value}></GoADatePicker>
  )
}