<template>  
  <router-view/>
</template>

<style>
:root {
  --primary-color: #42b983;
  --primrary-color-dark: #189e74;
  --text-color: #2c3e50;
  --background-color: #fff;
}
[data-theme="darkMode"] {
  --text-color: #fff;
  --background-color: #242629;
}
* {
  background-color: var(--background-color);
}

body {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
