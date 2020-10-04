<template>
  <PureTaskList :tasks="tasks" v-on="$listeners" />
</template>

<script>
import PureTaskList from "./PureTaskList";
import { mapState, mapActions } from "vuex";

export default {
  components: { PureTaskList },

  methods: {
    ...mapActions(["archiveTask", "pinTask"])
  },

  computed: {
    ...mapState(["tasks"])
  }
};
</script>
