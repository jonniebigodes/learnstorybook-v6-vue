<!--src/App.vue-->
<template>
  <div id="app">
    <TaskList />
  </div>
</template>

<script>
import store from "./store";
import TaskList from "./components/4-data/TaskList.vue";

export default {
  name: "app",
  store,
  components: {
    TaskList
  }
};
</script>

<style>
@import "./index.css";
</style>
