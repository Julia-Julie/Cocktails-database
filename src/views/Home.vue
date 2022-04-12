<template>
  <div class="home">
    <cocktails-list />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import CocktailsList from "@/components/CocktailsList/CocktailsList";
export default {
  name: "Home",
  components: { CocktailsList },
};
</script>
