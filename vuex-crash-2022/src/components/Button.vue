<template>
  <button
    :style="{
      background: color,
    }"
    class="btn"
    @click="$emit('button-click')"
  >
    {{ text }}
  </button>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
};
</script>
