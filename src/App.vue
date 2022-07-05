<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: white;
  margin: 1rem;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
