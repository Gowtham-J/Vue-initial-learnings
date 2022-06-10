import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
      history: [0],
    };
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    },
    subFromCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter);
    },
  },
  actions: {
    async fetchRandomNumber(context) {
      const res = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );

      context.commit("addToCounter", res.data);
    },
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
