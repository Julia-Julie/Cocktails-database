<template>
  <section class="cocktails-list d-flex flex-wrap flex-column flex-sm-row my-4">
    <app-card
      v-for="(drink, idx) in drinks"
      :key="idx"
      v-bind="{ idx, ...drink }"
      @delete="deletedFromDrinks"
    />
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>
          <pre>
            {{ drinkInfo }}
          </pre>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
// import axios from "axios";
import { mapState, mapActions, mapGetters } from "vuex";
import AppCard from "@/components/UI/AppCard/AppCard";
export default {
  name: "CocktailsList",
  components: { AppCard },
  data() {
    return {
      dialog: false,
      drinkInfo: {},
    };
  },
  created() {
    this.getDrinks();
  },
  computed: {
    ...mapState(["drinks"]),
    ...mapGetters(["getDrinkById", "getOpenedDrinkId"]),
  },
  watch: {
    getOpenedDrinkId(newVal) {
      if (newVal.length) {
        this.dialog = true;
        console.log(this.getDrinkById);
        this.drinkInfo = this.getDrinkById(newVal);
      }
    },
  },
  methods: {
    ...mapActions(["getDrinks", "deletedFromDrinks"]),
  },
};
</script>
<style scoped></style>
