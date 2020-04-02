<template>
  <div class="card">
    <div class="card-left">
      <img :src="comic.img" :alt="comic.alt" />
    </div>
    <div class="card-right">
      <h1>{{ comic.title }}</h1>
      <span>{{ date }}</span>
      <Stars />
    </div>
  </div>
</template>

<script>
import moment from "moment";

import Stars from "@/components/stars/Stars.vue";

export default {
  name: "Card",

  components: { Stars },
  props: {
    comic: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    /*
     * convert date to words
     */
    date() {
      const d = new Date(
        `${this.comic.year}/${this.comic.month}/${this.comic.day}`
      );

      return moment(d).format("MMMM d, YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./card.scss";
</style>
