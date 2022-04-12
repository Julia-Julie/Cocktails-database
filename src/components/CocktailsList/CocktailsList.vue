<template>
  <section class="cocktails-list">
    <app-card v-for="(_, idx) in 6" :key="idx" />
  </section>
</template>

<script>
import AppCard from "@/components/UI/AppCard/AppCard";
export default {
  name: "CocktailsList",
  components: { AppCard },
};
</script>
<style scoped></style>
