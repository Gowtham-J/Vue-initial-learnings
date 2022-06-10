<template>
  <div
    @dblclick="toggleReminderTask(task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i class="fas fa-times" @click="deleteTask(task.id)"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    ...mapActions(["deleteTask", "toggleReminderTask"]),
  },
};
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
