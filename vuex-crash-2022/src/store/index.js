import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  mutations: {
    fetchTaskMutation(state, payload) {
      state.tasks = payload;
    },
    insertNewTask(state, payload) {
      state.tasks.push(payload);
      //   state.tasks = state.tasks.push(payload);
    },
    deleteTaskMutation(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    toggleReminderTaskMutate(state, payload) {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id
          ? { ...task, reminder: payload.data.reminder }
          : task
      );
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
  actions: {
    async addTask(context, task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      context.commit("insertNewTask", data);

      //   this.tasks = [...this.tasks, data];
    },
    async deleteTask(context, id) {
      if (confirm("Are you sure")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? context.commit("deleteTaskMutation", id)
          : alert("Error Deleting Task");
      }
    },

    async fetchTask(context) {
      const res = await fetch("api/tasks");

      const data = await res.json();
      context.commit("fetchTaskMutation", data);

      //   return data;
    },
    async fetchSingleTask(context, id) {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();
      return data;
    },
    async toggleReminderTask(context, id) {
      const updateTask = await context.dispatch("fetchSingleTask", id);
      //   const updateTask = await dispatch("fetchSingleTask(id)");
      const updTask = { ...updateTask, reminder: !updateTask.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });

      const data = await res.json();
      context.commit("toggleReminderTaskMutate", { id, data });
    },
  },
});

export default store;
