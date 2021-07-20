<template>
  <Title msg="Planify"/>
  <Calendar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from './components/Title.vue';
import Calendar from './components/Calendar.vue';


export default defineComponent({
  name: 'App',
  components: {
    Title,
    Calendar
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
