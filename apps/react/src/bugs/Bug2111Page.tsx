import React, { useState } from "react";
import {
  GoAAppHeader,
  GoABlock,
  GoAContainer,
  GoACircularProgress,
  GoAFormItem,
  GoADatePicker,
  GoADetails,
  GoADropdown,
  GoADropdownItem,
  GoAFileUploadInput,
  GoAFileUploadCard,
  GoAAppFooter,
  GoAAppFooterNavSection,
  GoAAppFooterMetaSection,
  GoAGrid,
  GoAHeroBanner,
  GoAMicrositeHeader,
  GoAButton,
  GoAModal,
  GoAButtonGroup,
  GoANotification,
  GoATable,
  GoAPagination,
  GoASideMenu,
  GoASideMenuHeading,
  GoASideMenuGroup,
  GoASpacer,
  GoABadge,
  GoATabs,
  GoATab,
} from "@abgov/react-components";
import { faker } from "@faker-js/faker";

export default function Bug2111Page() {
  const [open, setOpen] = useState(false);
  const [uploads, setUploads] = useState([]);
  const [progressList, setProgressList] = useState({});
  const [users, setUsers] = useState(prepareUsers());
  const [pageUsers, setPageUsers] = useState(users.slice(0, 10));
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  function onClick(event) {
    setOpen(!open);
  }

  function prepareUsers() {
    return Array.from({ length: 100 }, () => ({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.datatype.number({ min: 18, max: 60 }),
    }));
  }

  function handlePageChange(event) {
    const { page } = event.detail;
    setPage(page);
    const offset = (page - 1) * perPage;
    setPageUsers(users.slice(offset, offset + perPage));
  }

  function handlePerPageCountChangeEvent(event) {
    const { value } = event.detail;
    setPage(1);
    setPerPage(Number(value));
    setPageUsers(users.slice(0, Number(value)));
  }

  function uploadFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (e) => {
      const url = e.target.result;
      const uploader = new MockUploader();

      const newUpload = { file, uploader };
      setUploads([...uploads, newUpload]);

      uploader.onprogress = (percent) => {
        setProgressList({ ...progressList, [file.name]: percent });
      };

      if (url) {
        uploader.upload(url);
      }
    };
    reader.readAsDataURL(file);
  }

  function deleteFile(upload) {
    upload.uploader.abort();
    setUploads(uploads.filter((u) => u.file.name !== upload.file.name));
  }

  return (
    <div>
      <GoAAppHeader url="www.alberta.ca" maxcontentwidth="100%" testId="GoAAppHeader-TestId" />
      <hr />
        <GoABlock testId="GoABlock-TestId" >
        <div>Item 1</div>
        <div>
          <div>Item 2</div>
          <div>Item 2</div>
        </div>
        <div>Item 3</div>
      </GoABlock>
      <hr />
      <GoAContainer testId="GoAContainer-TestId">
        <h2>Detach to use</h2>
        <p>Add things inside me</p>
      </GoAContainer>
      <hr />
      <GoACircularProgress variant="inline" size="large" message="Loading message..." visible={true} testId="GoACircularProgress-TestId"/>
      <hr />
{/*
      <GoAFormItem label="Item"  testId="GoAFormItem-TestId">
        <GoADatePicker name="item" value="Wed Sep 11 2024 00:36:53 GMT-0700"  testId="GoADatePicker-TestId"/>
      </GoAFormItem>
*/}
      <hr />
      <GoADetails heading="Detail Heading"  testId="GoADetails-TestId">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </GoADetails>
      <hr />
      <GoAFormItem label="Basic dropdown">
        <GoADropdown name="item" value="" testId="GoADropdown-TestId">
          <GoADropdownItem value="red" label="Red" />
          <GoADropdownItem value="green" label="Green" />
          <GoADropdownItem value="blue" label="Blue" />
        </GoADropdown>
      </GoAFormItem>
      <GoAFormItem label="Upload a file">
        <GoAFileUploadInput maxfilesize="100MB" onChange={uploadFile} testId="GoAFileUploadInput-TestId" /  >
        {uploads.map((upload, i) => (
          <GoAFileUploadCard
            key={i}
            type={upload.file.type}
            size={upload.file.size}
            filename={upload.file.name}
            progress={progressList[upload.file.name]}
            onDelete={() => deleteFile(upload)}
            onCancel={() => deleteFile(upload)}
            testId="GoAFileUploadCard-TestId"
          />
        ))}
      </GoAFormItem>
      <hr />
      <GoAAppFooter maxcontentwidth="100%" testId="GoAAppFooter-TestId">
        <GoAAppFooterNavSection slot="nav" maxcolumncount="1"  testId="GoAAppFooterNavSection-TestId">
          <a href="a.html">Arts and culture</a>
          <a href="b.html">Education and training</a>
          {/* Add more links as needed */}
        </GoAAppFooterNavSection>
        <GoAAppFooterMetaSection slot="meta" testId="GoAAppFooterMetaSection-TestId">
          <a href="privacy.html">Privacy</a>
          <a href="disclaimer.html">Disclaimer</a>
          {/* Add more meta links */}
        </GoAAppFooterMetaSection>
      </GoAAppFooter>
      <hr />
      <GoAGrid minchildwidth="320px"  testId="GoAGrid-TestId">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </GoAGrid>
      <hr />
      <GoAHeroBanner heading="Heading" testId="GoAHeroBanner-TestId">
        Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
      </GoAHeroBanner>
      <hr />
      <GoAMicrositeHeader type="alpha"  testId="GoAMicrositeHeader-TestId"/>
      <hr />
      <GoAButton onClick={onClick}  testId="GoAButton-TestId">Show Modal</GoAButton>
      <GoAModal  testId="GoAModal-TestId" heading="Are you sure you want to exit your application?" role="alertdialog" open={open}>
        <GoAButtonGroup alignment="end"  testId="GoAButtonGroup-TestId" >
          <GoAButton type="tertiary" onClick={onClick}>
            Cancel
          </GoAButton>
          <GoAButton type="primary" onClick={onClick}>
            Exit
          </GoAButton>
        </GoAButtonGroup>
      </GoAModal>
      <hr />
      <GoANotification type="information" testId="GoANotification-TestId" >Notification banner message</GoANotification>
      <hr />
      <GoATable width="100%" testId="GoATable-TestId" >
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {pageUsers.map((user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </GoATable>
      <GoABlock alignment="center" testId="GoABlock-TestId" >
        <GoABlock mb="m" alignment="center">
          Show
          <GoADropdown value="10" width="8ch" onChange={handlePerPageCountChangeEvent}>
            <GoADropdownItem value="10" label="10" />
            <GoADropdownItem value="20" label="20" />
            <GoADropdownItem value="30" label="30" />
          </GoADropdown>
          <span>of {users.length}</span>
        </GoABlock>
        <GoASpacer hSpacing="2xl" vSpacing="4xl" testId="GoASpacer-TestId"/>
        <GoAPagination itemcount={users.length} perpagecount={perPage} pagenumber={page} onChange={handlePageChange}  testId="GoAPagination-TestId"/>
      </GoABlock>
      <hr />
      <div style={{ maxWidth: "250px" }}>
        <GoASideMenu testId="GoASideMenu-TestId">
          <GoASideMenuHeading testId="GoASideMenuHeading-TestId">Nav section 1</GoASideMenuHeading>
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <GoASideMenuHeading icon="home">Nav section 2</GoASideMenuHeading>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <GoASideMenuHeading>Nav with sub nav</GoASideMenuHeading>
          <GoASideMenuGroup heading="Group heading" testId="GoASideMenuGroup-TestId">
            <a href="#">Foo</a>
            <a href="#">Bar</a>
          </GoASideMenuGroup>
        </GoASideMenu>
      </div>
      <hr />
      <GoABlock gap="none">
        <div>Item 1</div>
        <GoASpacer />
        <div>Item 1</div>
        <GoASpacer />
        <div>Item 1</div>
        </GoABlock>
        <hr />
        <GoATable width="100%"  testId="GoATable-TestId">
          <thead>
            <tr>
              <th>Status</th>
              <th>Text</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <GoABadge type="information" content="Badge text" />
              </td>
              <td>Lorem ipsum</td>
              <td>1234567890</td>
              <td>
                <GoAButton type="tertiary">Action</GoAButton>
              </td>
            </tr>
            <tr>
              <td>
                <GoABadge type="information" content="Badge text" />
              </td>
              <td>Lorem ipsum</td>
              <td>1234567890</td>
              <td>
                <GoAButton type="tertiary">Action</GoAButton>
              </td>
            </tr>
            <tr>
              <td>
                <GoABadge type="information" content="Badge text" />
              </td>
              <td>Lorem ipsum</td>
              <td>1234567890</td>
              <td>
                <GoAButton type="tertiary">Action</GoAButton>
              </td>
            </tr>
          </tbody>
        </GoATable>
        <hr />
        <GoATabs  testId="GoATabs-TestId">
          <GoATab heading="Tab Item 1">
            Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </GoATab>
          <GoATab heading="Tab Item 2">
            Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </GoATab>
          <GoATab heading="Tab Item 3">
            Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </GoATab>
        </GoATabs>
      </div>
  );
}
