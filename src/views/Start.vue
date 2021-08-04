<template>
  <ToggleTheme />
  <div class="mainContainer">
    <Title />
    <div>
      <h2>NebuDev14</h2>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';
import ToggleTheme from '@/components/ToggleTheme.vue';

export default {
  name: 'Start',
  components: {
    Title, ToggleTheme
  }
}
</script>

<style>
  .mainContainer {
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
