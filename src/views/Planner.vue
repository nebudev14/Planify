<template>
  <Calendar />
</template>

<script lang="ts">
  import { computed, ComputedRef, defineComponent } from 'vue';
  import router from '../router';
  import Calendar from '@/components/Calendar.vue';

  export default defineComponent({
    components: Calendar,

  })

</script>