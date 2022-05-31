<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/favorites">Favorites</router-link>
  </nav>
  <router-view/>
</template>

<script>



</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  padding: 30px;


}

nav {
  padding: 40px;
}

nav a {
  font-weight: bold;
  color: whitesmoke;
}

nav a.router-link-exact-active {
  color: #C6CED3;
}
</style>
