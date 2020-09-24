<!-- src/components/Task.vue -->

<template>
  <div class="list-item" :class="task.state">
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="$emit('archive-task', task.id)" />
    </label>
    <div class="title">
      <input
        type="text"
        :value="task.title"
        :readonly="true"
        placeholder="Input title"
      />
    </div>

    <div class="actions">
      <a v-if="!isArchived" @click="$emit('pin-task', task.state)">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ id: "", state: "", title: "" }),
      validator: task => ["id", "state", "title"].every(key => key in task)
    }
  },
  computed: {
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    },
    isArchived() {
      return this.task.state === "TASK_ARCHIVED";
    }
  }
};
</script>
