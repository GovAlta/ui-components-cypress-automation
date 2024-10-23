import React, { useState } from 'react';
import {
  GoAContainer,
  GoAFormItem,
  GoARadioGroup,
  GoARadioItem,
  GoADivider,
  GoAInput,
  GoAButton,
  GoAButtonGroup,
  GoADropdown,
  GoADropdownItem,
} from "@abgov/react-components";

export default function Bug2114Page(props) {
  type Task = {
    value: string;
    label: string;
    mount: DropdownItemMountType;
  };
  const [tasks, setTasks] = useState<Task[]>([
    { label: "Finish Report", value: "finish-report", mount: "append" },
    { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
    { label: "Reply Emails", value: "reply-emails", mount: "append" },
  ]);
  const [newTask, setNewTask] = useState<string>("");
  const [mountType, setNewMountType] = useState<string>("append");
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [taskError, setTaskError] = useState<boolean>(false);

  function onMountTypeChange(value: string) {
    setNewMountType(value);
  }

  function addTask() {
    if (newTask === "") {
      setTaskError(true);
      return;
    }
    setTaskError(false);

    const task = {
      label: newTask,
      value: newTask.toLowerCase().replace(" ", "-"),
      mount: mountType as DropdownItemMountType,
    };
    setTasks([...tasks, task]);
  }

  function reset() {
    setTasks([]);
    setNewMountType("append");
    setNewTask("");
    setSelectedTask("");
    setTaskError(false);
  }

  return (
    <>
    <GoAContainer mt="m" mb="none">
    <div style={{ padding: "40px" }}>
      <GoAFormItem
        requirement="required"
        mt="m"
        label="Name of item"
        error={taskError ? "Please enter item name" : undefined}
        helpText="Add an item to the dropdown list below">
        <GoAInput
          onChange={(_, value: string) => setNewTask(value)}
          name="item"
          placeholder=""
          value={newTask}></GoAInput>
      </GoAFormItem>

      <GoAFormItem mt="m" label="Add to">
        <GoARadioGroup
          name="mountType"
          onChange={(_name, value) => onMountTypeChange(value)}
          value={mountType}
          orientation="horizontal">
          <GoARadioItem value="prepend" label="Start" />
          <GoARadioItem value="append" label="End" />
        </GoARadioGroup>
      </GoAFormItem>

      <GoAButtonGroup alignment={"start"} gap="relaxed">
        <GoAButton mt="m" type="primary" onClick={addTask} testId="newItem">
          Add new item
        </GoAButton>
        <GoAButton mt="m" type="tertiary" onClick={reset} testId="resetItem">
          Reset list
        </GoAButton>
      </GoAButtonGroup>

      <GoADivider mt="m"></GoADivider>
      <GoAFormItem mt="m" label="All items">
        <GoADropdown
          key={tasks.length}
          onChange={(_, values: string[] | string) => setSelectedTask(values as string)}
          value={selectedTask}
          name="selectedTask">
          {tasks.map(task => (
            <GoADropdownItem
              key={task.value}
              value={task.value}
              mountType={task.mount}
              label={task.label}></GoADropdownItem>
          ))}
        </GoADropdown>
      </GoAFormItem>
    </div>
  </GoAContainer>
    </>
  )
}
