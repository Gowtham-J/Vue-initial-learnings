<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ counter }}</h1>
    <button @click="subFromCounter(value)">-</button>
    <input v-model="value" type="number" />
    <button @click="addToCounter(value)">+</button>
    <div>
      <button class="btn" @click="fetchRandomNumber">Add Random Number</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "MyCounter",
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCounter", "subFromCounter"]),
    ...mapActions(["fetchRandomNumber"]),
  },
};
</script>

<style>
.counter {
  font-size: 4rem;
}
.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #418983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}
button {
  border-radius: 100%;
  border: none;
  font-weight: 700;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}
</style>
