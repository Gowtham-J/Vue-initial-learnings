<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="text" placeholder="Search Jokes..." />
      <input type="submit" value="Search Jokes" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-jokes", this.text);
      this.text = "";
    },
  },
};
</script>

<style></style>
