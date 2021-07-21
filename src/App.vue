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
  }
});
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
</style>
