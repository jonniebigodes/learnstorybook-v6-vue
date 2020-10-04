<template>
  <div class="list-items">
    <template v-if="loading">loading</template>
    <template v-else-if="isEmpty">empty</template>
    <template v-else>
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        v-on="$listeners"
      />
    </template>
  </div>
</template>

<script>
import Task from "./Task";

export default {
  components: { Task },

  props: {
    loading: { type: Boolean, default: false },
    tasks: { type: Array, default: () => [] }
  },

  computed: {
    isEmpty() {
      return this.tasks.length === 0;
    }
  }
};
</script>
