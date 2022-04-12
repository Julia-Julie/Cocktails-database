<template>
  <v-btn :elevation="elevation" :color="color" @click="handleClick">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    elevation: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped></style>
