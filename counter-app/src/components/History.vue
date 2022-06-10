<template>
  <div class="container">
    <h3>History</h3>
    <div class="flex">
      <p
        v-for="(number, index) in history"
        :key="index"
        :class="activeIndexes(value).includes(index) && 'bold'"
      >
        {{ number }}
      </p>
    </div>
    <input type="number" v-model="value" placeholder="Search By Index" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CounterHistory",
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>

<style>
.container {
  margin-top: 7rem;
}
.flex {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 25rem;
  margin: 0 auto;
  flex-wrap: wrap;
}
.flex p {
  margin: 1rem;
}
.bold {
  font-weight: 900;
}
</style>
