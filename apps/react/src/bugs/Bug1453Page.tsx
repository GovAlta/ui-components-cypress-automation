import React, { useState, useEffect } from 'react';
import { GoAFormItem, GoAInput } from "@abgov/react-components";

export default function Bug1453Page(props) {
  return (
    <>
    <GoAFormItem label="Basic">
      <GoAInput name="disabled" id="disabled" width="20ch" disabled={true}></GoAInput>
    </GoAFormItem>
    </>
  )
}
