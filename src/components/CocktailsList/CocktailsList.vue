<template>
  <section class="cocktails-list d-flex flex-wrap flex-column flex-sm-row my-4">
    <app-card
      v-for="(drink, idx) in drinks"
      :key="idx"
      v-bind="{ idx, ...drink }"
      @delete="deletedFromDrinks"
    />
  </section>
</template>

<script>
// import axios from "axios";
import { mapState, mapActions } from "vuex";
import AppCard from "@/components/UI/AppCard/AppCard";
export default {
  name: "CocktailsList",
  components: { AppCard },
  created() {
    this.getDrinks();
  },
  computed: {
    ...mapState(["drinks"]),
  },
  methods: {
    ...mapActions(["getDrinks", "deletedFromDrinks"]),
  },
};
</script>
<style scoped></style>
