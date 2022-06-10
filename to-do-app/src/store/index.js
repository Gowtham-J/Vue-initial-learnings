/* eslint-disable no-unused-vars */
import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

// to load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    todos,
  },
});
