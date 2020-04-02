<template>
  <section class="movie">
    <Card :comic="comic" v-if="loading" />
  </section>
</template>

<script>
import Card from "@/components/card/Card.vue";
import Comic from "@/services/comic.js";

export default {
  name: "Movie",

  components: {
    Card
  },

  data() {
    return {
      comic: {},
      loading: false
    };
  },

  created() {
    this.getMovie().then(data => {
      this.comic = data;
      this.loading = true;
    });
  },

  methods: {
    /*
     * Get random  number 1-1001
     */
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    /*
     * Get comic !
     */
    getMovie() {
      return new Promise(resolve => {
        let numberRandom = this.getRandomArbitrary(1, 1001);
        /*
         * Get comic from service
         */
        Comic.getMovie(numberRandom).then(res => {
          resolve(res.data);
        });
      });
    }
  }
};
</script>
