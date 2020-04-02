<template>
  <div class="star-rating">
    <label
      class="star-rating__star"
      v-for="(rating, index) in ratings"
      :class="{
        'is-selected': check_star >= rating && check_star != null,
        'is-disabled': disabled
      }"
      @click="set(rating)"
      @mouseover="star_over(rating)"
      @mouseout="star_out"
      :key="index"
    >
      <!-- Star -->
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        :value="rating"
        :name="name"
        v-model="check_star"
        :disabled="disabled"
      />★</label
    >
  </div>
</template>

<script>
export default {
  name: "Stars",

  props: {
    name: String,
    value: null,
    id: String,
    disabled: Boolean,
    required: Boolean
  },

  data() {
    return {
      temp_value: null,
      ratings: [1, 2, 3, 4, 5],
      check_star: this.value
    };
  },

  methods: {
    star_over(index) {
      if (!this.disabled) {
        this.temp_value = this.value;
        return (this.check_star = index);
      }
    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out() {
      if (!this.disabled) {
        return (this.check_star = this.temp_value);
      }
    },

    /*
     * Set the rating.
     */
    set(value) {
      if (!this.disabled) {
        this.temp_value = value;
        return (this.check_star = value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./stars";
</style>
