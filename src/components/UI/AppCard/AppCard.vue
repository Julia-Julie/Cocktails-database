<template>
  <v-card class="mx-auto mb-6" max-width="344">
    <v-img
      src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg  "
      height="200px"
    ></v-img>

    <v-card-title class="mb-18"> Margarita </v-card-title>
    <div class="font-weight-light body-2 pl-4">
      <b class="blue--text">Category:</b>
      Cocktail glass
    </div>
    <div class="font-weight-light body-2 pl-4">
      <b class="blue--text">Type of glass:</b>
      Cocktail glass
    </div>

    <div class="subtitle-1 blue--text font-weight-bold pl-4 mt-4">
      Method of cooking
    </div>
    <v-card-subtitle class="cut-text my-1">
      Rub the rim of the glass with the lime slice to make the salt stick to it.
      Take care to moisten only the outer rim and sprinkle the salt on it. The
      salt should present to the lips of the imbiber and never mix into the
      cocktail. Shake the other ingredients with ice, then carefully pour into
      the glass."
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show" class="mb-16">
        <v-divider />

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "AppCard",
  props: {},
  data: () => ({
    show: false,
  }),
  methods: {
    handleClick() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.cut-text {
  padding: 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
