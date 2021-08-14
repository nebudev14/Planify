<template>
  <ToggleTheme />
  <div class="mainContainer">
    <button v-on:click="routeToStart" class="btn">Back</button>
    <Calendar />
  </div>
</template>

<script lang="ts">
  import router from '../router';
  import ToggleTheme from '@/components/ToggleTheme.vue';
  import Calendar from '@/components/Calendar.vue';

  export default {
    name: 'Planner',
    components: { Calendar, ToggleTheme },
    methods: {
        routeToStart() {
            router.push({ path: `/` })
        }
    }
  }

</script>

<style>

</style>