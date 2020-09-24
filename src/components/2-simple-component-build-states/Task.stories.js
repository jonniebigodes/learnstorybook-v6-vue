// src/components/Task.stories.js

import Task from "./Task";
import { action } from "@storybook/addon-actions";

export default {
  title: "2: Simple Component - Build out the States/Task",
  component: Task
};

const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  methods: {
    onPinTask: action("on-pin-task"),
    onArchiveTask: action("on-archive-task")
  },
  template:
    '<Task :task="task" @pin-task="onPinTask" @archive-task="onArchiveTask" />'
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0)
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED"
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED"
  }
};
