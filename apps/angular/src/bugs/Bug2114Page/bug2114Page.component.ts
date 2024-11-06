import { Component } from "@angular/core";

type DropdownItemMountType = "append" | "prepend" | "reset";

interface Task {
  value: string;
  label: string;
  mount: DropdownItemMountType;
}

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug2114Page.component.html",
})
export class Bug2114PageComponent {
  tasks: Task[] = [
      { label: "Finish Report", value: "finish-report", mount: "append" },
      { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
      { label: "Reply Emails", value: "reply-emails", mount: "append" },
    ];
    newTask = "";
    mountType: DropdownItemMountType = "append";
    selectedTask = "";
    taskError = false;
    renderTrigger = true;

    constructor() {}

    onMountTypeChange(event: Event): void {
      this.mountType = (event as CustomEvent).detail.value as DropdownItemMountType;
    }

    onNewTaskChange(event: Event): void {
      this.newTask = (event as CustomEvent).detail.value;
      this.taskError = false;
    }

    onSelectedTaskChange(event: Event): void {
      this.selectedTask = (event as CustomEvent).detail.value;
    }

    addTask(): void {
      if (this.newTask === "") {
        this.taskError = true;
        return;
      }
      this.taskError = false;
      const task: Task = {
        label: this.newTask,
        value: this.newTask.toLowerCase().replace(" ", "-"),
        mount: this.mountType,
      };
      this.tasks =
        this.mountType === "prepend" ? [task, ...this.tasks] : [...this.tasks, task];
      this.newTask = "";
    }

    reset(): void {
      this.newTask = "";
      this.selectedTask = "";
      this.taskError = false;
      this.tasks = [];
      this.forceRerender();
    }

    forceRerender(): void {
      this.renderTrigger = false;
      setTimeout(() => {
        this.renderTrigger = true;
      }, 0);
    }

    trackByFn(index: number, item: Task): string {
      return item.value;
    }
}
