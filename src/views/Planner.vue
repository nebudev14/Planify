<template>
  <Calendar />
  <button v-on:click="routeToStart" class="btn">Back</button>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import router from '../router';
  import Calendar from '@/components/Calendar.vue';

  export default defineComponent({
    name: 'Planner',
    components: Calendar,
    methods: {
        routeToStart() {
            router.push({ path: `/` })
        }
    }

  })

</script>

<style>

</style>