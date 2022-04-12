<template>
  <div class="app-button">
    <v-text-field :label="label" hide-details="auto"></v-text-field>
  </div>
</template>
<script>
export default {
  name: "AppInput",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    title: "Main input",
  }),
};
</script>

<style lang="scss" scoped>
.v-input {
  display: inline-block;
}
</style>
