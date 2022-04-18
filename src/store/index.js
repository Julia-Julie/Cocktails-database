import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drinks: [],
    openedDrinkId: "",
  },
  mutations: {
    drinksData(state, payload) {
      state.drinks = payload;
    },
    mutateList(state, payload) {
      const deletedItem = state.drinks.splice(payload, 1);
      state.drinks = state.drinks.filter((drink) => {
        return drink !== deletedItem;
      });
    },
    mutateOpenedDrinkId(state, payload) {
      state.openedDrinkId = payload;
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
      ctx.commit("mutateList", payload);
    },
    setOpenedDrinkId(context, payload) {
      context.commit("mutateOpenedDrinkId", payload);
    },
  },
  getters: {
    // getDrinkById: (state) => (id) =>
    //   state.drinks.find(({ idDrink }) => idDrink === id),

    getDrinkById(state) {
      return (id) => {
        return state.drinks.find(({ idDrink }) => {
          return idDrink === id;
        });
      };
    },
    getOpenedDrinkId(state) {
      return state.openedDrinkId;
    },
  },
});
