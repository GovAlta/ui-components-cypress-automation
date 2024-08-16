import React, { useState } from 'react';

import { GoAFormStepper, GoAFormStep, GoAFormStepStatusType, GoAPages, GoAButton } from "@abgov/react-components";

export default function Bug2033Page(props) {



  return (
    <>
      <span>Current step {step}</span>
      <GoAFormStepper ml="s" mr="s" step={ step } onChange={ setStep }>
        <GoAFormStep text="Personal details" status={ status[0] }></GoAFormStep>
        <GoAFormStep text="Employment history" status={ status[1] }></GoAFormStep>
        <GoAFormStep text="References" status={ status[2] }></GoAFormStep>
        <GoAFormStep text="Review" status={ status[3] }></GoAFormStep>
      </GoAFormStepper>
      <GoAPages current={ step }>
        <div>Page 1 content with status: { status[0] }</div>
        <div>Page 2 content with status: { status[1] }</div>
        <div>
          Page 3 content with current status: { status[2] }
        </div>
        <div>
          Page 4 content with current status: { status[3] }
        </div>
      </GoAPages>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoAButton onClick={ () => setStep(step - 1) } type="secondary">Previous</GoAButton>
        <GoAButton onClick={ () => setStep(step + 1) } type="primary">Next</GoAButton>
      </div>
    </>
  )
}
