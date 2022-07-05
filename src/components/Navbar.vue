<template>
  <div id="nav">
    <router-link to="/">HOME</router-link> |
    <router-link to="/about">ABOUT</router-link> |
    <router-link to="/propertyListings">PROPERTIES</router-link> |
    <router-link to="/admin">ADMIN</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: white;
  margin: 1rem;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
