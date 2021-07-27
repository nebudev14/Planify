<template>
    <h1>{{ plans }}</h1>
    <button v-on:click="routeToStart" class="btn">Back</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router';

var month:string = (new Date().getMonth()+1).toString();
var day:string = new Date().getDate().toString();
var year:string = new Date().getFullYear().toString();

export default defineComponent({
    name: 'Calendar',
    data() {
        return {
            plans: month + "/" + day + "/" + year
        }
    },
    methods: {
        routeToStart() {
            router.push({ path: `/` })
        }
    }
})
</script>

<style>

</style>