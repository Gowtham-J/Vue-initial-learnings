<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @button-click="$emit('toggleAddTask')"
      :text="showAddTask ? 'close' : 'Add task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";
import { mapMutations, mapState } from "vuex";
export default {
  /* eslint-disable vue/multi-word-component-names */

  name: "Header",
  props: {
    title: String,
  },

  components: {
    Button,
  },
  computed: {
    ...mapState(["showAddTask"]),
    ...mapMutations(["toggleAddTask"]),
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
