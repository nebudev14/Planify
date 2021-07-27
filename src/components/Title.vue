<template>
  <div class="titleDiv">
    <h1 class="title">Planify</h1>
    <h2 class="desc">An easy way to plan out your day!</h2>
    <button v-on:click="getStarted" class="btn">Get started</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router/';


export default defineComponent({
  name: 'Title',
  methods: {
    getStarted() {
      router.push({ path: `/planner` })
    }
  }
});
</script>

<style>

  .titleDiv {
    position: absolute;
  }

  .title {
    font-size: 350%;
  }
  .desc {
    font-size: 200%;
  }

  .btn {
    display: inline-block;
    margin-top: 2rem;
    width: 200px;
    padding: 10px;
    border-radius: 15px;
    color: #fff;
    font-size: 150%;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.17), 0 17px 50px 0 rgba(0,0,0,0.11);
    transition: 300ms ease;
  }

  .btn:hover {
    cursor: pointer;
    background-color: var(--primrary-color-dark);
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transform: scale(1.03);
  }
</style>
