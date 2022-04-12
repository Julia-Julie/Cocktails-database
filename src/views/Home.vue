<template>
  <div class="home pa-6">
    <app-input label="Enter a Cocktail" />

    <app-button
      v-bind="{ text: 'Add to list', elevation: 5 }"
      class="my-5"
      @click="addCocktail"
    />

    <div class="filter">
      <div class="pagination-btns d-flex justify-center">
        <app-button
          v-bind="{ text: 'Back', elevation: 2, color: 'blue' }"
          class="my-5 mx-1"
          @click="back"
        />
        <app-button
          v-bind="{ text: 'Forward', elevation: 2 }"
          class="my-5 mx-1"
          @click="forward"
        />
      </div>

      <app-input label="Find a Cocktail" class="mb-4" />
    </div>

    <cocktails-list />
  </div>
</template>

<script>
import CocktailsList from "@/components/CocktailsList/CocktailsList";
import AppInput from "@/components/UI/AppInput/AppInput";
import AppButton from "@/components/UI/AppButton/AppButton";
export default {
  name: "Home",
  components: { AppButton, AppInput, CocktailsList },
  methods: {
    addCocktail() {
      console.log("addCocktail");
    },
    back() {
      console.log("back");
    },
    forward() {
      console.log("forward");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-input {
  display: inline-block;
}

.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
