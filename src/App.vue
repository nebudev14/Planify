<template>
  <Title />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from './components/Title.vue';

export default defineComponent({
  name: 'App',
  components: {
    Title
  },
});
</script>

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


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

</style>
