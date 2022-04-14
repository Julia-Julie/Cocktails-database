<template>
  <v-card class="mx-auto mb-6" max-width="344">
    <v-img :src="strDrinkThumb" height="200px"></v-img>

    <v-card-title class="mb-18"> {{ strDrink }} </v-card-title>
    <div class="font-weight-light body-2 pl-4">
      <b class="blue--text">Category:</b>
      {{ strCategory }}
    </div>
    <div class="font-weight-light body-2 pl-4">
      <b class="blue--text">Type of glass:</b>
      {{ strGlass }}
    </div>

    <div class="subtitle-1 blue--text font-weight-bold pl-4 mt-4">
      Method of cooking
    </div>
    <v-card-subtitle class="cut-text my-1">
      {{ strInstructions }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text @click="exploreDrink(idx)">
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn color="red lighten-2" text @click="deleteDrink(idx)">
        delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AppCard",
  inheritAttrs: false,
  props: {
    idx: {
      type: Number,
      default: 0,
    },
    strDrink: {
      type: String,
      default: "",
    },
    strCategory: {
      type: String,
      default: "",
    },
    strGlass: {
      type: String,
      default: "",
    },
    strInstructions: {
      type: String,
      default: "",
    },
    strDrinkThumb: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    exploreDrink(idx) {
      this.$router.push(`/drink/${idx}`);
    },
    deleteDrink(idx) {
      // this.$emit("delete", { idx, strGlass: this.strGlass });
      this.$emit("delete", idx);
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
