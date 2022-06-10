<template>
  <div v-bind:key="task.id" v-for="task in tasks">
    <Task :task="task" />
  </div>
</template>

<script>
import Task from "./Task.vue";
import { mapState } from "vuex";
export default {
  /* eslint-disable vue/multi-word-component-names */

  name: "Tasks",
  components: {
    Task,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  emits: ["delete-task", "reminder-task"],
};
</script>
