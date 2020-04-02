<template>
  <div id="app">
    <Comic />
  </div>
</template>

<script>
import Comic from "./components/Comic.vue";

export default {
  name: "App",

  components: {
    Comic
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  height: 100vh;
  color: #fff;
  display: flex;
}
</style>
