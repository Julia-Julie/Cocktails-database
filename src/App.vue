<template>
  <v-app>
    <v-app-bar app color="blue-grey accent-1" dark>
      <div class="d-flex align-center logo" @click="moveToMainPage">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://images.immediate.co.uk/production/volatile/sites/2/2021/07/GettyImages_933801552-6e4a61e.jpg?quality=90&resize=556,505"
          transition="scale-transition"
          width="40"
        />

        <h2>Cocktails</h2>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/Home" class="white--text">Home</router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    moveToMainPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
</style>
