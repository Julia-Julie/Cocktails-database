import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drinks: [],
  },
  mutations: {
    drinksData(state, payload) {
      state.drinks = payload;
    },
    mutateList(state, payload) {
      // console.log("state", state);
      console.log("payload", payload);

      const deletedItem = state.drinks.splice(payload, 1);
      console.log(deletedItem);
      state.drinks = state.drinks.filter((drink) => {
        return drink !== deletedItem;
      });
    },
  },
  actions: {
    async getDrinks(ctx) {
      try {
        const resp = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        );
        ctx.commit("drinksData", resp.data.drinks);
      } catch (error) {
        console.log("error", error);
      }
    },
    deletedFromDrinks(ctx, payload) {
      console.log(payload);
      ctx.commit("mutateList", payload);
    },
  },
  getters: {},
});
