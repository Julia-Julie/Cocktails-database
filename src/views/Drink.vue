<template>
  <section class="drink">
    <h1>drink</h1>
    <pre>{{ this.$route.params }}</pre>
  </section>
</template>

<script>
export default {
  name: "Drink",
  mounted() {
    this.routeParam();
  },
  methods: {
    routeParam() {
      console.log(this);
    },
  },
};
</script>

<style scoped></style>
