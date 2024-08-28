import React, { useState, useEffect } from 'react';
import { GoAIconButton, GoAContainer, GoADropdown, GoADropdownItem, GoAFormItem, GoAInput, GoAAccordion, GoACallout, GoADetails, GoAHeroBanner, GoAButton, GoAModal } from "@abgov/react-components";

export default function Bug1758Page(props) {
  const [open, setOpen] = useState(false);
  function onClick() {
   setOpen(!open);
  }
  function onClose() {
   setOpen(!open);
  }

  return (
    <>
    <GoAContainer accent="thick" padding="relaxed" width="full" id="container">
      <h2>
        Container One
      </h2>
      <GoADropdown value="" id="container-dropdown" name="container-dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>

      <GoAFormItem  label="Basic" id="container-input">
        <GoAInput name="item"></GoAInput>
      </GoAFormItem >

    </GoAContainer>


    <GoAAccordion heading="Heading" headingsize="medium"  id="accordion">
      <h2>
        Accordion One
      </h2>
      <GoADropdown value="" id="accordion-dropdown" name="accordion-dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>

      <GoAFormItem  label="Basic" id="accordion-input">
        <GoAInput name="item"></GoAInput>
      </GoAFormItem >
    </GoAAccordion>

    <GoACallout type="information"  id="callout">
      <h2>
        callout One
      </h2>
      <GoADropdown value="" id="callout-dropdown"  name="callout-dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>

      <GoAFormItem  label="Basic" id="callout-input">
        <GoAInput name="item"></GoAInput>
      </GoAFormItem >
    </GoACallout>

    <GoADetails heading="Detail Heading"  id="details">
      <h2>
        details One
      </h2>
      <GoADropdown value="" id="details-dropdown" name="details-dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>

      <GoAFormItem  label="Basic" id="details-input">
        <GoAInput name="item"></GoAInput>
      </GoAFormItem >
    </GoADetails>

    <GoAHeroBanner heading="Heading"  id="hero-banner">
      <h2>
        hero banner One
      </h2>
      <GoADropdown value="" id="hero-banner-dropdown" name="hero-banner-dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>

      <GoAFormItem  label="Basic" id="hero-banner-input">
        <GoAInput name="item"></GoAInput>
      </GoAFormItem >

    </GoAHeroBanner>

    <GoAButton onClick={onClick}  id="modal-button" testId="modal-button">
      Show Modal
    </GoAButton>
    <GoAModal heading="Are you sure you want to exit your application?" role="alertdialog" open={open} onClose={onClose}>
      <h2>
        modal One
      </h2>
      <GoADropdown value="" id="modal-dropdown" name="modal-dropdown">
        <GoADropdownItem value="red" label="Red"></GoADropdownItem>
        <GoADropdownItem value="green" label="Green"></GoADropdownItem>
        <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
      </GoADropdown>

      <GoAFormItem  label="Basic" id="modal-input">
        <GoAInput name="item"></GoAInput>
      </GoAFormItem >
    </GoAModal>

    </>
  )
}
