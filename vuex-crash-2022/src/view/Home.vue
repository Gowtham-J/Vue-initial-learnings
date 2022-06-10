<template>
  <AddTask v-if="showAddTask" @add-task="addTask" />
  <Tasks :tasks="tasks" />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import { mapActions, mapState } from "vuex";

export default {
  /* eslint-disable vue/multi-word-component-names */

  name: "Home",
  components: {
    Tasks,
    AddTask,
  },
  props: {
    showAddTask: Boolean,
  },

  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["addTask", "deleteTask", "fetchTask", "toggleReminderTask"]),
  },

  async created() {
    await this.fetchTask();
  },
};
</script>
