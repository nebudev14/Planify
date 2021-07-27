<script lang="ts">
  import { computed, ComputedRef, defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import Calendar from '@/components/Calendar.vue';

  export default defineComponent({
    components: Calendar,
    setup() {
      const router = useRoute();
      
    }
  })

</script>