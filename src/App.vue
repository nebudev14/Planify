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
  mounted() {
    
  }
});
</script>

<style>

:root {
  --primary-color: #42b983;
  --primrary-color-dark: #189e74;
  --text-color: #2c3e50;
  --background-color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background-color);

}
</style>
