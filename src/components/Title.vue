<template>
  <div class="hello">
    <h1 class="title">Planify</h1>
    <h2 class="desc">An easy way to plan out your day!</h2>
    <button v-on:click="getStarted" class="btn">Get started</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Title',
  methods: {
    getStarted() {
      console.log("getting started");
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    font-size: 350%;
  }
  .desc {
    font-size: 200%;
  }

  .btn {
    display: inline-block;
    margin-top: 3rem;
    width: 200px;
    padding: 10px;
    border-radius: 15px;
    color: #fff;
    font-size: 150%;
    background-color: #42b983;
    border: 1px solid #42b983;
    transition: 300ms ease;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #189e74;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transform: scale(1.02);
  }
  
</style>
